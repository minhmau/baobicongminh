import type { Metadata } from "next";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { machines, facilityStats } from "@/data/machinery";

export const metadata: Metadata = {
  title: "Năng lực sản xuất & Hệ thống máy móc",
  description:
    "Hệ thống máy móc và thiết bị hiện đại của Bao Bì Công Minh — dây chuyền sản xuất đồng bộ, công suất lớn, đáp ứng mọi nhu cầu đặt hàng.",
};

const statsLabels: Record<keyof typeof facilityStats, string> = {
  area: "Diện tích",
  factories: "Xưởng sản xuất",
  warehouses: "Kho hàng",
  vehicles: "Xe vận chuyển",
  forklifts: "Xe nâng",
};

export default function HeThongMayMocPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-red-600">
          Năng lực sản xuất
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Hệ thống máy móc & thiết bị
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
          Bao Bì Công Minh đầu tư hệ thống máy móc hiện đại từ các nước tiên
          tiến như Đài Loan, Đức, Nhật Bản nhằm đảm bảo chất lượng sản phẩm và
          đáp ứng tiến độ giao hàng cho khách hàng.
        </p>
      </div>

      {/* Stats bar */}
      <section className="mb-12 rounded-xl bg-zinc-50 px-6 py-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {(Object.keys(facilityStats) as Array<keyof typeof facilityStats>).map(
            (key) => (
              <div key={key} className="text-center">
                <p className="text-2xl font-bold text-red-600">
                  {facilityStats[key]}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{statsLabels[key]}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Machinery grid */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          Danh sách máy móc
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine) => (
            <div
              key={machine.name}
              className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
            >
              {machine.image && (
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-zinc-900">{machine.name}</h3>
                <p className="mb-3 text-xs text-zinc-500">{machine.nameEn}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SL: {machine.quantity}</Badge>
                  <Badge variant="outline">{machine.origin}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
