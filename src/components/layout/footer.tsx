import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { navLinks, contactInfo } from "@/data/navigation"
import { getLang } from "@/lib/i18n"

export async function Footer() {
  const lang = await getLang()
  const isEn = lang === "en"
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase">
              Công Minh
            </h3>
            <p className="text-xs leading-relaxed">
              {isEn ? contactInfo.companyNameEn : contactInfo.companyName}
            </p>
            <p className="text-xs text-zinc-500">
              {isEn
                ? "Specializing in corrugated carton boxes and premium packaging in Hanoi."
                : "Chuyên sản xuất thùng carton sóng, hộp carton, bao bì đóng gói chất lượng cao tại Hà Nội."}
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm">
              {isEn ? "Quick Links" : "Liên kết nhanh"}
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs hover:text-white transition-colors"
                >
                  {isEn ? link.labelEn : link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm">
              {isEn ? "Contact" : "Liên hệ"}
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${contactInfo.hotline.replace(/\./g, "")}`}
                className="flex items-start gap-2 text-xs hover:text-white transition-colors"
              >
                <Phone className="size-3.5 mt-0.5 shrink-0 text-red-500" />
                <span>{contactInfo.hotline}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-2 text-xs hover:text-white transition-colors"
              >
                <Mail className="size-3.5 mt-0.5 shrink-0 text-red-500" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="size-3.5 mt-0.5 shrink-0 text-red-500" />
                <span className="leading-relaxed">
                  {isEn ? contactInfo.addressEn : contactInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Zalo */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm">
              {isEn ? "Message on Zalo" : "Nhắn tin Zalo"}
            </h3>
            <p className="text-xs">
              {isEn
                ? "Contact us on Zalo for free consultation and quotes."
                : "Liên hệ nhanh qua Zalo để được tư vấn và báo giá miễn phí."}
            </p>
            <a
              href={contactInfo.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors w-fit"
            >
              Zalo: {contactInfo.hotline}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center text-xs text-zinc-600">
          &copy; {currentYear} {isEn ? contactInfo.companyNameEn : contactInfo.companyName}.{" "}
          {isEn ? "All rights reserved." : "Tất cả quyền được bảo lưu."}
        </div>
      </div>
    </footer>
  )
}
