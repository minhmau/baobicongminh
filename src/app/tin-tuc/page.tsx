import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Tin tức & Kiến thức bao bì",
  description:
    "Cập nhật tin tức, kiến thức chuyên sâu về bao bì carton, xu hướng đóng gói và kinh nghiệm chọn bao bì phù hợp từ đội ngũ chuyên gia Bao Bì Công Minh.",
  alternates: { canonical: "/tin-tuc" },
};

export default function BlogListPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-red-600">
          Tin tức
        </span>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Tin tức &amp; Kiến thức bao bì
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-500">
          Chia sẻ kinh nghiệm, kiến thức chuyên sâu về bao bì carton và giải
          pháp đóng gói từ đội ngũ Bao Bì Công Minh.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/tin-tuc/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {post.image && (
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="mb-2 text-xs text-zinc-400">
                {new Date(post.date).toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-red-600 transition-colors">
                {post.title}
              </h2>
              <p className="line-clamp-3 text-sm text-zinc-500 flex-1">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-medium text-red-600">
                Đọc thêm →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
