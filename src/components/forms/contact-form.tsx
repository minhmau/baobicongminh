"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Lang } from "@/lib/i18n";

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const payload = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
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

    return {
      status: "success",
      message: "",
    };
  } catch {
    return {
      status: "error",
      message: "Không thể kết nối. Vui lòng kiểm tra mạng và thử lại.",
    };
  }
}

export function ContactForm({ lang = "vi" }: { lang?: Lang }) {
  const [state, action, isPending] = useActionState(
    submitContact,
    initialState
  );
  const isEn = lang === "en";

  if (state.status === "success") {
    return (
      <div className="rounded-xl bg-green-50 px-6 py-10 text-center space-y-2">
        <svg className="mx-auto size-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <p className="text-green-800 font-semibold text-lg">
          {isEn ? "Message sent!" : "Tin nhắn đã được gửi!"}
        </p>
        <p className="text-green-700 text-sm">
          {isEn
            ? "We will respond within 24 working hours."
            : "Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc."}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">
          {isEn ? "Full name" : "Họ và tên"}{" "}
          <span className="text-red-600">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder={isEn ? "John Smith" : "Nguyễn Văn A"}
          disabled={isPending}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">
          {isEn ? "Phone number" : "Số điện thoại"}{" "}
          <span className="text-red-600">*</span>
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

      <div className="space-y-1.5">
        <Label htmlFor="message">
          {isEn ? "Message" : "Nội dung"}{" "}
          <span className="text-red-600">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={
            isEn
              ? "Describe your requirements..."
              : "Mô tả yêu cầu của bạn..."
          }
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
        {isPending
          ? isEn ? "Sending..." : "Đang gửi..."
          : isEn ? "Send message" : "Gửi liên hệ"}
      </Button>
    </form>
  );
}
