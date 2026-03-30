export type Machine = {
  name: string;
  nameEn: string;
  quantity: number;
  origin: string;
  originEn: string;
  image?: string;
};

export const machines: Machine[] = [
  {
    name: "Dây chuyền sản xuất tấm sóng 3 lớp",
    nameEn: "3-Layer Corrugating Line",
    quantity: 2,
    origin: "Đài Loan",
    originEn: "Taiwan",
    image: "/images/machinery/factory-corrugator.png",
  },
  {
    name: "Dây chuyền sản xuất tấm sóng 5 lớp",
    nameEn: "5-Layer Corrugating Line",
    quantity: 1,
    origin: "Đài Loan",
    originEn: "Taiwan",
    image: "/images/machinery/factory-line-1.jpeg",
  },
  {
    name: "Máy in offset",
    nameEn: "Offset Printing Machine",
    quantity: 2,
    origin: "Đức (Roland)",
    originEn: "Germany (Roland)",
    image: "/images/machinery/may-in-offset.jpg",
  },
  {
    name: "Máy in flexo",
    nameEn: "Flexo Printing Machine",
    quantity: 3,
    origin: "Trung Quốc",
    originEn: "China",
  },
  {
    name: "Máy bế hộp tự động",
    nameEn: "Automatic Die-Cutting Machine",
    quantity: 2,
    origin: "Đài Loan",
    originEn: "Taiwan",
    image: "/images/machinery/may-be-hop.jpg",
  },
  {
    name: "Máy dán hộp tự động",
    nameEn: "Automatic Gluing Machine",
    quantity: 2,
    origin: "Đài Loan / Trung Quốc",
    originEn: "Taiwan / China",
    image: "/images/machinery/may-dan-hop.jpg",
  },
  {
    name: "Máy ghim đóng thùng tự động",
    nameEn: "Automatic Stapling Machine",
    quantity: 3,
    origin: "Đài Loan",
    originEn: "Taiwan",
    image: "/images/machinery/may-ghim-dan-tu-dong.jpg",
  },
  {
    name: "Máy đập ghim tự động",
    nameEn: "Automatic Stitching Machine",
    quantity: 2,
    origin: "Đài Loan",
    originEn: "Taiwan",
    image: "/images/machinery/may-dap-ghim-tu-dong.jpg",
  },
  {
    name: "Máy dán sóng",
    nameEn: "Flute Laminating Machine",
    quantity: 2,
    origin: "Trung Quốc",
    originEn: "China",
    image: "/images/machinery/may-dan-song.jpg",
  },
  {
    name: "Máy cán màng tự động",
    nameEn: "Automatic Laminating Machine",
    quantity: 1,
    origin: "Đài Loan",
    originEn: "Taiwan",
  },
  {
    name: "Máy đóng gói tự động",
    nameEn: "Automatic Packaging Machine",
    quantity: 2,
    origin: "Nhật Bản / Đài Loan",
    originEn: "Japan / Taiwan",
    image: "/images/machinery/factory-floor.jpeg",
  },
  {
    name: "Máy ghim đóng thùng tay",
    nameEn: "Manual Stapling Machine",
    quantity: 4,
    origin: "Đài Loan",
    originEn: "Taiwan",
    image: "/images/machinery/factory-stapler.png",
  },
];

export type FacilityStats = {
  area: string;
  factories: number;
  warehouses: number;
  vehicles: number;
  forklifts: number;
};

export const facilityStats: FacilityStats = {
  area: "15,000 m²",
  factories: 4,
  warehouses: 2,
  vehicles: 6,
  forklifts: 18,
};
