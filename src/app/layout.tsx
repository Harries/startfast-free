import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'StartFast - Free Next.js SaaS Boilerplate',
  description: 'Launch your SaaS product faster with our free, open-source Next.js boilerplate',
  openGraph: {
    title: 'StartFast - Free Next.js SaaS Boilerplate',
    description: 'Launch your SaaS product faster with our free, open-source Next.js boilerplate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StartFast - Free Next.js SaaS Boilerplate',
    description: 'Launch your SaaS product faster with our free, open-source Next.js boilerplate',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
