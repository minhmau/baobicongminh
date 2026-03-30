# Cong Minh Packaging Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign baobicongminh.com.vn as a modern, SEO-optimized, ad-friendly Next.js website for Cong Minh Packaging — a corrugated carton manufacturer in Hanoi (est. 1998, 30,000+ tons/year capacity).

**Architecture:** Next.js 16 App Router deployed on Vercel with the existing domain pointed via DNS. Static-first rendering (SSG) for all pages to maximize SEO and ad landing page speed. Vietnamese primary language with English toggle. No CMS — content lives in code. shadcn/ui + Tailwind CSS with a clean industrial dark-header aesthetic. Contact/quote forms use Server Actions emailing via Resend.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, Geist font, Resend (email), Vercel (hosting), next/image (image optimization)

---

## File Structure

```
congminh/
├── public/
│   ├── images/
│   │   ├── products/          # Product photos (from assets/)
│   │   ├── machinery/         # Factory/machine photos
│   │   ├── logo.png           # CM logo
│   │   ├── banner.jpg         # Hero banner
│   │   ├── og-image.jpg       # Open Graph fallback
│   │   └── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout (fonts, metadata, nav, footer)
│   │   ├── page.tsx                      # Homepage (hero, products preview, CTA, stats)
│   │   ├── gioi-thieu/
│   │   │   └── page.tsx                  # About page (history, org chart, facility)
│   │   ├── san-pham/
│   │   │   ├── page.tsx                  # Product catalog with filtering
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Product detail page
│   │   ├── he-thong-may-moc/
│   │   │   └── page.tsx                  # Machinery and capability page
│   │   ├── tin-tuc/
│   │   │   ├── page.tsx                  # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Blog post
│   │   ├── lien-he/
│   │   │   └── page.tsx                  # Contact page (form + map + info)
│   │   ├── bao-gia/
│   │   │   └── page.tsx                  # Quote request (RFQ) page — ad landing page
│   │   ├── sitemap.ts                    # Dynamic sitemap for SEO
│   │   ├── robots.ts                     # Robots.txt config
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts              # Contact form handler
│   │       └── quote/
│   │           └── route.ts              # RFQ form handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx                # Sticky nav with logo, links, language toggle, CTA
│   │   │   ├── footer.tsx                # Footer (contact, links, social, Zalo)
│   │   │   ├── mobile-nav.tsx            # Sheet-based mobile navigation
│   │   │   ├── language-toggle.tsx       # VN/EN switcher
│   │   │   └── floating-buttons.tsx      # Zalo + phone floating buttons
│   │   ├── home/
│   │   │   ├── hero-section.tsx          # Full-width hero with CTA
│   │   │   ├── stats-section.tsx         # Key numbers (25+ years, 30K tons, 15K m2, 200+ clients)
│   │   │   ├── products-preview.tsx      # 3 featured product cards
│   │   │   ├── why-us-section.tsx        # Value propositions grid
│   │   │   ├── clients-section.tsx       # Industry badges / trust signals
│   │   │   └── cta-section.tsx           # Quote request CTA banner
│   │   ├── products/
│   │   │   ├── product-card.tsx          # Product card for catalog
│   │   │   └── product-filter.tsx        # Category filter tabs
│   │   ├── forms/
│   │   │   ├── contact-form.tsx          # Contact form with validation
│   │   │   └── quote-form.tsx            # RFQ form (product type, quantity, specs)
│   │   └── ui/                           # shadcn/ui components (auto-generated)
│   ├── lib/
│   │   ├── utils.ts                      # cn() utility
│   │   └── email.ts                      # Resend email helper
│   └── data/
│       ├── products.ts                   # Product catalog data
│       ├── machinery.ts                  # Machinery list data
│       ├── posts.ts                      # Blog posts data
│       └── navigation.ts                 # Nav links + contact info
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── .env.local                            # RESEND_API_KEY, CONTACT_EMAIL
```

---

## Task 1: Project Scaffolding and Core Dependencies

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`
- Create: `src/app/layout.tsx`, `src/lib/utils.ts`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/minhpham/Desktop/congminh
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```

If prompted about overwriting existing files, confirm yes (the existing files are the docx and credentials — not code).

- [ ] **Step 2: Install core dependencies**

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install resend
npm install -D @tailwindcss/typography
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```

Choose: New York style, Zinc base color, CSS variables yes.

- [ ] **Step 4: Add required shadcn components**

```bash
npx shadcn@latest add button card sheet tabs badge separator input textarea label select dialog navigation-menu tooltip
```

- [ ] **Step 5: Set up Geist fonts in root layout**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bao Bi Cong Minh | San xuat thung carton, hop carton chat luong cao",
    template: "%s | Bao Bi Cong Minh",
  },
  description:
    "DNTN Xi nghiep Bao Bi Cong Minh - Chuyen san xuat thung carton song, hop carton in offset. Cong suat 30.000 tan/nam. Nha may tai KCN Quang Minh, Ha Noi.",
  keywords: [
    "bao bi carton",
    "thung carton",
    "hop carton",
    "carton song",
    "in offset",
    "bao bi cong minh",
    "san xuat thung carton ha noi",
    "thung carton 3 lop",
    "thung carton 5 lop",
  ],
  openGraph: {
    title: "Bao Bi Cong Minh | San xuat thung carton chat luong cao",
    description:
      "Chuyen san xuat bao bi carton song, hop giay in offset. Cong suat 30.000 tan/nam. KCN Quang Minh, Ha Noi.",
    url: "https://baobicongminh.com.vn",
    siteName: "Bao Bi Cong Minh",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://baobicongminh.com.vn" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Configure next.config.ts**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 7: Run dev server to verify**

```bash
npm run dev
```

Expected: Dev server starts on http://localhost:3000, default Next.js page renders.

- [ ] **Step 8: Commit**

```bash
git init
echo "node_modules\n.next\n.env*.local\nassets/" > .gitignore
git add .
git commit -m "feat: scaffold Next.js 16 project with shadcn/ui and Tailwind"
```

---

## Task 2: Image Assets and Product Data

**Files:**
- Create: `public/images/` (copy and organize images)
- Create: `src/data/products.ts`
- Create: `src/data/machinery.ts`
- Create: `src/data/navigation.ts`

- [ ] **Step 1: Organize image assets**

```bash
mkdir -p public/images/{products,machinery}

cp assets/website-images/carton-song-3-lop.webp public/images/products/
cp assets/website-images/hop-carton-song-5-lop.jpg public/images/products/
cp assets/website-images/hop-carton-song-5-lop1.jpg public/images/products/
cp assets/website-images/hop-cat-tong-in-offset.png public/images/products/
cp assets/website-images/thung-carton-3-lop1.jpg public/images/products/
cp assets/website-images/hop-carton-7-lop-ngan.jpg public/images/products/
cp assets/website-images/bao-gia-thung-carton-7-lop.jpg public/images/products/
cp assets/website-images/cong-minh-mixed-cake1.jpg public/images/products/

