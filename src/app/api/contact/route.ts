import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body as {
      name?: string;
      phone?: string;
      email?: string;
      message?: string;
    };

    if (!name?.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập họ và tên." }, { status: 400 });
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập số điện thoại." }, { status: 400 });
    }
    if (!message?.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập nội dung liên hệ." }, { status: 400 });
    }

    await sendContactEmail({ name: name.trim(), phone: phone.trim(), email, message: message.trim() });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json({ error: "Đã xảy ra lỗi. Vui lòng thử lại." }, { status: 500 });
  }
}
