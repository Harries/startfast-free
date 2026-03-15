import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 dark:border-primary-800 dark:bg-primary-900/30 px-4 py-1.5 text-sm font-medium text-primary-700 dark:text-primary-300">
            <span className="mr-2">✨</span>
            Open Source & Free Forever
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Ship Your SaaS{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              10x Faster
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            A production-ready Next.js boilerplate with authentication, payments, email, and more. Stop wasting time on boilerplate code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <p className="mt-12 text-sm text-slate-500 dark:text-slate-400">
            Trusted by developers worldwide
          </p>
          <div className="mt-4 flex items-center justify-center gap-8 opacity-50 grayscale">
            <div className="h-8 w-24 bg-slate-300 dark:bg-slate-600 rounded" />
            <div className="h-8 w-24 bg-slate-300 dark:bg-slate-600 rounded" />
            <div className="h-8 w-24 bg-slate-300 dark:bg-slate-600 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