cp assets/website-images/may-*.jpg public/images/machinery/

cp assets/website-images/logo-cong-minh.png public/images/logo.png
cp assets/website-images/ban-ner-cong-minh.jpg public/images/banner.jpg
cp assets/website-images/so-do-to-chuc.jpg public/images/org-chart.jpg
cp assets/website-images/favicon.jpg public/images/favicon.jpg
cp assets/docx-images/image3.png public/images/machinery/factory-stapler.png
cp assets/docx-images/image5.png public/images/machinery/factory-corrugator.png
cp assets/docx-images/image4.jpeg public/images/machinery/factory-line-1.jpeg
cp assets/docx-images/image7.jpeg public/images/machinery/factory-floor.jpeg
```

- [ ] **Step 2: Create product data**

```ts
// src/data/products.ts
export type Product = {
  slug: string;
  name: string;
  nameEn: string;
  category: "carton-song" | "hop-carton" | "in-offset";
  description: string;
  descriptionEn: string;
  specs: string[];
  specsEn: string[];
  image: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    slug: "thung-carton-song-3-lop",
    name: "Thung carton song 3 lop",
    nameEn: "3-Layer Corrugated Carton Box",
    category: "carton-song",
    description:
      "Cau tao gom 3 thanh phan: giay mat ngoai, giay mat trong va lop song o giua. Phu hop cho hang hoa nhe, gon.",
    descriptionEn:
      "Composed of 3 components: outer paper, inner paper, and corrugated layer in between. Suitable for lightweight, compact goods.",
    specs: [
      "Song E: 1.1 - 2 mm",
      "Song B: 2.5 - 3 mm",
      "Song A: 4.5 - 5 mm",
      "Chat lieu: Kraft liner",
      "In flexo 1-6 mau",
    ],
    specsEn: [
      "E-flute: 1.1 - 2 mm",
      "B-flute: 2.5 - 3 mm",
      "A-flute: 4.5 - 5 mm",
      "Material: Kraft liner",
      "Flexo printing 1-6 colors",
    ],
    image: "/images/products/carton-song-3-lop.webp",
    featured: true,
  },
  {
    slug: "thung-carton-song-5-lop",
    name: "Thung carton song 5 lop",
    nameEn: "5-Layer Corrugated Carton Box",
    category: "carton-song",
    description:
      "Song BC, do day 5.5-6.6mm. Ket hop song B va song C cho kha nang chiu luc tot. Phu hop hang hoa nang.",
    descriptionEn:
      "BC-flute, 5.5-6.6mm thick. Combines B and C waves for high load-bearing capacity. Suitable for heavy goods.",
    specs: [
      "Song AB: 8 - 9 mm",
      "Song BE: 3.6 - 5 mm",
      "Chiu luc cao",
      "Chat lieu: Kraft liner",
      "In flexo 1-6 mau",
    ],
    specsEn: [
      "AB-flute: 8 - 9 mm",
      "BE-flute: 3.6 - 5 mm",
      "High load-bearing",
      "Material: Kraft liner",
      "Flexo printing 1-6 colors",
    ],
    image: "/images/products/hop-carton-song-5-lop.jpg",
    featured: true,
  },
  {
    slug: "hop-carton-in-offset",
    name: "Hop carton in offset",
    nameEn: "Offset-Printed Carton Box",
    category: "in-offset",
    description:
      "In offset tren carton 3/5/7 lop cho hinh anh sac net, mau sac trung thuc. Phu hop bao bi cao cap, qua tang.",
    descriptionEn:
      "Offset printing on 3/5/7 layer carton for sharp images and true colors. Ideal for premium packaging and gift boxes.",
    specs: [
      "In offset 5-6 mau (may Roland - Duc)",
      "Giay duplex Han Quoc, Indonesia",
      "Dinh luong 200 - 600 gr/m2",
      "Can mang, be, dan tu dong",
    ],
    specsEn: [
      "5-6 color offset printing (Roland - Germany)",
      "Duplex paper from Korea, Indonesia",
      "GMS 200 - 600 gr/m2",
      "Laminating, die-cutting, auto gluing",
    ],
    image: "/images/products/hop-cat-tong-in-offset.png",
    featured: true,
  },
  {
    slug: "hop-carton-3-lop",
    name: "Hop carton 3 lop",
    nameEn: "3-Layer Carton Box",
    category: "hop-carton",
    description:
      "2 lop giay phang ben ngoai va 1 lop song o giua. Thich hop dong goi hang hoa nhe, gon.",
    descriptionEn:
      "2 flat outer layers and 1 corrugated middle layer. Suitable for packing lightweight, compact goods.",
    specs: [
      "Song E, B hoac A",
      "Chat lieu: Kraft liner",
      "Theo kich thuoc dat hang",
    ],
    specsEn: [
      "E, B or A flute",
      "Material: Kraft liner",
      "Custom sizes per order",
    ],
    image: "/images/products/thung-carton-3-lop1.jpg",
    featured: false,
  },
  {
    slug: "hop-carton-5-lop",
    name: "Hop carton 5 lop",
    nameEn: "5-Layer Carton Box",
    category: "hop-carton",
    description:
      "2 lop mat ngoai va 3 lop ben trong (2 lop song + 1 lop phang). Dung cho hang hoa nang, can bao ve cao.",
    descriptionEn:
      "2 outer layers and 3 inner layers (2 corrugated + 1 flat). For heavy goods requiring high protection.",
    specs: [
      "Song AB hoac BE",
      "Do day 5.5 - 9 mm",
      "Chiu nen cao",
      "Chat lieu: Kraft liner",
    ],
    specsEn: [
      "AB or BE flute",
      "Thickness: 5.5 - 9 mm",
      "High compression resistance",
      "Material: Kraft liner",
    ],
    image: "/images/products/hop-carton-song-5-lop1.jpg",
    featured: false,
  },
  {
    slug: "hop-carton-5-lop-co-ngan",
    name: "Hop carton 5 lop kem o ngan",
    nameEn: "5-Layer Carton Box with Dividers",
    category: "hop-carton",
    description:
      "Hop 5 lop co them vach ngan ben trong de bao ve san pham, chong va dap. Thich hop chai lo, do dien tu.",
    descriptionEn:
      "5-layer box with internal partition dividers for product protection and shock resistance. Ideal for bottles, electronics.",
    specs: [
      "Vach ngan tuy chinh",
      "Chong va dap, xe dich",
      "Song AB hoac BE",
      "Theo kich thuoc dat hang",
    ],
    specsEn: [
      "Custom partition dividers",
      "Shock and shift protection",
      "AB or BE flute",
      "Custom sizes per order",
    ],
    image: "/images/products/hop-carton-7-lop-ngan.jpg",
    featured: false,
  },
];

export const categories = [
  { slug: "all", name: "Tat ca", nameEn: "All" },
  { slug: "carton-song", name: "Carton song", nameEn: "Corrugated Carton" },
  { slug: "hop-carton", name: "Hop carton", nameEn: "Carton Boxes" },
  { slug: "in-offset", name: "In offset", nameEn: "Offset Printing" },
] as const;
```

- [ ] **Step 3: Create machinery data**

```ts
// src/data/machinery.ts
export type Machine = {
  name: string;
  nameEn: string;
  quantity: number;
  origin: string;
  originEn: string;
  image?: string;
};

