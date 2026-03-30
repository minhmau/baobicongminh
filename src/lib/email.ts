import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = "Bao Bì Công Minh <noreply@baobicongminh.com.vn>";
const TO = process.env.CONTACT_EMAIL || "congminhpack@gmail.com";

export interface ContactEmailData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export interface QuoteEmailData {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  product: string;
  quantity?: string;
  size?: string;
  printing?: string;
  notes?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const text = [
    `Họ và tên: ${data.name}`,
    `Số điện thoại: ${data.phone}`,
    `Email: ${data.email || "—"}`,
    ``,
    `Nội dung:`,
    data.message,
  ].join("\n");

  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `[Liên hệ] ${data.name} — ${data.phone}`,
    text,
  });
}

export async function sendQuoteEmail(data: QuoteEmailData) {
  const text = [
    `Họ và tên: ${data.name}`,
    `Công ty: ${data.company || "—"}`,
    `Số điện thoại: ${data.phone}`,
    `Email: ${data.email || "—"}`,
    ``,
    `Loại sản phẩm: ${data.product}`,
    `Số lượng: ${data.quantity || "—"}`,
    `Kích thước: ${data.size || "—"}`,
    `In ấn: ${data.printing || "—"}`,
    ``,
    `Ghi chú:`,
    data.notes || "—",
  ].join("\n");

  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `[Báo giá] ${data.name} — ${data.product}`,
    text,
  });
}
