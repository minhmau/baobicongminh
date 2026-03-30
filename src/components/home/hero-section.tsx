import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
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
          <p className="font-mono text-sm text-red-500 mb-4">Thành lập từ 1998</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
            Giải pháp bao bì
            <br />
            <span className="text-red-500">carton chất lượng cao</span>
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            Năng lực sản xuất 30,000 tấn/năm, nhà máy tại KCN Quang Minh — cung cấp thùng carton
            sóng và hộp carton in offset cho hàng trăm doanh nghiệp toàn miền Bắc.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white border-transparent h-11 px-6 text-base"
              render={
                <Link href="/bao-gia" className="inline-flex items-center gap-2">
                  Yêu cầu báo giá
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-11 px-6 text-base"
              render={
                <a href="tel:0813086886" className="inline-flex items-center gap-2">
                  <Phone className="size-4" />
                  081.308.6886
                </a>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
