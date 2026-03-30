import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { navLinks, contactInfo } from "@/data/navigation"

export function Footer() {
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
              {contactInfo.companyName}
            </p>
            <p className="text-xs text-zinc-500">
              Chuyên sản xuất thùng carton sóng, hộp carton, bao bì đóng gói chất lượng cao tại Hà Nội.
            </p>
            <p className="text-xs text-zinc-500">
              MST: <span className="text-zinc-400">{contactInfo.taxCode}</span>
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm">Liên kết nhanh</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm">Liên hệ</h3>
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
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Zalo */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm">Nhắn tin Zalo</h3>
            <p className="text-xs">
              Liên hệ nhanh qua Zalo để được tư vấn và báo giá miễn phí.
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
          &copy; {currentYear} {contactInfo.companyName}. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  )
}
