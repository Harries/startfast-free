import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, from }: SendEmailOptions) {
  const fromAddress = from || process.env.EMAIL_FROM || 'noreply@example.com';

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to,
      subject,
      html,
    });

    if (error) {
      console.error('Failed to send email:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

// Email templates
export function welcomeEmailTemplate(name: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Welcome to StartFast</title>
      </head>
      <body style="font-family: system-ui, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0ea5e9;">Welcome to StartFast!</h1>
        </div>
        <p>Hi ${name},</p>
        <p>Thank you for signing up for StartFast! We're excited to have you on board.</p>
        <p>With StartFast, you can:</p>
        <ul>
          <li>Build your SaaS faster with our pre-built components</li>
          <li>Handle authentication seamlessly</li>
          <li>Process payments with Stripe</li>
          <li>Send transactional emails</li>
        </ul>
        <p>If you have any questions, feel free to reach out to our support team.</p>
        <p>Best regards,<br>The StartFast Team</p>
      </body>
    </html>
  `;
}

export function passwordResetEmailTemplate(resetLink: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Reset Your Password</title>
      </head>
      <body style="font-family: system-ui, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0ea5e9;">Password Reset Request</h1>
        </div>
        <p>Hi,</p>
        <p>We received a request to reset your password. Click the button below to create a new password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background-color: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
            Reset Password
          </a>
        </div>
        <p>If you didn't request a password reset, you can safely ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
        <p>Best regards,<br>The StartFast Team</p>
      </body>
    </html>
  `;
}
