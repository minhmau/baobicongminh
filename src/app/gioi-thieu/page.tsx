import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu về Công ty TNHH Bao Bì Công Minh — thành lập năm 1998, chuyên sản xuất bao bì carton sóng chất lượng cao tại Hà Nội.",
};

export default function GioiThieuPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-red-600">
          Giới thiệu
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Về Bao Bì Công Minh
        </h1>
      </div>

      {/* Two-column: history + image */}
      <div className="mb-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Công ty TNHH Bao Bì Công Minh được thành lập năm 1998, với giấy
            phép kinh doanh số <strong>3870</strong> và mã số thuế{" "}
            <strong>0100784051</strong>. Xuất phát từ một doanh nghiệp nhỏ, trải
            qua hơn 25 năm phát triển, chúng tôi đã trở thành một trong những
            nhà sản xuất bao bì carton sóng uy tín hàng đầu tại Hà Nội.
          </p>
          <p>
            Với phương châm hoạt động{" "}
            <em>
              "Uy tín, Chất lượng, Phục vụ hiệu quả, Phát triển bền vững"
            </em>
            , Công Minh luôn đặt lợi ích khách hàng lên hàng đầu, không ngừng
            đổi mới công nghệ và nâng cao chất lượng sản phẩm.
          </p>
          <p>
            Hiện tại, nhà máy rộng <strong>15.000 m²</strong> với{" "}
            <strong>4 xưởng sản xuất</strong> được trang bị hệ thống máy móc
            hiện đại từ Đài Loan, Đức và Nhật Bản, đáp ứng năng lực sản xuất
            quy mô lớn cho các đối tác trong và ngoài nước.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="/images/machinery/factory-floor.jpeg"
            alt="Nhà máy Bao Bì Công Minh"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Principles */}
      <section className="mb-12 rounded-xl bg-zinc-50 px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          Nguyên tắc hoạt động
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Khách hàng là trung tâm",
              desc: "Mọi quyết định và hành động đều hướng đến sự hài lòng và lợi ích tối đa của khách hàng.",
            },
            {
              title: "Chất lượng & tiến độ",
              desc: "Cam kết cung cấp sản phẩm đạt tiêu chuẩn chất lượng và giao hàng đúng tiến độ đã thỏa thuận.",
            },
            {
              title: "Đoàn kết & hợp tác",
              desc: "Xây dựng môi trường làm việc đoàn kết, hợp tác chặt chẽ giữa các bộ phận và đối tác.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Org chart */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          Sơ đồ tổ chức
        </h2>
        <div className="overflow-hidden rounded-xl border border-zinc-200">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/org-chart.jpg"
              alt="Sơ đồ tổ chức Bao Bì Công Minh"
              fill
              className="object-contain"
            />
          </div>
          <p className="border-t border-zinc-200 bg-zinc-50 px-6 py-3 text-sm text-zinc-600 text-center">
            Giám đốc: Mai Thị Hồng — Kế toán Trưởng: Nguyễn Thị Thu Huyền
          </p>
        </div>
      </section>
    </main>
  );
}
