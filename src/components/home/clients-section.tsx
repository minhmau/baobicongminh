import { Badge } from "@/components/ui/badge";
import type { Lang } from "@/lib/i18n";

const industries = [
  { vi: "Dược phẩm", en: "Pharmaceuticals" },
  { vi: "Hóa mỹ phẩm", en: "Cosmetics" },
  { vi: "Thực phẩm", en: "Food" },
  { vi: "Bánh kẹo", en: "Confectionery" },
  { vi: "Bia & nước giải khát", en: "Beer & beverages" },
  { vi: "Giầy da", en: "Leather & shoes" },
  { vi: "Dệt may", en: "Textiles" },
  { vi: "Vật liệu xây dựng", en: "Construction materials" },
  { vi: "Điện & điện tử", en: "Electronics" },
  { vi: "Đồ gỗ", en: "Furniture" },
  { vi: "Nội thất", en: "Interior decoration" },
  { vi: "Vận chuyển", en: "Logistics" },
];

export function ClientsSection({ lang }: { lang: Lang }) {
  const isEn = lang === "en";

  return (
    <section className="bg-zinc-50 py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          {isEn ? "Serving diverse industries" : "Phục vụ đa ngành công nghiệp"}
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto mb-10">
          {isEn
            ? "Hundreds of enterprises across many sectors trust Cong Minh's carton packaging to protect and transport their goods."
            : "Hàng trăm doanh nghiệp trong nhiều lĩnh vực đang tin tưởng sử dụng sản phẩm bao bì carton của Công Minh để bảo vệ và vận chuyển hàng hóa."}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <Badge
              key={industry.vi}
              variant="outline"
              className="h-8 px-4 text-sm text-zinc-700 border-zinc-300"
            >
              {isEn ? industry.en : industry.vi}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
