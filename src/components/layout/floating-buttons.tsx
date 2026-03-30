"use client";

import { Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Zalo */}
      <a
        href="https://zalo.me/0813086886"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với Bao Bì Công Minh"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
      >
        <span className="text-xs font-bold leading-none">Zalo</span>
      </a>

      {/* Phone */}
      <a
        href="tel:0813086886"
        aria-label="Gọi điện cho Bao Bì Công Minh: 0813086886"
        className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-700"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
