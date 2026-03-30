import { Suspense } from "react";
import type { Metadata } from "next";

import { ProductCard } from "@/components/products/product-card";
import { ProductFilter } from "@/components/products/product-filter";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Sản phẩm bao bì carton",
};

export default async function SanPhamPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filtered =
    category && category !== "all"
      ? products.filter((p) => p.category === category)
      : products;

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-red-600">
          Sản phẩm
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Danh mục sản phẩm bao bì
        </h1>
      </div>

      <div className="mb-8">
        <Suspense fallback={<div className="h-10" />}>
          <ProductFilter />
        </Suspense>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