export const machinery: Machine[] = [
  {
    name: "Day chuyen san xuat carton song (kho 1,8m)",
    nameEn: "Corrugated production line (1.8m width)",
    quantity: 1,
    origin: "Dai Loan - Trung Quoc",
    originEn: "Taiwan - China",
    image: "/images/machinery/may-dan-song.jpg",
  },
  {
    name: "Day chuyen san xuat carton song (kho 2,2m)",
    nameEn: "Corrugated production line (2.2m width)",
    quantity: 1,
    origin: "Dai Loan - Trung Quoc",
    originEn: "Taiwan - China",
    image: "/images/machinery/factory-corrugator.png",
  },
  {
    name: "May in offset 5 mau",
    nameEn: "5-color offset printing machine",
    quantity: 1,
    origin: "Duc",
    originEn: "Germany",
    image: "/images/machinery/may-in-offset.jpg",
  },
  {
    name: "May in offset 6 mau (Roland)",
    nameEn: "6-color offset printing machine (Roland)",
    quantity: 1,
    origin: "Duc",
    originEn: "Germany",
  },
  {
    name: "May in flexo 5 mau",
    nameEn: "5-color flexo printing machine",
    quantity: 1,
    origin: "Dai Loan",
    originEn: "Taiwan",
  },
  {
    name: "May in flexo 6 mau",
    nameEn: "6-color flexo printing machine",
    quantity: 1,
    origin: "Dai Loan - Trung Quoc",
    originEn: "Taiwan - China",
  },
  {
    name: "May be hop",
    nameEn: "Die-cutting machine",
    quantity: 5,
    origin: "Dai Loan - Trung Quoc",
    originEn: "Taiwan - China",
    image: "/images/machinery/may-be-hop.jpg",
  },
  {
    name: "May dan hop",
    nameEn: "Box gluing machine",
    quantity: 1,
    origin: "Trung Quoc",
    originEn: "China",
    image: "/images/machinery/may-dan-hop.jpg",
  },
  {
    name: "May dap ghim tu dong",
    nameEn: "Automatic stapling machine",
    quantity: 2,
    origin: "Dai Loan - Trung Quoc",
    originEn: "Taiwan - China",
    image: "/images/machinery/may-dap-ghim-tu-dong.jpg",
  },
  {
    name: "May be tu dong",
    nameEn: "Automatic die-cutting machine",
    quantity: 1,
    origin: "Duc",
    originEn: "Germany",
  },
  {
    name: "May can mang tu dong",
    nameEn: "Automatic laminating machine",
    quantity: 1,
    origin: "Trung Quoc",
    originEn: "China",
  },
  {
    name: "May dong goi",
    nameEn: "Packaging machine",
    quantity: 6,
    origin: "Dai Loan",
    originEn: "Taiwan",
  },
];

export const facilityStats = {
  area: "15,000 m2",
  factories: 4,
  warehouses: 2,
  vehicles: 6,
  forklifts: 18,
};
```

- [ ] **Step 4: Create navigation data**

```ts
// src/data/navigation.ts
export const navLinks = [
  { href: "/", label: "Trang chu", labelEn: "Home" },
  { href: "/gioi-thieu", label: "Gioi thieu", labelEn: "About" },
  { href: "/san-pham", label: "San pham", labelEn: "Products" },
  { href: "/he-thong-may-moc", label: "Nang luc san xuat", labelEn: "Capabilities" },
  { href: "/tin-tuc", label: "Tin tuc", labelEn: "News" },
  { href: "/lien-he", label: "Lien he", labelEn: "Contact" },
] as const;

export const contactInfo = {
  companyName: "DNTN Xi Nghiep Bao Bi Cong Minh",
  companyNameEn: "Cong Minh Packaging Manufacture Private Company",
  address: "Lo 44-B1, KCN Quang Minh, thi tran Quang Minh, Me Linh, Ha Noi",
  addressEn: "Lot 44-B1, Quang Minh Industrial Zone, Me Linh, Hanoi",
  phone: "043.586.0004",
  hotline: "081.308.6886",
  fax: "043.818.2272",
  email: "congminhpack@gmail.com",
  taxCode: "0100784051",
  zalo: "https://zalo.me/0813086886",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d105.76!3d21.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzEyLjAiTiAxMDXCsDQ1JzM2LjAiRQ!5e0!3m2!1svi!2svn!4v1",
};
```

- [ ] **Step 5: Commit**

```bash
git add public/images src/data
git commit -m "feat: add product/machinery data and organized image assets"
```

---

## Task 3: Layout — Header, Footer, Mobile Nav

**Files:**
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Create: `src/components/layout/language-toggle.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create language toggle component**

```tsx
// src/components/layout/language-toggle.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  function toggleLang() {
    const params = new URLSearchParams(window.location.search);
    const current = params.get("lang") || "vi";
    const next = current === "vi" ? "en" : "vi";
    params.set("lang", next);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLang}
      className="text-xs font-mono uppercase tracking-wider"
    >
      VI | EN
    </Button>
  );
}
```

- [ ] **Step 2: Create header component**

```tsx
// src/components/layout/header.tsx
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./language-toggle";
import { MobileNav } from "./mobile-nav";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-zinc-950 text-white">
      {/* Top bar */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto flex h-8 items-center justify-between px-4 text-xs text-zinc-400">
          <a
            href="tel:0813086886"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="h-3 w-3" />
            Hotline: 081.308.6886
          </a>
          <LanguageToggle />
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Bao Bi Cong Minh"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight">CONG MINH</p>
            <p className="text-[10px] tracking-widest text-zinc-400">PACKAGING</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors rounded-md hover:bg-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden sm:inline-flex bg-red-600 hover:bg-red-700 text-white"
          >
            <Link href="/bao-gia">Yeu cau bao gia</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create mobile navigation**

```tsx
// src/components/layout/mobile-nav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-white">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-zinc-950 text-white border-zinc-800">
        <nav className="flex flex-col gap-1 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 mx-4 bg-red-600 hover:bg-red-700 text-white"
          >
            <Link href="/bao-gia" onClick={() => setOpen(false)}>
              Yeu cau bao gia
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 4: Create footer**

```tsx
// src/components/layout/footer.tsx
import Link from "next/link";
import { contactInfo, navLinks } from "@/data/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-white font-semibold mb-3">Bao Bi Cong Minh</h3>
            <p className="text-sm leading-relaxed">
              Chuyen san xuat bao bi carton song, hop carton in offset. Thanh lap nam 1998.
            </p>
            <p className="text-xs mt-3">MST: {contactInfo.taxCode}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Lien ket</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Lien he</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${contactInfo.hotline}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                {contactInfo.hotline}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Ket noi</h3>
            <a
              href={contactInfo.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition-colors"
            >
              Zalo: 081.308.6886
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-4 text-center text-xs">
          &copy; {new Date().getFullYear()} Bao Bi Cong Minh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Wire header and footer into root layout**

Update `src/app/layout.tsx` — add Header and Footer imports and wrap `{children}`:

```tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// In the body:
<body className="min-h-screen bg-white font-sans antialiased">
  <Header />
  <main className="flex-1">{children}</main>
  <Footer />
