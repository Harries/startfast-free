# StartFast

A free, open-source Next.js SaaS boilerplate to help you ship your product 10x faster.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Next.js 15** - Latest App Router with React 19
- **TypeScript** - Full type safety across the codebase
- **Authentication** - Email/password & OAuth (Google, GitHub) with Better-Auth
- **Database** - PostgreSQL with Drizzle ORM
- **Payments** - Stripe integration for subscriptions
- **Email** - Transactional emails with Resend
- **Dark Mode** - Built-in theme switching with next-themes
- **UI Components** - Beautiful components with Tailwind CSS
- **SEO Optimized** - Meta tags, Open Graph, and more
- **Responsive** - Mobile-first design

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Authentication | Better-Auth |
| Database | PostgreSQL + Drizzle ORM |
| Payments | Stripe |
| Email | Resend |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Harries/startfast-free.git
cd startfast-free
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/startfast"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-min-32-chars"
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
EMAIL_FROM="noreply@yourdomain.com"
```

4. **Push database schema**

```bash
npm run db:push
```

5. **Start development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
startfast-free/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/                # API routes
│   │   │   ├── auth/           # Better-Auth endpoints
│   │   │   └── webhooks/       # Stripe webhooks
│   │   ├── auth/               # Auth pages (signin, signup)
│   │   ├── dashboard/          # User dashboard
│   │   ├── docs/               # Documentation page
│   │   ├── privacy/            # Privacy policy
│   │   ├── terms/              # Terms of service
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Landing page sections
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faq.tsx
│   │   │   └── cta.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   ├── providers.tsx       # Context providers
│   │   └── theme-toggle.tsx    # Dark mode toggle
│   ├── db/
│   │   └── schema.ts           # Drizzle database schema
│   ├── lib/
│   │   ├── auth.ts             # Better-Auth server config
│   │   ├── auth-client.ts      # Better-Auth client
│   │   ├── db.ts               # Database connection
│   │   ├── stripe.ts           # Stripe configuration
│   │   ├── email.ts            # Email service
│   │   └── utils.ts            # Utility functions
│   └── styles/
│       └── globals.css         # Global styles
├── .env.example                # Environment variables template
├── drizzle.config.ts           # Drizzle ORM config
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind CSS config
└── tsconfig.json               # TypeScript config
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run db:generate` | Generate migrations |

## Database Schema

The project includes the following tables:

- **users** - User accounts
- **sessions** - Authentication sessions
- **accounts** - OAuth provider accounts
- **verifications** - Email verification tokens
- **subscriptions** - Stripe subscription data

## Authentication

StartFast uses [Better-Auth](https://better-auth.com) for authentication:

- Email/Password sign up and sign in
- OAuth providers (Google, GitHub)
- Session management
- Password reset (with email)

## Payments

Stripe integration includes:

- Checkout sessions
- Subscription management
- Webhook handling
- Customer portal

## Customization

### Branding

Update the logo and brand name in:
- `src/components/layout/header.tsx`
- `src/components/layout/footer.tsx`

### Colors

Modify the color palette in `tailwind.config.ts`:

```ts
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Landing Page

Edit sections in `src/components/sections/`:
- `hero.tsx` - Hero section with CTA
- `features.tsx` - Feature highlights
- `pricing.tsx` - Pricing plans
- `testimonials.tsx` - Customer reviews
- `faq.tsx` - Frequently asked questions
- `cta.tsx` - Call to action

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

StartFast works with any platform supporting Next.js:
- Railway
- Render
- AWS Amplify
- Docker

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [GitHub Repository](https://github.com/Harries/startfast-free)
- [Twitter/X](https://x.com/HarriesBLOG)

## Support

If you find this project helpful, please give it a star on GitHub!

---

Built with ❤️ by [Harries](https://x.com/HarriesBLOG)
