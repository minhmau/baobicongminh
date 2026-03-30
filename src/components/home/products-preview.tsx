import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import type { Lang } from "@/lib/i18n";

export function ProductsPreview({ lang }: { lang: Lang }) {
  const isEn = lang === "en";
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-mono text-sm text-red-600 mb-2">
            {isEn ? "Products" : "Sản phẩm"}
          </p>
          <h2 className="text-3xl font-bold text-zinc-900">
            {isEn ? "Featured Products" : "Sản phẩm tiêu biểu"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProducts.map((product) => (
            <Link key={product.slug} href={`/san-pham/${product.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={isEn ? product.nameEn : product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-zinc-900 mb-1">
                    {isEn ? product.nameEn : product.name}
                  </h3>
                  <p className="text-sm text-zinc-500 line-clamp-2">
                    {isEn ? product.descriptionEn : product.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/san-pham"
            className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors"
          >
            {isEn ? "View all products" : "Xem tất cả sản phẩm"}
          </Link>
        </div>
      </div>
    </section>
  );
}
