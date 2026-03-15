import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Ship Faster?
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Join thousands of developers who are building their SaaS products with StartFast.
          </p>
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