</body>
```

- [ ] **Step 6: Run dev and verify header/footer render**

```bash
npm run dev
```

Expected: Dark sticky header with logo + nav + red CTA button. Dark footer with 4-column layout. Mobile: hamburger menu opens Sheet.

- [ ] **Step 7: Commit**

```bash
git add src/components/layout src/app/layout.tsx
git commit -m "feat: add header, footer, mobile nav, and language toggle"
```

---

## Task 4: Homepage

**Files:**
- Create: `src/components/home/hero-section.tsx`
- Create: `src/components/home/stats-section.tsx`
- Create: `src/components/home/products-preview.tsx`
- Create: `src/components/home/why-us-section.tsx`
- Create: `src/components/home/clients-section.tsx`
- Create: `src/components/home/cta-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create hero section**

```tsx
// src/components/home/hero-section.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-zinc-900">
      <Image
        src="/images/banner.jpg"
        alt="San pham bao bi Cong Minh"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <p className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4">
            Thanh lap tu 1998
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Giai phap bao bi
            <br />
            <span className="text-red-500">carton chat luong cao</span>
          </h1>
          <p className="text-lg text-zinc-300 mb-8 max-w-lg">
            Chuyen san xuat thung carton song, hop carton in offset voi cong suat tren 30.000 tan/nam. Nha may tai KCN Quang Minh, Ha Noi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/bao-gia">
                Yeu cau bao gia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zinc-600 text-white hover:bg-zinc-800">
              <a href="tel:0813086886">
                <Phone className="mr-2 h-4 w-4" />
                081.308.6886
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create stats section**

```tsx
// src/components/home/stats-section.tsx
import { Factory, Weight, Ruler, Users } from "lucide-react";

const stats = [
  { icon: Factory, value: "25+", label: "Nam kinh nghiem" },
  { icon: Weight, value: "30,000+", label: "Tan san pham/nam" },
  { icon: Ruler, value: "15,000", label: "m2 nha xuong" },
  { icon: Users, value: "200+", label: "Khach hang" },
];

