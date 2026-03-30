"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const router = useRouter();

  function toggleLang() {
    const current = document.cookie.match(/lang=(vi|en)/)?.[1] ?? "vi";
    const next = current === "vi" ? "en" : "vi";
    document.cookie = `lang=${next};path=/;max-age=${365 * 24 * 60 * 60}`;
    router.refresh();
  }

  return (
    <Button
      variant="ghost"
      size="xs"
      onClick={toggleLang}
      className="text-xs font-medium tracking-wider text-zinc-300 hover:text-white"
    >
      VI | EN
    </Button>
  );
}
