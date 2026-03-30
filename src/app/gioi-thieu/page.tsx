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
            phép kinh doanh số <strong>3870</strong>. Xuất phát từ một doanh nghiệp nhỏ, trải
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

      {/* Org chart — coded version */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-zinc-900">
          Sơ đồ tổ chức
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[640px] flex flex-col items-center gap-6 pb-4">
            {/* Director */}
            <div className="rounded-lg bg-red-600 px-8 py-4 text-center text-white shadow-md">
              <p className="text-xs uppercase tracking-wider text-red-200">Giám đốc</p>
              <p className="text-lg font-bold">Mai Thị Hồng</p>
            </div>

            {/* Connector line */}
            <div className="flex items-center gap-0">
              <div className="h-8 w-px bg-zinc-300" />
            </div>

            {/* Two deputy directors */}
            <div className="flex items-start gap-12 lg:gap-24">
              {/* Technical Deputy */}
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg bg-zinc-800 px-6 py-3 text-center text-white shadow-md">
                  <p className="text-xs uppercase tracking-wider text-zinc-400">Phó GĐ Kỹ thuật</p>
                  <p className="font-semibold">Sản xuất</p>
                </div>
                <div className="h-4 w-px bg-zinc-300" />
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-5">
                  {[
                    "Xưởng SX chính 1",
                    "Xưởng SX chính 2",
                    "Xưởng in offset",
                    "Xưởng hoàn thiện",
                    "Bộ phận giao nhận",
                  ].map((dept) => (
                    <div
                      key={dept}
                      className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-center text-xs font-medium text-zinc-700 shadow-sm"
                    >
                      {dept}
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Deputy */}
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-lg bg-zinc-800 px-6 py-3 text-center text-white shadow-md">
                  <p className="text-xs uppercase tracking-wider text-zinc-400">Phó GĐ Kinh doanh</p>
                  <p className="font-semibold">Kinh doanh</p>
                </div>
                <div className="h-4 w-px bg-zinc-300" />
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "Phòng HC nhân sự",
                    "Phòng Kế toán",
                    "Phòng KT & KSCL",
                  ].map((dept) => (
                    <div
                      key={dept}
                      className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-center text-xs font-medium text-zinc-700 shadow-sm"
                    >
                      {dept}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-zinc-500 text-center">
              Kế toán Trưởng: Nguyễn Thị Thu Huyền
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
