import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { navLinks } from "@/data/navigation"
import { LanguageToggle } from "./language-toggle"
import { MobileNav } from "./mobile-nav"
import { getLang } from "@/lib/i18n"

export async function Header() {
  const lang = await getLang()
  const isEn = lang === "en"

  return (
    <header className="sticky top-0 z-50 bg-zinc-950">
      {/* Top bar */}
      <div className="h-8 border-b border-zinc-800 flex items-center px-4 md:px-6">
        <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
          <a
            href="tel:0813086886"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Phone className="size-3" />
            <span>081.308.6886</span>
          </a>
          <LanguageToggle />
        </div>
      </div>

      {/* Main nav bar */}
      <div className="h-16 flex items-center px-4 md:px-6">
        <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Bao Bì Công Minh"
              width={40}
              height={40}
              className="rounded"
            />
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-sm tracking-widest">
                CÔNG MINH
              </span>
              <span className="text-red-500 text-[10px] font-medium tracking-[0.2em] uppercase">
                PACKAGING
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors font-medium"
              >
                {isEn ? link.labelEn : link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              href="/bao-gia"
              className="hidden sm:inline-flex items-center justify-center h-8 px-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              {isEn ? "Request a Quote" : "Yêu cầu báo giá"}
            </Link>
            <div className="lg:hidden">
              <MobileNav lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
