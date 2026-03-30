"use client";

import { useActionState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

async function submitQuote(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const payload = {
    name: formData.get("name"),
    company: formData.get("company"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    product: formData.get("product"),
    quantity: formData.get("quantity"),
    size: formData.get("size"),
    printing: formData.get("printing"),
    notes: formData.get("notes"),
  };

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return {
        status: "error",
        message:
          (data as { error?: string }).error ||
          "Gửi thất bại. Vui lòng thử lại.",
      };
    }

    return { status: "success", message: "" };
  } catch {
    return {
      status: "error",
      message: "Không thể kết nối. Vui lòng kiểm tra mạng và thử lại.",
    };
  }
}

const PRODUCT_OPTIONS = [
  { value: "thung-carton-3-lop", label: "Thùng carton 3 lớp" },
  { value: "thung-carton-5-lop", label: "Thùng carton 5 lớp" },
  { value: "hop-carton-in-offset", label: "Hộp carton in offset" },
  { value: "hop-carton-3-lop", label: "Hộp carton 3 lớp" },
  { value: "hop-carton-5-lop", label: "Hộp carton 5 lớp" },
  { value: "hop-carton-co-ngan", label: "Hộp carton có ngăn" },
  { value: "khac", label: "Khác" },
];

const PRINTING_OPTIONS = [
  { value: "khong-in", label: "Không in" },
  { value: "in-flexo-1-3-mau", label: "In flexo 1–3 màu" },
  { value: "in-flexo-4-6-mau", label: "In flexo 4–6 màu" },
  { value: "in-offset", label: "In offset" },
];

const selectClass =
  "flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50";

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product") ?? "";

  const [state, action, isPending] = useActionState(submitQuote, initialState);

  if (state.status === "success") {
    if (typeof window !== "undefined") {
      if ("fbq" in window) (window as never as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead");
      if ("gtag" in window) (window as never as { gtag: (...args: unknown[]) => void }).gtag("event", "generate_lead", { event_category: "form" });
    }
    return (
      <div className="rounded-xl bg-green-50 px-6 py-10 text-center space-y-2">
        <CheckCircle className="mx-auto size-10 text-green-600" />
        <p className="text-green-800 font-semibold text-lg">
          Yêu cầu báo giá đã được gửi!
        </p>
        <p className="text-green-700 text-sm">
          Chúng tôi sẽ liên hệ lại trong vòng 2 giờ làm việc.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      {/* Row 1: name + company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">
            Họ và tên <span className="text-red-600">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nguyễn Văn A"
            disabled={isPending}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Công ty</Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Tên công ty (nếu có)"
            disabled={isPending}
          />
        </div>
      </div>

      {/* Row 2: phone + email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="phone">
            Số điện thoại <span className="text-red-600">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="0912 345 678"
            disabled={isPending}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            disabled={isPending}
          />
        </div>
      </div>

      {/* Product type */}
      <div className="space-y-1.5">
        <Label htmlFor="product">
          Loại sản phẩm <span className="text-red-600">*</span>
        </Label>
        <select
          id="product"
          name="product"
          required
          disabled={isPending}
          defaultValue={preselectedProduct}
          className={selectClass}
        >
          <option value="" disabled>
            Chọn loại sản phẩm...
          </option>
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Row 3: quantity + size */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="quantity">Số lượng</Label>
          <Input
            id="quantity"
            name="quantity"
            type="text"
            placeholder="VD: 5,000 cái/tháng"
            disabled={isPending}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="size">Kích thước</Label>
          <Input
            id="size"
            name="size"
            type="text"
            placeholder="VD: 60 x 40 x 30 cm"
            disabled={isPending}
          />
        </div>
      </div>

      {/* Printing */}
      <div className="space-y-1.5">
        <Label htmlFor="printing">In ấn</Label>
        <select
          id="printing"
          name="printing"
          disabled={isPending}
          defaultValue=""
          className={selectClass}
        >
          <option value="">Chọn kiểu in (tùy chọn)...</option>
          {PRINTING_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div className="space-y-1.5">
        <Label htmlFor="notes">Ghi chú thêm</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Yêu cầu đặc biệt, hình ảnh tham khảo, thời gian cần giao hàng..."
          disabled={isPending}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-red-600 hover:bg-red-700 text-white"
      >
        <Send className="mr-2 size-4" />
        {isPending ? "Đang gửi..." : "Gửi yêu cầu báo giá"}
      </Button>
    </form>
  );
}

export function QuoteForm() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse rounded-lg bg-zinc-100" />}>
      <QuoteFormInner />
    </Suspense>
  );
}
