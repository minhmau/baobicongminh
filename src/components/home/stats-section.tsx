import { Factory, Weight, Ruler, Users } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const stats = [
  {
    icon: Factory,
    value: "25+",
    label: "Năm kinh nghiệm",
    labelEn: "Years of experience",
  },
  {
    icon: Weight,
    value: "30,000+",
    label: "Tấn sản phẩm/năm",
    labelEn: "Tons per year",
  },
  {
    icon: Ruler,
    value: "15,000 m²",
    label: "Nhà xưởng",
    labelEn: "Factory area",
  },
  {
    icon: Users,
    value: "200+",
    label: "Khách hàng",
    labelEn: "Clients served",
  },
];

export function StatsSection({ lang }: { lang: Lang }) {
  const isEn = lang === "en";

  return (
    <section className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 py-10 px-6 text-center border-r last:border-r-0 even:border-r-0 lg:even:border-r"
              >
                <Icon className="size-8 text-red-600" />
                <p className="text-3xl font-bold text-zinc-900">{stat.value}</p>
                <p className="text-sm text-zinc-500">
                  {isEn ? stat.labelEn : stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
