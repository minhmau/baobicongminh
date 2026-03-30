import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { buttonVariants } from "@/components/ui/button";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/tin-tuc/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/tin-tuc"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-red-600 transition-colors"
        >
          <span aria-hidden="true">←</span> Quay lại tin tức
        </Link>
      </div>

      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm text-zinc-400">
          {new Date(post.date).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h1 className="mb-6 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          {post.title}
        </h1>

        {post.image && (
          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed whitespace-pre-line"
          style={{ whiteSpace: "pre-line" }}
        >
          {post.content}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-red-100 bg-red-50 p-6 text-center">
          <p className="mb-4 text-lg font-semibold text-zinc-800">
            Cần tư vấn thêm về bao bì carton?
          </p>
          <Link
            href="/bao-gia"
            className={
              buttonVariants({ variant: "default", size: "lg" }) +
              " bg-red-600 hover:bg-red-700 text-white border-red-600"
            }
          >
            Nhận báo giá miễn phí
          </Link>
        </div>
      </article>
    </main>
  );
}
