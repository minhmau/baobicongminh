"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { categories } from "@/data/products";
import type { Lang } from "@/lib/i18n";

export function ProductFilter({ lang }: { lang: Lang }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const isEn = lang === "en";

  function handleClick(slug: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    const query = params.toString();
    router.replace(`/san-pham${query ? `?${query}` : ""}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive =
          cat.slug === activeCategory ||
          (cat.slug === "all" && activeCategory === "all");
        return (
          <button
            key={cat.slug}
            onClick={() => handleClick(cat.slug)}
            className={
              isActive
                ? "rounded-full px-4 py-1.5 text-sm font-medium bg-red-600 text-white"
                : "rounded-full px-4 py-1.5 text-sm font-medium bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
            }
          >
            {isEn ? cat.nameEn : cat.name}
          </button>
        );
      })}
    </div>
  );
}
