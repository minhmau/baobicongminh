"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  function toggle() {
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    )
    const current = params.get("lang") ?? "vi"
    params.set("lang", current === "vi" ? "en" : "vi")
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={toggle}
      className="text-xs font-mono text-zinc-300 hover:text-white"
    >
      VI | EN
    </Button>
  )
}
