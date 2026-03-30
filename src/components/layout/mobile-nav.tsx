"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { navLinks } from "@/data/navigation"
import type { Lang } from "@/lib/i18n"

export function MobileNav({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false)
  const isEn = lang === "en"

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white" />
        }
      >
        <Menu className="size-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 bg-zinc-950 border-zinc-800 p-0">
        <SheetHeader className="p-6 border-b border-zinc-800">
          <SheetTitle className="text-white font-bold tracking-wide">
            CÔNG MINH
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors text-sm font-medium"
            >
              {isEn ? link.labelEn : link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-zinc-800">
          <Link
            href="/bao-gia"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full h-10 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {isEn ? "Request a Quote" : "Yêu cầu báo giá"}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
