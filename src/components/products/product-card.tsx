import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/san-pham/${product.slug}`} className="group block">
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="pt-4">
          <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-red-600">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
            {product.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
