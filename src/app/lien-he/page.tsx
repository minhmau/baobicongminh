import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { contactInfo } from "@/data/navigation";
import { getLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ với Bao Bì Công Minh — địa chỉ, số điện thoại, email và form gửi tin nhắn trực tuyến.",
};

export default async function LienHePage() {
  const lang = await getLang();
  const isEn = lang === "en";

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-red-600">
          {isEn ? "Contact" : "Liên hệ"}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          {isEn ? "Contact Us" : "Liên hệ với chúng tôi"}
        </h1>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: contact info + map */}
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-zinc-900">
                  {isEn ? "Address" : "Địa chỉ"}
                </p>
                <p className="mt-0.5 text-zinc-600">
                  {isEn ? contactInfo.addressEn : contactInfo.address}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-zinc-900">
                  {isEn ? "Phone" : "Điện thoại"}
                </p>
                <p className="mt-0.5 text-zinc-600">
                  Hotline:{" "}
                  <a
                    href={`tel:${contactInfo.hotline}`}
                    className="text-red-600 hover:underline"
                  >
                    {contactInfo.hotline}
                  </a>
                </p>
                <p className="text-zinc-600">
                  {isEn ? "Office" : "Văn phòng"}:{" "}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-zinc-900">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-0.5 text-zinc-600 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-zinc-900">
                  {isEn ? "Working hours" : "Giờ làm việc"}
                </p>
                <p className="mt-0.5 text-zinc-600">
                  {isEn
                    ? "Mon – Sat: 7:30 – 17:30"
                    : "Thứ 2 – Thứ 7: 7:30 – 17:30"}
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-xl border border-zinc-200">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isEn ? "Cong Minh Packaging map" : "Bản đồ Bao Bì Công Minh"}
            />
          </div>
        </div>

        {/* Right: contact form */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-zinc-900">
            {isEn ? "Send a Message" : "Gửi tin nhắn"}
          </h2>
          <ContactForm lang={lang} />
        </div>
      </div>
    </main>
  );
}
