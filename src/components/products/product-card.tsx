import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@/data/products";
import type { Lang } from "@/lib/i18n";

export function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const isEn = lang === "en";
  const name = isEn ? product.nameEn : product.name;
  const description = isEn ? product.descriptionEn : product.description;

  return (
    <Link href={`/san-pham/${product.slug}`} className="group block">
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-red-600">
            {name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
