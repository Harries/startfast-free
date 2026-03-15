'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Is StartFast really free?',
    answer: 'Yes! StartFast is completely free and open-source. You can use it for personal and commercial projects without any cost. We believe in giving back to the developer community.',
  },
  {
    question: 'What tech stack does StartFast use?',
    answer: 'StartFast is built with Next.js 15, React 19, TypeScript, Tailwind CSS, Better-Auth for authentication, Drizzle ORM with PostgreSQL, Stripe for payments, and Resend for emails.',
  },
  {
    question: 'Do I need to know TypeScript?',
    answer: 'While TypeScript knowledge helps, the code is well-documented and follows common patterns. If you know JavaScript, you can work with the codebase and learn TypeScript along the way.',
  },
  {
    question: 'Can I use a different database?',
    answer: 'Yes! While we use PostgreSQL by default with Drizzle ORM, you can easily switch to MySQL, SQLite, or other databases supported by Drizzle. Just update the configuration and schema.',
  },
  {
    question: 'How do I deploy StartFast?',
    answer: 'StartFast works great with Vercel (recommended), but you can deploy to any platform that supports Next.js, including Railway, Render, AWS, or your own server.',
  },
  {
    question: 'Is there a Pro version?',
    answer: 'We offer a Pro version with additional features like multi-language support, advanced analytics, admin dashboard, and priority support. But the free version is fully functional for most use cases.',
  },
  {
    question: 'How do I get support?',
    answer: 'For free users, we have a GitHub Discussions community where you can ask questions. Pro users get access to priority email support and a private Discord channel.',
  },
  {
    question: 'Can I customize the design?',
    answer: 'Absolutely! The UI is built with Tailwind CSS, making it easy to customize colors, spacing, and components. You can modify the tailwind.config.ts to match your brand.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-slate-500 transition-transform flex-shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <p className="text-slate-600 dark:text-slate-300">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about StartFast
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
