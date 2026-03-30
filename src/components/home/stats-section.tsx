import { Factory, Weight, Ruler, Users } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "25+",
    label: "Năm kinh nghiệm",
  },
  {
    icon: Weight,
    value: "30,000+",
    label: "Tấn sản phẩm/năm",
  },
  {
    icon: Ruler,
    value: "15,000 m²",
    label: "Nhà xưởng",
  },
  {
    icon: Users,
    value: "200+",
    label: "Khách hàng",
  },
];

export function StatsSection() {
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
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
