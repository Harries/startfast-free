import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Founder, TechStart',
    content: 'StartFast saved me weeks of development time. The authentication and payment integration just works out of the box!',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Full Stack Developer',
    content: 'Best Next.js boilerplate I\'ve used. Clean code, great documentation, and the dark mode support is beautiful.',
    rating: 5,
  },
  {
    name: 'Michael Park',
    role: 'Indie Hacker',
    content: 'Launched my SaaS in just 2 weeks instead of 2 months. The Stripe integration is perfectly implemented.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'CTO, StartupXYZ',
    content: 'We use StartFast for all our new projects. It\'s become our go-to template for rapid prototyping.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Software Engineer',
    content: 'The code quality is excellent. TypeScript support, proper error handling, and great developer experience.',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Product Manager',
    content: 'Even as a non-developer, I found it easy to customize. The component structure is very intuitive.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join thousands of developers who ship faster with StartFast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
