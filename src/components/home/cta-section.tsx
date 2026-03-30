import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/lib/i18n";

export function CtaSection({ lang }: { lang: Lang }) {
  const isEn = lang === "en";

  return (
    <section className="bg-red-600 py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {isEn ? "Need a carton packaging quote?" : "Bạn cần báo giá bao bì carton?"}
        </h2>
        <p className="text-red-100 max-w-xl mx-auto mb-8">
          {isEn
            ? "Contact us now to receive a quick quote and packaging solution tailored to your business needs."
            : "Liên hệ ngay để nhận báo giá nhanh chóng và tư vấn giải pháp bao bì phù hợp với nhu cầu của doanh nghiệp bạn."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-white text-red-600 hover:bg-red-50 border-transparent h-11 px-6 text-base font-semibold"
            render={
              <Link href="/bao-gia">
                {isEn ? "Request a Quote" : "Gửi yêu cầu báo giá"}
              </Link>
            }
          />
          <a
            href="tel:0813086886"
            className="inline-flex items-center justify-center h-11 px-6 text-base font-semibold rounded-md bg-red-800 text-white hover:bg-red-900 transition-colors"
          >
            {isEn ? "Call now" : "Gọi ngay"}: 081.308.6886
          </a>
        </div>
      </div>
    </section>
  );
}
