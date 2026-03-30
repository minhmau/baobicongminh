import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { products, categories } from "@/data/products";

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

  const categoryLabel =
    categories.find((c) => c.slug === product.category)?.name ??
    product.category;

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/san-pham"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-red-600 transition-colors"
        >
          <span aria-hidden="true">←</span> Quay lại sản phẩm
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right: details */}
        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="w-fit">
            {categoryLabel}
          </Badge>

          <h1 className="text-3xl font-bold text-zinc-900">{product.name}</h1>

          <p className="text-zinc-600 leading-relaxed">{product.description}</p>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-zinc-900">
              Thông số kỹ thuật
            </h2>
            <ul className="space-y-2">
              {product.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-zinc-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href={`/bao-gia?product=${product.slug}`}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Yêu cầu báo giá
            </Link>
            <a
              href="tel:0813086886"
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Gọi: 081.308.6886
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