export function StatsSection() {
  return (
    <section className="border-b bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-red-600" />
              <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
              <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create products preview**

```tsx
// src/components/home/products-preview.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export function ProductsPreview() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
            San pham
          </p>
          <h2 className="text-3xl font-bold text-zinc-900">San pham tieu bieu</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product) => (
            <Link key={product.slug} href={`/san-pham/${product.slug}`}>
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-zinc-900 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/san-pham">
              Xem tat ca san pham
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create why-us and clients sections**

```tsx
// src/components/home/why-us-section.tsx
import { Shield, Clock, Truck, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Chat luong dam bao",
    description: "Quy trinh san xuat khep kin, kiem soat tung chi tiet nho nhat theo tieu chuan ky thuat.",
  },
  {
    icon: Clock,
    title: "Giao hang dung tien do",
    description: "Luon vuot tien do giao hang. Doi xe van chuyen rieng tu 1,25 den 7 tan.",
  },
  {
    icon: Truck,
    title: "Giao tan noi",
    description: "Giao hang tai dia diem do khach hang yeu cau tren toan mien Bac.",
  },
  {
    icon: Award,
    title: "Gia canh tranh",
    description: "Gia thanh hop ly, thanh toan thuan tien voi nhieu hinh thuc lua chon.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
            Vi sao chon chung toi
          </p>
          <h2 className="text-3xl font-bold text-zinc-900">
            Uy tin — Chat luong — Hieu qua
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-50 mb-4">
                <reason.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

```tsx
// src/components/home/clients-section.tsx
import { Badge } from "@/components/ui/badge";

const industries = [
  "Duoc pham", "Hoa my pham", "Thuc pham", "Banh keo",
  "Bia & nuoc giai khat", "Giay da", "Det may",
  "Vat lieu xay dung", "Dien & dien tu", "Do go", "Noi that", "Van chuyen",
];

export function ClientsSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
          Khach hang
        </p>
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Phuc vu da nganh cong nghiep
        </h2>
        <p className="text-zinc-500 max-w-lg mx-auto mb-8">
          Hang tram doanh nghiep, tap doan lon va cong ty da quoc gia da tin tuong su dung san pham Cong Minh.
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {industries.map((industry) => (
            <Badge key={industry} variant="secondary" className="text-sm px-4 py-1.5">
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create CTA section**

```tsx
// src/components/home/cta-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-red-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ban can bao gia bao bi carton?
        </h2>
        <p className="text-red-100 max-w-md mx-auto mb-8">
          Lien he ngay de nhan tu van mien phi va bao gia nhanh nhat. Chung toi ho tro moi kich thuoc, so luong.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50">
            <Link href="/bao-gia">
              Gui yeu cau bao gia
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-red-700">
            <a href="tel:0813086886">Goi ngay: 081.308.6886</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Assemble homepage**

```tsx
// src/app/page.tsx
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ProductsPreview } from "@/components/home/products-preview";
import { WhyUsSection } from "@/components/home/why-us-section";
import { ClientsSection } from "@/components/home/clients-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsPreview />
      <WhyUsSection />
      <ClientsSection />
      <CtaSection />
    </>
  );
}
```

- [ ] **Step 7: Run dev and verify all sections render**

```bash
npm run dev
```

Expected: Full homepage with hero, stats, products, why-us, industries, CTA. All sections render with correct images and responsive layout.

- [ ] **Step 8: Commit**

```bash
git add src/components/home src/app/page.tsx
git commit -m "feat: build homepage with hero, stats, products, why-us, clients, CTA sections"
```

---

## Task 5: Product Catalog and Detail Pages

**Files:**
- Create: `src/app/san-pham/page.tsx`
- Create: `src/app/san-pham/[slug]/page.tsx`
- Create: `src/components/products/product-card.tsx`
- Create: `src/components/products/product-filter.tsx`

- [ ] **Step 1: Create product card**

```tsx
// src/components/products/product-card.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/san-pham/${product.slug}`}>
      <Card className="group overflow-hidden border hover:shadow-lg transition-shadow">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-5">
          <h3 className="font-semibold text-zinc-900 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-500 mt-2 line-clamp-2">
            {product.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
```

- [ ] **Step 2: Create product filter**

```tsx
// src/components/products/product-filter.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/products";

export function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "all";

  function setCategory(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    router.replace(`/san-pham?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => setCategory(cat.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat.slug
              ? "bg-red-600 text-white"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create product catalog page**

```tsx
// src/app/san-pham/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import { ProductFilter } from "@/components/products/product-filter";

export const metadata: Metadata = {
  title: "San pham bao bi carton",
  description:
    "Thung carton song 3 lop, 5 lop, hop carton in offset — san xuat theo don dat hang tai Bao Bi Cong Minh.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
          San pham
        </p>
        <h1 className="text-3xl font-bold text-zinc-900 mb-6">
          Danh muc san pham bao bi
        </h1>
        <Suspense>
          <ProductFilter />
        </Suspense>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Create product detail page with generateStaticParams**

```tsx
// src/app/san-pham/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/san-pham"
        className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-8"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Quay lai san pham
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <Badge variant="secondary" className="mb-3">
            {product.category === "carton-song"
              ? "Carton song"
              : product.category === "hop-carton"
              ? "Hop carton"
              : "In offset"}
          </Badge>
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">{product.name}</h1>
          <p className="text-zinc-600 leading-relaxed mb-6">{product.description}</p>

          <h2 className="font-semibold text-zinc-900 mb-3">Thong so ky thuat</h2>
          <ul className="space-y-2 mb-8">
            {product.specs.map((spec) => (
              <li key={spec} className="flex items-start gap-2 text-sm text-zinc-600">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
                {spec}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href={`/bao-gia?product=${product.slug}`}>
                Yeu cau bao gia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:0813086886">Goi: 081.308.6886</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Verify product catalog and detail pages**

```bash
npm run dev
```

Navigate to http://localhost:3000/san-pham — verify filter tabs and product cards.
Click a product — verify detail page with image, specs, CTA buttons.

- [ ] **Step 6: Commit**

```bash
git add src/app/san-pham src/components/products
git commit -m "feat: add product catalog with filtering and detail pages"
```

---

## Task 6: About, Machinery, and Contact Pages

**Files:**
- Create: `src/app/gioi-thieu/page.tsx`
- Create: `src/app/he-thong-may-moc/page.tsx`
- Create: `src/app/lien-he/page.tsx`
- Create: `src/components/forms/contact-form.tsx`

- [ ] **Step 1: Create About page**

```tsx
// src/app/gioi-thieu/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gioi thieu",
  description:
    "DNTN Xi Nghiep Bao Bi Cong Minh — thanh lap nam 1998, chuyen san xuat bao bi carton song va hop giay in offset tai KCN Quang Minh, Ha Noi.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
        Gioi thieu
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Ve Bao Bi Cong Minh</h1>

      <div className="grid gap-10 lg:grid-cols-2 mb-12">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Lich su hinh thanh</h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            DNTN Xi Nghiep Bao Bi Cong Minh duoc thanh lap tu nam 1998 theo giay phep so 3870 cua UBND Thanh pho Ha Noi. Giay phep dang ky kinh doanh so 0100784051 cua So Ke hoach va Dau tu Ha Noi.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Tu mot xi nghiep nho, bang no luc khong ngung voi phuong cham "Uy tin, Chat luong, Phuc vu hieu qua, Phat trien ben vung", Cong Minh da phat trien thanh mot trong nhung nha san xuat bao bi carton hang dau khu vuc phia Bac.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Hien nay, Doanh nghiep so huu mat bang 15.000 m2 voi 04 nha xuong chinh, 02 nha kho nguyen lieu va thanh pham, cung he thong may moc hien dai nhap khau tu Duc, Nhat Ban, Dai Loan.
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-100">
          <Image
            src="/images/machinery/factory-floor.jpeg"
            alt="Nha xuong Bao Bi Cong Minh"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Principles */}
      <div className="bg-zinc-50 rounded-lg p-8 mb-12">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4">Ton chi hoat dong</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white rounded-md p-4 border">
            <p className="font-medium text-zinc-900 mb-1">Khach hang la trung tam</p>
            <p className="text-sm text-zinc-500">Doi tuong phuc vu quan trong nhat</p>
          </div>
          <div className="bg-white rounded-md p-4 border">
            <p className="font-medium text-zinc-900 mb-1">Chat luong & tien do</p>
            <p className="text-sm text-zinc-500">Uu tien so 1 cua Xi nghiep</p>
          </div>
          <div className="bg-white rounded-md p-4 border">
            <p className="font-medium text-zinc-900 mb-1">Doan ket & hop tac</p>
            <p className="text-sm text-zinc-500">Tin tuong va ton trong lan nhau</p>
          </div>
        </div>
      </div>

      {/* Org chart */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4">Co cau to chuc</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <Image
            src="/images/org-chart.jpg"
            alt="So do to chuc Bao Bi Cong Minh"
            width={1100}
            height={500}
            className="w-full rounded-lg border"
          />
        </div>
        <p className="text-sm text-zinc-500 text-center mt-3">
          Giam doc: Mai Thi Hong — Ke toan Truong: Nguyen Thi Thu Huyen
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create Machinery page**

```tsx
// src/app/he-thong-may-moc/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { machinery, facilityStats } from "@/data/machinery";

export const metadata: Metadata = {
  title: "Nang luc san xuat & He thong may moc",
  description:
    "He thong may moc nhap khau tu Duc, Nhat Ban, Dai Loan. 02 day chuyen san xuat carton song, may in offset Roland, cong suat 30.000 tan/nam.",
};

export default function MachineryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
        Nang luc san xuat
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 mb-4">
        He thong may moc & thiet bi
      </h1>
      <p className="text-zinc-600 max-w-2xl mb-10">
        Toan bo san pham duoc san xuat khep kin tai Doanh nghiep qua tat ca cac quy trinh, tung chi tiet nho nhat deu duoc kiem soat chat che.
      </p>

      {/* Facility stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12 p-6 bg-zinc-50 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900">{facilityStats.area}</p>
          <p className="text-xs text-zinc-500">Dien tich</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900">{facilityStats.factories}</p>
          <p className="text-xs text-zinc-500">Nha xuong</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900">{facilityStats.warehouses}</p>
          <p className="text-xs text-zinc-500">Kho hang</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900">{facilityStats.vehicles}</p>
          <p className="text-xs text-zinc-500">Xe van chuyen</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900">{facilityStats.forklifts}</p>
          <p className="text-xs text-zinc-500">Xe nang</p>
        </div>
      </div>

      {/* Machinery grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {machinery.map((machine) => (
          <Card key={machine.name} className="overflow-hidden">
            {machine.image && (
              <div className="relative aspect-video bg-zinc-100">
                <Image src={machine.image} alt={machine.name} fill className="object-cover" />
              </div>
            )}
            <CardContent className="p-4">
              <h3 className="font-medium text-zinc-900 text-sm">{machine.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-xs">SL: {machine.quantity}</Badge>
                <Badge variant="secondary" className="text-xs">{machine.origin}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create contact form component**

```tsx
// src/components/forms/contact-form.tsx
"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

type FormState = { success?: boolean; error?: string } | null;

async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) return { error: "Gui that bai. Vui long thu lai." };
  return { success: true };
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <p className="font-medium text-green-800">
          Cam on ban da lien he! Chung toi se phan hoi trong 24 gio.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Ho va ten *</Label>
          <Input id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone">So dien thoai *</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" className="mt-1" />
      </div>
      <div>
        <Label htmlFor="message">Noi dung *</Label>
        <Textarea id="message" name="message" rows={5} required className="mt-1" />
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <Button type="submit" disabled={pending} className="bg-red-600 hover:bg-red-700 text-white">
        <Send className="mr-2 h-4 w-4" />
        {pending ? "Dang gui..." : "Gui lien he"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 4: Create Contact page**

```tsx
// src/app/lien-he/page.tsx
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { contactInfo } from "@/data/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Lien he",
  description:
    "Lien he Bao Bi Cong Minh — Lo 44-B1, KCN Quang Minh, Ha Noi. Hotline: 081.308.6886.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
        Lien he
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Lien he voi chung toi</h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-900">Dia chi</p>
                <p className="text-sm text-zinc-600">{contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-900">Dien thoai</p>
                <p className="text-sm text-zinc-600">
                  Hotline: <a href={`tel:${contactInfo.hotline}`} className="text-red-600">{contactInfo.hotline}</a>
                </p>
                <p className="text-sm text-zinc-600">Van phong: {contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-900">Email</p>
                <p className="text-sm text-zinc-600">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-zinc-900">Gio lam viec</p>
                <p className="text-sm text-zinc-600">Thu 2 – Thu 7: 7:30 – 17:30</p>
              </div>
            </div>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden border">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ban do Bao Bi Cong Minh"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900 mb-4">Gui tin nhan</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Verify all three pages render**

```bash
npm run dev
```

Navigate to /gioi-thieu, /he-thong-may-moc, /lien-he — verify content, images, form.

- [ ] **Step 6: Commit**

```bash
git add src/app/gioi-thieu src/app/he-thong-may-moc src/app/lien-he src/components/forms
git commit -m "feat: add about, machinery, and contact pages with contact form"
```

---

## Task 7: Quote Request (RFQ) Page — Ad Landing Page

This is the primary conversion page for Google/Facebook ads.

**Files:**
- Create: `src/app/bao-gia/page.tsx`
- Create: `src/components/forms/quote-form.tsx`

- [ ] **Step 1: Create quote form**

```tsx
// src/components/forms/quote-form.tsx
"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";

type FormState = { success?: boolean; error?: string } | null;

async function submitQuote(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const res = await fetch("/api/quote", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      size: formData.get("size"),
      printing: formData.get("printing"),
      notes: formData.get("notes"),
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) return { error: "Gui that bai. Vui long thu lai." };
  return { success: true };
}

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("product") || "";
  const [state, action, pending] = useActionState(submitQuote, null);

  if (state?.success) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Yeu cau bao gia da duoc gui!
        </h3>
        <p className="text-green-700">
          Chung toi se lien he lai trong vong 2 gio lam viec.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Ho va ten *</Label>
          <Input id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="company">Cong ty</Label>
          <Input id="company" name="company" className="mt-1" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">So dien thoai *</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="product">Loai san pham *</Label>
        <Select name="product" defaultValue={preselected} required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Chon loai san pham" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="thung-carton-3-lop">Thung carton song 3 lop</SelectItem>
            <SelectItem value="thung-carton-5-lop">Thung carton song 5 lop</SelectItem>
            <SelectItem value="hop-carton-in-offset">Hop carton in offset</SelectItem>
            <SelectItem value="hop-carton-3-lop">Hop carton 3 lop</SelectItem>
            <SelectItem value="hop-carton-5-lop">Hop carton 5 lop</SelectItem>
            <SelectItem value="hop-carton-co-ngan">Hop carton co o ngan</SelectItem>
            <SelectItem value="khac">Khac</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="quantity">So luong du kien</Label>
          <Input id="quantity" name="quantity" placeholder="VD: 5,000 cai/thang" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="size">Kich thuoc (Dai x Rong x Cao)</Label>
          <Input id="size" name="size" placeholder="VD: 60 x 40 x 30 cm" className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor="printing">Yeu cau in an</Label>
        <Select name="printing">
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Chon (neu co)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="khong-in">Khong in</SelectItem>
            <SelectItem value="in-flexo-1-3-mau">In flexo 1-3 mau</SelectItem>
            <SelectItem value="in-flexo-4-6-mau">In flexo 4-6 mau</SelectItem>
            <SelectItem value="in-offset">In offset</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="notes">Ghi chu them</Label>
        <Textarea id="notes" name="notes" rows={4} className="mt-1" />
      </div>
      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="w-full bg-red-600 hover:bg-red-700 text-white"
      >
        <Send className="mr-2 h-4 w-4" />
        {pending ? "Dang gui..." : "Gui yeu cau bao gia"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 2: Create RFQ landing page**

```tsx
// src/app/bao-gia/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/forms/quote-form";
import { Phone, Clock, CheckCircle, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Yeu cau bao gia bao bi carton",
  description:
    "Gui yeu cau bao gia thung carton, hop carton in offset. Phan hoi trong 2 gio. Bao Bi Cong Minh — KCN Quang Minh, Ha Noi.",
};

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
            Bao gia
          </p>
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Nhan bao gia mien phi</h1>
          <p className="text-zinc-600 mb-8">
            Dien thong tin ben duoi, chung toi se lien he tu van va bao gia nhanh nhat.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-900">Phan hoi nhanh</p>
                <p className="text-sm text-zinc-500">Bao gia trong vong 2 gio lam viec</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-900">Tu van mien phi</p>
                <p className="text-sm text-zinc-500">Ho tro chon loai carton, kich thuoc phu hop</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-900">Giao hang tan noi</p>
                <p className="text-sm text-zinc-500">Doi xe rieng, giao toan mien Bac</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-medium text-zinc-900">Hoac goi truc tiep</p>
                <p className="text-sm">
                  <a href="tel:0813086886" className="text-red-600 font-semibold">081.308.6886</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-zinc-50 rounded-lg p-6 lg:p-8">
          <Suspense>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify RFQ page**

```bash
npm run dev
```

Navigate to http://localhost:3000/bao-gia — verify form renders with product dropdown, specs fields, and CTA.
Navigate to http://localhost:3000/bao-gia?product=thung-carton-3-lop — verify preselection works.

- [ ] **Step 4: Commit**

```bash
git add src/app/bao-gia src/components/forms/quote-form.tsx
git commit -m "feat: add RFQ landing page optimized for ad campaigns"
```

---

## Task 8: API Routes (Contact and Quote Email)

**Files:**
- Create: `src/app/api/contact/route.ts`
- Create: `src/app/api/quote/route.ts`
- Create: `src/lib/email.ts`
- Create: `.env.local`

- [ ] **Step 1: Create email utility**

```ts
// src/lib/email.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_EMAIL || "congminhpack@gmail.com";

export async function sendContactEmail(data: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}) {
  return resend.emails.send({
    from: "Bao Bi Cong Minh <noreply@baobicongminh.com.vn>",
    to,
    subject: `[Lien he] ${data.name} — ${data.phone}`,
    text: [
      `Ho ten: ${data.name}`,
      `SDT: ${data.phone}`,
      `Email: ${data.email || "Khong co"}`,
      `Noi dung:\n${data.message}`,
    ].join("\n"),
  });
}

export async function sendQuoteEmail(data: {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  product: string;
  quantity?: string;
  size?: string;
  printing?: string;
  notes?: string;
}) {
  return resend.emails.send({
    from: "Bao Bi Cong Minh <noreply@baobicongminh.com.vn>",
    to,
    subject: `[Bao gia] ${data.name} — ${data.product}`,
    text: [
      `Ho ten: ${data.name}`,
      `Cong ty: ${data.company || "—"}`,
      `SDT: ${data.phone}`,
      `Email: ${data.email || "—"}`,
      `---`,
      `San pham: ${data.product}`,
      `So luong: ${data.quantity || "—"}`,
      `Kich thuoc: ${data.size || "—"}`,
      `In an: ${data.printing || "—"}`,
      `Ghi chu: ${data.notes || "—"}`,
    ].join("\n"),
  });
}
```

- [ ] **Step 2: Create contact API route**

```ts
// src/app/api/contact/route.ts
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, message } = body;

  if (!name || !phone || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await sendContactEmail(body);
  if (error) {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }

  return Response.json({ success: true });
}
```

- [ ] **Step 3: Create quote API route**

```ts
// src/app/api/quote/route.ts
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, product } = body;

  if (!name || !phone || !product) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await sendQuoteEmail(body);
  if (error) {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }

  return Response.json({ success: true });
}
```

- [ ] **Step 4: Create .env.local**

```bash
echo 'RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=congminhpack@gmail.com' > .env.local
```

Note: Sign up at resend.com for an API key. The domain baobicongminh.com.vn needs DNS verification in Resend for custom sender address.

- [ ] **Step 5: Commit**

```bash
git add src/app/api src/lib/email.ts
git commit -m "feat: add contact and quote email API routes with Resend"
```

---

## Task 9: Blog/News Section

**Files:**
- Create: `src/data/posts.ts`
- Create: `src/app/tin-tuc/page.tsx`
- Create: `src/app/tin-tuc/[slug]/page.tsx`

- [ ] **Step 1: Create blog data with seed posts**

```ts
// src/data/posts.ts
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "cach-chon-thung-carton-phu-hop",
    title: "Cach chon thung carton phu hop cho san pham",
    excerpt:
      "Huong dan lua chon loai carton 3 lop, 5 lop, va cac loai song E, B, A phu hop voi tung loai hang hoa.",
    content: `Viec lua chon dung loai thung carton la yeu to quan trong giup bao ve san pham trong qua trinh van chuyen va luu kho.

## 1. Carton 3 lop

Phu hop cho hang hoa nhe, gon nhu quan ao, giay dep, my pham. Cac loai song pho bien:

- **Song E (1.1-2mm):** Mong nhat, phu hop hop nho, in an dep
- **Song B (2.5-3mm):** Can bang giua bao ve va chi phi
- **Song A (4.5-5mm):** Chiu luc tot hon

## 2. Carton 5 lop

Danh cho hang hoa nang, can bao ve cao nhu thiet bi dien tu, do gia dung, chai lo thuy tinh.

- **Song AB (8-9mm):** Chiu nen cao nhat
- **Song BE (3.6-5mm):** Can bang do day va bao ve

## 3. Loi khuyen

Hay lien he Bao Bi Cong Minh de duoc tu van chi tiet loai carton phu hop nhat voi san pham va ngan sach cua ban.`,
    date: "2026-03-15",
    image: "/images/products/carton-song-3-lop.webp",
  },
  {
    slug: "quy-trinh-san-xuat-bao-bi-carton",
    title: "Quy trinh san xuat bao bi carton tai Cong Minh",
    excerpt:
      "Tim hieu quy trinh san xuat khep kin tu nguyen lieu den thanh pham tai nha may Bao Bi Cong Minh.",
    content: `Bao Bi Cong Minh san xuat thung carton theo quy trinh khep kin, dam bao chat luong tu nguyen lieu den thanh pham.

## Buoc 1: Chuan bi nguyen lieu

Giay Kraft liner nhap khau duoc kiem tra chat luong truoc khi dua vao day chuyen.

## Buoc 2: Tao song & dan

Giay duoc dua qua day chuyen san xuat carton song kho 1.8m hoac 2.2m de tao lop song va dan ghep cac lop.

## Buoc 3: In an

San pham duoc in bang may in flexo (1-6 mau) hoac may in offset Roland (5-6 mau) tu Duc.

## Buoc 4: Be, dap & hoan thien

San pham duoc be hinh, dap ghim, dan hop bang he thong may tu dong va ban tu dong.

## Buoc 5: Kiem tra & dong goi

Phong ky thuat kiem tra chat luong truoc khi dong goi va giao hang den khach hang.`,
    date: "2026-03-01",
    image: "/images/machinery/may-dan-song.jpg",
  },
];
```

- [ ] **Step 2: Create blog listing page**

```tsx
// src/app/tin-tuc/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Tin tuc & Kien thuc bao bi",
  description:
    "Tin tuc, kien thuc ve bao bi carton — cach chon thung carton, quy trinh san xuat, xu huong nganh bao bi.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-2">
        Tin tuc
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 mb-8">Tin tuc & Kien thuc bao bi</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/tin-tuc/${post.slug}`}>
            <Card className="group overflow-hidden hover:shadow-lg transition-shadow h-full">
              {post.image && (
                <div className="relative aspect-video bg-zinc-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-5">
                <time className="text-xs text-zinc-400 font-mono">
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </time>
                <h2 className="font-semibold text-zinc-900 mt-2 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 mt-2 line-clamp-3">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create blog post page**

```tsx
// src/app/tin-tuc/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="container mx-auto px-4 py-12">
      <Link
        href="/tin-tuc"
        className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-8"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Quay lai tin tuc
      </Link>

      <div className="max-w-3xl mx-auto">
        <time className="text-sm text-zinc-400 font-mono">
          {new Date(post.date).toLocaleDateString("vi-VN")}
        </time>
        <h1 className="text-3xl font-bold text-zinc-900 mt-2 mb-6">{post.title}</h1>

        {post.image && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="prose prose-zinc max-w-none whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-12 p-6 bg-zinc-50 rounded-lg text-center">
          <p className="font-semibold text-zinc-900 mb-2">Can tu van them ve bao bi carton?</p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/bao-gia">
              Yeu cau bao gia
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
```

- [ ] **Step 4: Verify blog pages**

```bash
npm run dev
```

Navigate to /tin-tuc — verify listing with cards.
Click a post — verify article renders with prose styling, images, and CTA.

- [ ] **Step 5: Commit**

```bash
git add src/data/posts.ts src/app/tin-tuc
git commit -m "feat: add blog section with seed posts for SEO content marketing"
```

---

## Task 10: SEO, Sitemap, Robots, Floating Zalo Button

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/components/layout/floating-buttons.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create dynamic sitemap**

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/posts";

const baseUrl = "https://baobicongminh.com.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/gioi-thieu`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/san-pham`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/he-thong-may-moc`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/tin-tuc`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/lien-he`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/bao-gia`, lastModified: new Date(), priority: 0.9 },
  ];

  const productPages = products.map((p) => ({
    url: `${baseUrl}/san-pham/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const blogPages = posts.map((p) => ({
    url: `${baseUrl}/tin-tuc/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
```

- [ ] **Step 2: Create robots.ts**

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://baobicongminh.com.vn/sitemap.xml",
  };
}
```

- [ ] **Step 3: Create floating Zalo/phone buttons**

```tsx
// src/components/layout/floating-buttons.tsx
import { Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://zalo.me/0813086886"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Chat Zalo"
      >
        <span className="text-xs font-bold">Zalo</span>
      </a>
      <a
        href="tel:0813086886"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-colors animate-pulse"
        aria-label="Goi dien"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
```

- [ ] **Step 4: Add floating buttons and JSON-LD to root layout**

Update `src/app/layout.tsx`:

```tsx
import { FloatingButtons } from "@/components/layout/floating-buttons";

// Add inside <body>, after <Footer />:
<FloatingButtons />

// Add inside <head> or as first child of <body>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Bao Bi Cong Minh",
      url: "https://baobicongminh.com.vn",
      logo: "https://baobicongminh.com.vn/images/logo.png",
      telephone: "+84813086886",
      email: "congminhpack@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lo 44-B1, KCN Quang Minh",
        addressLocality: "Me Linh",
        addressRegion: "Ha Noi",
        addressCountry: "VN",
      },
      foundingDate: "1998",
      description:
        "Chuyen san xuat bao bi carton song, hop carton in offset. Cong suat 30.000 tan/nam.",
    }),
  }}
/>
```

Note: The JSON-LD `dangerouslySetInnerHTML` here is safe — it renders a static, trusted JSON object (our own company data) as structured data for search engines. No user input is involved.

- [ ] **Step 5: Verify**

```bash
npm run dev
```

Check http://localhost:3000/sitemap.xml — verify all URLs present.
Check http://localhost:3000/robots.txt — verify sitemap reference.
Check floating buttons appear on all pages.

- [ ] **Step 6: Commit**

```bash
git add src/app/sitemap.ts src/app/robots.ts src/components/layout/floating-buttons.tsx src/app/layout.tsx
git commit -m "feat: add SEO (sitemap, robots, JSON-LD) and floating Zalo/phone buttons"
```

---

## Task 11: Deploy to Vercel and Point Domain

**Files:** No code changes — deployment and DNS configuration.

- [ ] **Step 1: Create Vercel project and deploy**

```bash
npx vercel@latest link
npx vercel@latest deploy
```

Follow prompts to create a new Vercel project. Note the preview URL.

- [ ] **Step 2: Set environment variables**

```bash
npx vercel@latest env add RESEND_API_KEY production
npx vercel@latest env add CONTACT_EMAIL production
```

Enter the values when prompted.

- [ ] **Step 3: Deploy to production**

```bash
npx vercel@latest --prod
```

Note the production URL (e.g., congminh.vercel.app).

- [ ] **Step 4: Add custom domain**

```bash
npx vercel@latest domains add baobicongminh.com.vn
```

Vercel will provide DNS records. Log into tenten.vn (domain registrar) and update DNS:
- Change A record to Vercel's IP (76.76.21.21)
- Or add CNAME record pointing to cname.vercel-dns.com

Vercel automatically provisions SSL — no manual certificate needed.

- [ ] **Step 5: Verify deployment**

Visit https://baobicongminh.com.vn and verify:
- SSL certificate is valid (green padlock)
- All pages render correctly
- Images load and are optimized (WebP/AVIF via next/image)
- Contact form works (test with real email)
- Sitemap accessible at /sitemap.xml
- Mobile responsive on phone

- [ ] **Step 6: Commit deployment config**

```bash
git add .vercel
git commit -m "chore: add Vercel project configuration"
```

---

## Task 12: Facebook Pixel and Google Analytics Setup

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/components/forms/quote-form.tsx`

- [ ] **Step 1: Install Google Analytics and Facebook Pixel via Script component**

Update `src/app/layout.tsx` to use Next.js `Script` component (safe, no raw innerHTML needed):

```tsx
import Script from "next/script";

// Add inside the body, before closing </body>:
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="ga-init" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
    </Script>
  </>
)}

{process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
  <Script id="fb-pixel" strategy="afterInteractive">
    {`!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
      fbq('track', 'PageView');`}
  </Script>
)}
```

- [ ] **Step 2: Add conversion tracking to quote form**

In `src/components/forms/quote-form.tsx`, inside the success check block (after `if (state?.success)`), before the return:

```tsx
if (state?.success) {
  // Fire conversion events
  if (typeof window !== "undefined") {
    if ("fbq" in window) (window as any).fbq("track", "Lead");
    if ("gtag" in window) (window as any).gtag("event", "generate_lead", { event_category: "form" });
  }

  return (
    // ... success UI unchanged
  );
}
```

- [ ] **Step 3: Set environment variables on Vercel**

```bash
npx vercel@latest env add NEXT_PUBLIC_GA_ID production
npx vercel@latest env add NEXT_PUBLIC_FB_PIXEL_ID production
```

Enter the GA4 Measurement ID (G-XXXXXXX) and Facebook Pixel ID when prompted.

- [ ] **Step 4: Redeploy**

```bash
npx vercel@latest --prod
```

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/components/forms/quote-form.tsx
git commit -m "feat: add Google Analytics GA4 and Facebook Pixel with lead tracking"
```

---

## Summary

| Task | What It Builds | Key Output |
|------|---------------|------------|
| 1 | Project scaffold | Next.js + shadcn/ui + Tailwind |
| 2 | Data and images | Product catalog, machinery data, organized assets |
| 3 | Layout shell | Sticky header, footer, mobile nav, language toggle |
| 4 | Homepage | Hero, stats, products preview, why-us, clients, CTA |
| 5 | Product pages | Catalog with filtering + detail pages with specs |
| 6 | Info pages | About, machinery, contact with form |
| 7 | RFQ landing page | Quote form optimized for ad campaigns |
| 8 | API routes | Contact + quote email via Resend |
| 9 | Blog | News listing + article pages for SEO |
| 10 | SEO | Sitemap, robots, JSON-LD, floating buttons |
| 11 | Deployment | Vercel deploy + DNS pointing |
| 12 | Ad tracking | GA4 + Facebook Pixel + conversion events |

**Ad-ready features:**
- `/bao-gia` — Dedicated landing page for Google/Facebook ads with pre-selected product support (`?product=slug`)
- Lead tracking events fire on both GA4 and Facebook Pixel on form submission
- Every product page has a "Yeu cau bao gia" CTA linking to the RFQ form
- Blog posts have bottom CTAs for organic conversion
- SEO metadata on every page for organic search
- Open Graph tags for social sharing
