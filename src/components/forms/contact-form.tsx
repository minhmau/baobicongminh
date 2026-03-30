"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";

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

export function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl bg-green-50 px-6 py-8 text-center">
        <p className="text-green-800 font-medium">
          Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24 giờ.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
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

      <div className="space-y-1.5">
        <Label htmlFor="message">
          Nội dung <span className="text-red-600">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Mô tả yêu cầu của bạn..."
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
        {isPending ? "Đang gửi..." : "Gửi liên hệ"}
      </Button>
    </form>
  );
}
