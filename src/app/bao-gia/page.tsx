import type { Metadata } from "next";
import { Clock, CheckCircle, Truck, Phone } from "lucide-react";

import { QuoteForm } from "@/components/forms/quote-form";
import { getLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Yêu cầu báo giá bao bì carton",
};

export default async function BaoGiaPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  const benefits = isEn
    ? [
        {
          icon: Clock,
          title: "Fast response",
          description: "Quote within 2 working hours",
        },
        {
          icon: CheckCircle,
          title: "Free consultation",
          description: "Help choosing the right carton type and dimensions",
        },
        {
          icon: Truck,
          title: "Door-to-door delivery",
          description: "Own fleet, delivery across Northern Vietnam",
        },
      ]
    : [
        {
          icon: Clock,
          title: "Phản hồi nhanh",
          description: "Báo giá trong vòng 2 giờ làm việc",
        },
        {
          icon: CheckCircle,
          title: "Tư vấn miễn phí",
          description: "Hỗ trợ chọn loại carton, kích thước phù hợp",
        },
        {
          icon: Truck,
          title: "Giao hàng tận nơi",
          description: "Đội xe riêng, giao toàn miền Bắc",
        },
      ];

  return (
    <main className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <p className="font-semibold uppercase tracking-widest text-sm text-red-600">
              {isEn ? "Quote" : "Báo giá"}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              {isEn ? "Get a Free Quote" : "Nhận báo giá miễn phí"}
            </h1>
            <p className="mt-3 text-zinc-600">
              {isEn
                ? "Fill in the details to receive the most accurate quote for your carton packaging needs. Our technical team will contact you within 2 working hours."
                : "Điền thông tin để nhận báo giá chính xác nhất cho nhu cầu bao bì carton của bạn. Đội ngũ kỹ thuật sẽ liên hệ tư vấn trong vòng 2 giờ làm việc."}
            </p>
          </div>

          <ul className="space-y-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="font-semibold text-zinc-900">{title}</p>
                  <p className="text-sm text-zinc-500">{description}</p>
                </div>
              </li>
            ))}

            {/* Phone CTA */}
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                <Phone className="size-4" />
              </span>
              <div>
                <p className="font-semibold text-zinc-900">
                  {isEn ? "Or call directly" : "Hoặc gọi trực tiếp"}
                </p>
                <a
                  href="tel:0813086886"
                  className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  081.308.6886
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Right column */}
        <div className="lg:col-span-3 rounded-lg bg-zinc-50 p-6 lg:p-8">
          <QuoteForm lang={lang} />
        </div>
      </div>
    </main>
  );
}
