import { Badge } from "@/components/ui/badge";

const industries = [
  "Dược phẩm",
  "Hóa mỹ phẩm",
  "Thực phẩm",
  "Bánh kẹo",
  "Bia & nước giải khát",
  "Giầy da",
  "Dệt may",
  "Vật liệu xây dựng",
  "Điện & điện tử",
  "Đồ gỗ",
  "Nội thất",
  "Vận chuyển",
];

export function ClientsSection() {
  return (
    <section className="bg-zinc-50 py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Phục vụ đa ngành công nghiệp
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto mb-10">
          Hàng trăm doanh nghiệp trong nhiều lĩnh vực đang tin tưởng sử dụng sản phẩm bao bì
          carton của Công Minh để bảo vệ và vận chuyển hàng hóa.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant="outline"
              className="h-8 px-4 text-sm text-zinc-700 border-zinc-300"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
