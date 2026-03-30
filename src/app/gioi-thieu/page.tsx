import type { Metadata } from "next";
import Image from "next/image";
import { getLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Giới thiệu về Công ty TNHH Bao Bì Công Minh — thành lập năm 1998, chuyên sản xuất bao bì carton sóng chất lượng cao tại Hà Nội.",
};

export default async function GioiThieuPage() {
  const lang = await getLang();
  const isEn = lang === "en";

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-semibold uppercase tracking-widest text-sm text-red-600">
          {isEn ? "About Us" : "Giới thiệu"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          {isEn ? "About Cong Minh Packaging" : "Về Bao Bì Công Minh"}
        </h1>
      </div>

      {/* Two-column: history + image */}
      <div className="mb-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          {isEn ? (
            <>
              <p>
                Cong Minh Packaging Co., Ltd. was established in 1998. Starting as a
                small enterprise, over more than 25 years of development, we have
                become one of the leading reputable corrugated carton manufacturers
                in Hanoi.
              </p>
              <p>
                With the motto{" "}
                <em>
                  "Prestige, Quality, Effective Service, Sustainable Development"
                </em>
                , Cong Minh always puts customer interests first, continuously
                innovating technology and improving product quality.
              </p>
              <p>
                Currently, our <strong>15,000 m²</strong> factory with{" "}
                <strong>4 production workshops</strong> is equipped with modern
                machinery from Taiwan, Germany, and Japan, meeting large-scale
                production capacity for domestic and international partners.
              </p>
            </>
          ) : (
            <>
              <p>
                Công ty TNHH Bao Bì Công Minh được thành lập năm 1998. Xuất phát
                từ một doanh nghiệp nhỏ, trải qua hơn 25 năm phát triển, chúng tôi
                đã trở thành một trong những nhà sản xuất bao bì carton sóng uy tín
                hàng đầu tại Hà Nội.
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
            </>
          )}
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="/images/machinery/factory-floor.jpeg"
            alt={isEn ? "Cong Minh Packaging Factory" : "Nhà máy Bao Bì Công Minh"}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Principles */}
      <section className="mb-12 rounded-xl bg-zinc-50 px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          {isEn ? "Operating Principles" : "Nguyên tắc hoạt động"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {isEn
            ? [
                {
                  title: "Customer first",
                  desc: "Every decision and action is oriented toward maximizing customer satisfaction and benefit.",
                },
                {
                  title: "Quality & schedule",
                  desc: "Committed to delivering products that meet quality standards and on-time delivery as agreed.",
                },
                {
                  title: "Unity & cooperation",
                  desc: "Building a united working environment with close cooperation between departments and partners.",
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
              ))
            : [
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
        <h2 className="mb-8 text-2xl font-bold text-zinc-900">
          {isEn ? "Organization Chart" : "Sơ đồ tổ chức"}
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[640px] flex flex-col items-center gap-6 pb-4">
            {/* Director */}
            <div className="rounded-lg bg-red-600 px-8 py-4 text-center text-white shadow-md">
              <p className="text-xs uppercase tracking-wider text-red-200">
                {isEn ? "Director" : "Giám đốc"}
              </p>
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
                  <p className="text-xs uppercase tracking-wider text-zinc-400">
                    {isEn ? "Technical Deputy" : "Phó GĐ Kỹ thuật"}
                  </p>
                  <p className="font-semibold">
                    {isEn ? "Production" : "Sản xuất"}
                  </p>
                </div>
                <div className="h-4 w-px bg-zinc-300" />
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-5">
                  {(isEn
                    ? [
                        "Main Workshop 1",
                        "Main Workshop 2",
                        "Offset Print Workshop",
                        "Finishing Workshop",
                        "Delivery Dept.",
                      ]
                    : [
                        "Xưởng SX chính 1",
                        "Xưởng SX chính 2",
                        "Xưởng in offset",
                        "Xưởng hoàn thiện",
                        "Bộ phận giao nhận",
                      ]
                  ).map((dept) => (
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
                  <p className="text-xs uppercase tracking-wider text-zinc-400">
                    {isEn ? "Business Deputy" : "Phó GĐ Kinh doanh"}
                  </p>
                  <p className="font-semibold">
                    {isEn ? "Business" : "Kinh doanh"}
                  </p>
                </div>
                <div className="h-4 w-px bg-zinc-300" />
                <div className="grid grid-cols-3 gap-2">
                  {(isEn
                    ? ["HR & Admin", "Accounting", "QC & QA"]
                    : ["Phòng HC nhân sự", "Phòng Kế toán", "Phòng KT & KSCL"]
                  ).map((dept) => (
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
              {isEn
                ? "Chief Accountant: Nguyen Thi Thu Huyen"
                : "Kế toán Trưởng: Nguyễn Thị Thu Huyền"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
