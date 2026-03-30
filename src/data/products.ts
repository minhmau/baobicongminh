export type Product = {
  slug: string;
  name: string;
  nameEn: string;
  category: "carton-song" | "hop-carton" | "in-offset";
  description: string;
  descriptionEn: string;
  specs: string[];
  specsEn: string[];
  image: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    slug: "thung-carton-song-3-lop",
    name: "Thùng Carton Sóng 3 Lớp",
    nameEn: "3-Layer Corrugated Carton Box",
    category: "carton-song",
    description:
      "Cấu tạo gồm 3 thành phần: giấy mặt ngoài, giấy mặt trong và lớp sóng ở giữa. Phù hợp cho hàng hóa nhẹ, gọn.",
    descriptionEn:
      "Composed of 3 components: outer liner, inner liner, and a fluted medium in between. Suitable for lightweight and compact goods.",
    specs: [
      "Sóng E 1.1–2mm",
      "Sóng B 2.5–3mm",
      "Sóng A 4.5–5mm",
      "Kraft liner",
      "In flexo 1–6 màu",
    ],
    specsEn: [
      "E-flute 1.1–2mm",
      "B-flute 2.5–3mm",
      "A-flute 4.5–5mm",
      "Kraft liner",
      "Flexo printing 1–6 colors",
    ],
    image: "/images/products/thung-carton-3-lop1.jpg",
    featured: true,
  },
  {
    slug: "thung-carton-song-5-lop",
    name: "Thùng Carton Sóng 5 Lớp",
    nameEn: "5-Layer Corrugated Carton Box",
    category: "carton-song",
    description:
      "Sóng BC, độ dày 5.5–6.6mm. Kết hợp sóng B và sóng C cho khả năng chịu lực tốt. Phù hợp hàng hóa nặng.",
    descriptionEn:
      "BC flute, thickness 5.5–6.6mm. Combines B and C flutes for excellent load-bearing capacity. Suitable for heavy goods.",
    specs: [
      "Sóng AB 8–9mm",
      "Sóng BE 3.6–5mm",
      "Chịu lực cao",
      "Kraft liner",
      "In flexo 1–6 màu",
    ],
    specsEn: [
      "AB-flute 8–9mm",
      "BE-flute 3.6–5mm",
      "High load capacity",
      "Kraft liner",
      "Flexo printing 1–6 colors",
    ],
    image: "/images/products/hop-carton-song-5-lop.jpg",
    featured: true,
  },
  {
    slug: "hop-carton-in-offset",
    name: "Hộp Carton In Offset",
    nameEn: "Offset-Printed Carton Box",
    category: "in-offset",
    description:
      "In offset trên carton 3/5/7 lớp cho hình ảnh sắc nét, màu sắc trung thực. Phù hợp bao bì cao cấp, quà tặng.",
    descriptionEn:
      "Offset printing on 3/5/7-layer carton for sharp images and true colors. Ideal for premium packaging and gift boxes.",
    specs: [
      "In offset 5–6 màu (máy Roland – Đức)",
      "Giấy duplex Hàn Quốc/Indonesia",
      "200–600 gr/m²",
      "Cán màng/bế/dán tự động",
    ],
    specsEn: [
      "Offset printing 5–6 colors (Roland machine – Germany)",
      "Duplex board Korea/Indonesia",
      "200–600 gr/m²",
      "Auto laminating/die-cutting/gluing",
    ],
    image: "/images/products/hop-cat-tong-in-offset.png",
    featured: true,
  },
  {
    slug: "hop-carton-3-lop",
    name: "Hộp Carton 3 Lớp",
    nameEn: "3-Layer Carton Box",
    category: "hop-carton",
    description:
      "2 lớp giấy phẳng bên ngoài và 1 lớp sóng ở giữa. Thích hợp đóng gói hàng hóa nhẹ, gọn.",
    descriptionEn:
      "2 flat liner layers on the outside and 1 fluted medium in the middle. Suitable for packaging lightweight and compact goods.",
    specs: [
      "Sóng E 1.1–2mm",
      "Sóng B 2.5–3mm",
      "Kraft liner",
      "In flexo 1–4 màu",
    ],
    specsEn: [
      "E-flute 1.1–2mm",
      "B-flute 2.5–3mm",
      "Kraft liner",
      "Flexo printing 1–4 colors",
    ],
    image: "/images/products/thung-carton-3-lop1.jpg",
    featured: false,
  },
  {
    slug: "hop-carton-5-lop",
    name: "Hộp Carton 5 Lớp",
    nameEn: "5-Layer Carton Box",
    category: "hop-carton",
    description:
      "2 lớp mặt ngoài và 3 lớp bên trong (2 lớp sóng + 1 lớp phẳng). Dùng cho hàng hóa nặng, cần bảo vệ cao.",
    descriptionEn:
      "2 outer liner layers and 3 inner layers (2 fluted + 1 flat). Used for heavy goods requiring high protection.",
    specs: [
      "Sóng BC 5.5–6.6mm",
      "Chịu lực cao",
      "Kraft liner",
      "In flexo 1–6 màu",
    ],
    specsEn: [
      "BC-flute 5.5–6.6mm",
      "High load capacity",
      "Kraft liner",
      "Flexo printing 1–6 colors",
    ],
    image: "/images/products/hop-carton-song-5-lop1.jpg",
    featured: false,
  },
  {
    slug: "hop-carton-5-lop-co-ngan",
    name: "Hộp Carton 5 Lớp Có Ngăn",
    nameEn: "5-Layer Carton Box with Dividers",
    category: "hop-carton",
    description:
      "Hộp 5 lớp có thêm vách ngăn bên trong để bảo vệ sản phẩm, chống va đập. Thích hợp chai lọ, đồ điện tử.",
    descriptionEn:
      "5-layer box with internal dividers to protect products from impact. Ideal for bottles, jars, and electronics.",
    specs: [
      "Sóng BC 5.5–6.6mm",
      "Vách ngăn tùy chỉnh",
      "Kraft liner",
      "In flexo 1–6 màu",
    ],
    specsEn: [
      "BC-flute 5.5–6.6mm",
      "Custom internal dividers",
      "Kraft liner",
      "Flexo printing 1–6 colors",
    ],
    image: "/images/products/hop-carton-7-lop-ngan.jpg",
    featured: false,
  },
];

export type Category = {
  slug: string;
  name: string;
  nameEn: string;
};

export const categories: Category[] = [
  { slug: "all", name: "Tất cả", nameEn: "All" },
  { slug: "carton-song", name: "Carton Sóng", nameEn: "Corrugated Carton" },
  { slug: "hop-carton", name: "Hộp Carton", nameEn: "Carton Boxes" },
  { slug: "in-offset", name: "In Offset", nameEn: "Offset Printing" },
];
