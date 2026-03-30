import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { Lang } from "@/lib/i18n";

export function HeroSection({ lang }: { lang: Lang }) {
  const isEn = lang === "en";

  return (
    <section className="relative min-h-[600px] bg-zinc-900 flex items-center">
      <Image
        src="/images/banner.jpg"
        alt="Cong Minh Packaging Factory"
        fill
        className="object-cover opacity-30"
        priority
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-medium text-sm text-red-500 mb-4">
            {isEn ? "Established since 1998" : "Thành lập từ 1998"}
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
            {isEn ? "Packaging solutions" : "Giải pháp bao bì"}
            <br />
            <span className="text-red-500">
              {isEn ? "premium carton quality" : "carton chất lượng cao"}
            </span>
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            {isEn
              ? "Production capacity of 30,000 tons/year, factory at Quang Minh Industrial Zone — supplying corrugated carton boxes and offset-printed carton boxes to hundreds of enterprises across Northern Vietnam."
              : "Năng lực sản xuất 30,000 tấn/năm, nhà máy tại KCN Quang Minh — cung cấp thùng carton sóng và hộp carton in offset cho hàng trăm doanh nghiệp toàn miền Bắc."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/bao-gia"
              className="inline-flex items-center gap-2 h-11 px-6 text-base font-medium rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              {isEn ? "Request a Quote" : "Yêu cầu báo giá"}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:0813086886"
              className="inline-flex items-center gap-2 h-11 px-6 text-base font-medium rounded-md bg-white text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <Phone className="size-4" />
              081.308.6886
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
