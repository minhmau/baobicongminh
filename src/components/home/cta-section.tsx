import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-red-600 py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Bạn cần báo giá bao bì carton?
        </h2>
        <p className="text-red-100 max-w-xl mx-auto mb-8">
          Liên hệ ngay để nhận báo giá nhanh chóng và tư vấn giải pháp bao bì phù hợp với nhu cầu
          của doanh nghiệp bạn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-white text-red-600 hover:bg-red-50 border-transparent h-11 px-6 text-base font-semibold"
            render={<Link href="/bao-gia">Gửi yêu cầu báo giá</Link>}
          />
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 h-11 px-6 text-base"
            render={<a href="tel:0813086886">Gọi ngay: 081.308.6886</a>}
          />
        </div>
      </div>
    </section>
  );
}
