import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              By accessing or using StartFast, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Permission is granted to temporarily download one copy of the materials on StartFast for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-300 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              The materials on StartFast are provided on an &apos;as is&apos; basis. StartFast makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              In no event shall StartFast or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StartFast.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Accuracy of Materials</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              The materials appearing on StartFast could include technical, typographical, or photographic errors. StartFast does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Links</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              StartFast has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by StartFast of the site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              StartFast may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              If you have any questions about these Terms, please contact us at legal@example.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
