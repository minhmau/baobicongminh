import { Shield, Clock, Truck, Award } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const reasons = [
  {
    icon: Shield,
    title: "Chất lượng đảm bảo",
    titleEn: "Quality assured",
    description:
      "Quy trình sản xuất khép kín, kiểm soát chất lượng nghiêm ngặt từ nguyên liệu đến thành phẩm.",
    descriptionEn:
      "Closed production process with strict quality control from raw materials to finished products.",
  },
  {
    icon: Clock,
    title: "Giao hàng đúng tiến độ",
    titleEn: "On-time delivery",
    description:
      "Đội xe tải 1.25–7 tấn sẵn sàng giao hàng đúng hẹn, đáp ứng tiến độ sản xuất của khách hàng.",
    descriptionEn:
      "Fleet of 1.25–7 ton trucks ready to deliver on schedule, meeting customers' production timelines.",
  },
  {
    icon: Truck,
    title: "Giao tận nơi",
    titleEn: "Door-to-door delivery",
    description:
      "Dịch vụ giao hàng tận nơi toàn miền Bắc, tiết kiệm thời gian và chi phí vận chuyển.",
    descriptionEn:
      "Door-to-door delivery service across Northern Vietnam, saving time and transportation costs.",
  },
  {
    icon: Award,
    title: "Giá cạnh tranh",
    titleEn: "Competitive pricing",
    description:
      "Báo giá minh bạch, cạnh tranh với nhiều hình thức thanh toán thuận tiện, linh hoạt.",
    descriptionEn:
      "Transparent, competitive pricing with multiple convenient and flexible payment options.",
  },
];

export function WhyUsSection({ lang }: { lang: Lang }) {
  const isEn = lang === "en";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-sm text-red-600 mb-2">
            {isEn ? "Why choose us" : "Vì sao chọn chúng tôi"}
          </p>
          <h2 className="text-3xl font-bold text-zinc-900">
            {isEn ? "Prestige — Quality — Efficiency" : "Uy tín — Chất lượng — Hiệu quả"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-full bg-red-50">
                  <Icon className="size-7 text-red-600" />
                </div>
                <h3 className="font-semibold text-zinc-900">
                  {isEn ? reason.titleEn : reason.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {isEn ? reason.descriptionEn : reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
