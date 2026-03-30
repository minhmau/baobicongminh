import { NextRequest, NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, product, quantity, size, printing, notes } = body as {
      name?: string;
      company?: string;
      phone?: string;
      email?: string;
      product?: string;
      quantity?: string;
      size?: string;
      printing?: string;
      notes?: string;
    };

    if (!name?.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập họ và tên." }, { status: 400 });
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: "Vui lòng nhập số điện thoại." }, { status: 400 });
    }
    if (!product?.trim()) {
      return NextResponse.json({ error: "Vui lòng chọn loại sản phẩm." }, { status: 400 });
    }

    await sendQuoteEmail({
      name: name.trim(),
      company,
      phone: phone.trim(),
      email,
      product: product.trim(),
      quantity,
      size,
      printing,
      notes,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/quote]", err);
    return NextResponse.json({ error: "Đã xảy ra lỗi. Vui lòng thử lại." }, { status: 500 });
  }
}
