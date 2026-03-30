import type { Metadata } from "next";
import { Clock, CheckCircle, Truck, Phone } from "lucide-react";

import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = {
  title: "Yêu cầu báo giá bao bì carton",
};

const benefits = [
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

export default function BaoGiaPage() {
  return (
    <main className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-widest text-red-600">
              Báo giá
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 lg:text-4xl">
              Nhận báo giá miễn phí
            </h1>
            <p className="mt-3 text-zinc-600">
              Điền thông tin để nhận báo giá chính xác nhất cho nhu cầu bao bì
              carton của bạn. Đội ngũ kỹ thuật sẽ liên hệ tư vấn trong vòng 2
              giờ làm việc.
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
                  Hoặc gọi trực tiếp
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
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
