# Bao Bi Cong Minh Website

## Project Overview
Website for **DNTN Xi Nghiep Bao Bi Cong Minh** (Cong Minh Packaging) — a corrugated carton manufacturer in Hanoi, Vietnam. Live at https://baobicongminh.com.vn

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: shadcn/ui (base-ui primitives) + Tailwind CSS v4
- **Font**: Inter (Vietnamese subset) + Geist Mono
- **Email**: Resend API
- **Hosting**: Vercel (Pro plan, sweetstorystudio team)
- **Domain**: baobicongminh.com.vn (registered at tenten.vn)
- **Language**: TypeScript, bilingual VN/EN via cookie-based i18n

## Key Architecture Decisions
- **No CMS** — content lives in `src/data/` files. Owner updates via code.
- **Cookie-based i18n** — `getLang()` reads `lang` cookie, all server components are async
- **All pages are dynamic** (server-rendered) because they read the language cookie
- **No auth** — public website, no login required
- **shadcn/ui uses base-ui** (not Radix) — Button uses `render` prop, not `asChild`
- **No `font-mono` on Vietnamese text** — Geist Mono doesn't support Vietnamese diacritics

## File Structure
```
src/
  app/                    # Pages (App Router)
    api/contact/          # Contact form email handler
    api/quote/            # Quote form email handler
    bao-gia/              # RFQ landing page (ad target)
    gioi-thieu/           # About page
    he-thong-may-moc/     # Machinery & capabilities
    lien-he/              # Contact page
    san-pham/             # Product catalog + [slug] detail
    tin-tuc/              # Blog + [slug] post
    layout.tsx            # Root layout (Inter font, metadata, analytics)
    page.tsx              # Homepage
    sitemap.ts            # Dynamic sitemap
    robots.ts             # Robots.txt
  components/
    forms/                # ContactForm, QuoteForm (client components)
    home/                 # Hero, Stats, Products, WhyUs, Clients, CTA
    layout/               # Header, Footer, MobileNav, LanguageToggle, FloatingButtons
    products/             # ProductCard, ProductFilter
    ui/                   # shadcn/ui components (base-ui)
  data/                   # Products, machinery, posts, navigation
  lib/                    # email.ts, i18n.ts, utils.ts
```

## Environment Variables
- `RESEND_API_KEY` — Resend API key for email sending
- `CONTACT_EMAIL` — Email to receive form submissions (default: congminhpack@gmail.com)
- `NEXT_PUBLIC_GA_ID` — Google Analytics GA4 ID (optional)
- `NEXT_PUBLIC_FB_PIXEL_ID` — Facebook Pixel ID (optional)

## Common Tasks
- **Add a product**: Edit `src/data/products.ts`, add image to `public/images/products/`
- **Add a blog post**: Edit `src/data/posts.ts`
- **Update contact info**: Edit `src/data/navigation.ts`
- **Update machinery**: Edit `src/data/machinery.ts`
- **Deploy**: Push to `main` branch — Vercel auto-deploys

## Important Notes
- Never use `font-mono` class on Vietnamese text (diacritics break)
- Button component uses base-ui `render` prop pattern, not Radix `asChild`
- For links styled as buttons, use plain `<Link>` or `<a>` with Tailwind classes
- All pages call `getLang()` and pass `lang` prop to child components
- Product images use `object-contain` on detail pages (not `object-cover`)
