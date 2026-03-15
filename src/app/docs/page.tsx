import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  Rocket, 
  Database, 
  CreditCard, 
  Mail, 
  Shield, 
  Palette,
  ArrowRight
} from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    icon: Rocket,
    description: 'Quick start guide to set up your project',
    items: [
      { title: 'Installation', href: '#installation' },
      { title: 'Environment Variables', href: '#env-variables' },
      { title: 'Project Structure', href: '#project-structure' },
    ],
  },
  {
    title: 'Authentication',
    icon: Shield,
    description: 'Set up user authentication with Better-Auth',
    items: [
      { title: 'Configuration', href: '#auth-config' },
      { title: 'Email/Password', href: '#auth-email' },
      { title: 'OAuth Providers', href: '#auth-oauth' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Database setup with Drizzle ORM',
    items: [
      { title: 'Schema Definition', href: '#db-schema' },
      { title: 'Migrations', href: '#db-migrations' },
      { title: 'Queries', href: '#db-queries' },
    ],
  },
  {
    title: 'Payments',
    icon: CreditCard,
    description: 'Stripe integration for subscriptions',
    items: [
      { title: 'Setup Stripe', href: '#stripe-setup' },
      { title: 'Webhooks', href: '#stripe-webhooks' },
      { title: 'Subscriptions', href: '#stripe-subscriptions' },
    ],
  },
  {
    title: 'Email',
    icon: Mail,
    description: 'Transactional emails with Resend',
    items: [
      { title: 'Configuration', href: '#email-config' },
      { title: 'Templates', href: '#email-templates' },
      { title: 'Sending Emails', href: '#email-send' },
    ],
  },
  {
    title: 'Styling',
    icon: Palette,
    description: 'Customize the look and feel',
    items: [
      { title: 'Tailwind Config', href: '#tailwind' },
      { title: 'Dark Mode', href: '#dark-mode' },
      { title: 'Components', href: '#components' },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Everything you need to know to build your SaaS with StartFast.
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-12 border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4" id="installation">Quick Start</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">1. Clone and install dependencies:</p>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`git clone https://github.com/your-repo/startfast-free.git
cd startfast-free
npm install`}</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">2. Set up environment variables:</p>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`cp .env.example .env.local
# Edit .env.local with your credentials`}</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">3. Push database schema:</p>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`npm run db:push`}</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">4. Start development server:</p>
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{`npm run dev`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environment Variables */}
          <Card className="mb-12" id="env-variables">
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
              <CardDescription>Required configuration for your project</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`# Database
DATABASE_URL="postgresql://user:password@localhost:5432/startfast"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth (optional)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Stripe
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""

# Resend
RESEND_API_KEY=""
EMAIL_FROM="noreply@yourdomain.com"`}</code>
              </pre>
            </CardContent>
          </Card>

          {/* Sections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Card key={section.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <section.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="flex items-center text-sm text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                        >
                          <ArrowRight className="h-3 w-3 mr-2" />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Structure */}
          <Card className="mt-12" id="project-structure">
            <CardHeader>
              <CardTitle>Project Structure</CardTitle>
              <CardDescription>Overview of the codebase organization</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`startfast-free/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API routes
│   │   ├── auth/            # Auth pages
│   │   ├── dashboard/       # Dashboard pages
│   │   └── page.tsx         # Landing page
│   ├── components/          # React components
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Landing page sections
│   │   └── ui/              # UI components
│   ├── db/                  # Database
│   │   └── schema.ts        # Drizzle schema
│   ├── lib/                 # Utilities
│   │   ├── auth.ts          # Better-Auth config
│   │   ├── auth-client.ts   # Auth client
│   │   ├── db.ts            # Database client
│   │   ├── stripe.ts        # Stripe config
│   │   └── email.ts         # Email service
│   └── styles/
│       └── globals.css      # Global styles
├── .env.local               # Environment variables
├── drizzle.config.ts        # Drizzle config
└── tailwind.config.ts       # Tailwind config`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
