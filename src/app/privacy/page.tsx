import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Welcome to StartFast. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-4 space-y-2">
              <li>Identity Data: name, username</li>
              <li>Contact Data: email address</li>
              <li>Technical Data: IP address, browser type, device information</li>
              <li>Usage Data: information about how you use our website and services</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-4 space-y-2">
              <li>Provide and maintain our service</li>
              <li>Notify you about changes to our service</li>
              <li>Provide customer support</li>
              <li>Monitor the usage of our service</li>
              <li>Detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, erase, restrict, or object to processing of your personal data.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              If you have any questions about this privacy policy, please contact us at privacy@example.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
