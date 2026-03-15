import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, CreditCard, Mail, Database, Palette, Search } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Authentication',
    description: 'Secure authentication with Better-Auth, supporting email/password, OAuth, and magic links.',
  },
  {
    icon: CreditCard,
    title: 'Payments',
    description: 'Stripe integration for subscriptions and one-time payments with webhook handling.',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Transactional emails with Resend. Beautiful templates included.',
  },
  {
    icon: Database,
    title: 'Database',
    description: 'Type-safe database operations with Drizzle ORM and PostgreSQL.',
  },
  {
    icon: Palette,
    title: 'Dark Mode',
    description: 'Beautiful dark mode support with next-themes. Automatic system preference detection.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices with meta tags, Open Graph, and JSON-LD.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            All the features you need to build your SaaS, pre-configured and ready to go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
