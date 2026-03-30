export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // YYYY-MM-DD
  image?: string;
};

export const posts: Post[] = [
  {
    slug: "cach-chon-thung-carton-phu-hop",
    title: "Cách chọn thùng carton phù hợp cho sản phẩm",
    excerpt:
      "Việc chọn đúng loại thùng carton giúp bảo vệ hàng hóa tối ưu và tiết kiệm chi phí. Bài viết hướng dẫn cách phân biệt carton 3 lớp, 5 lớp và các loại sóng E, B, A, AB, BE.",
    date: "2026-03-15",
    image: "/images/products/carton-song-3-lop.webp",
    content: `Thùng carton là vật liệu đóng gói phổ biến nhất hiện nay, nhưng không phải ai cũng biết cách chọn loại phù hợp. Hiểu rõ cấu trúc và tính năng của từng loại sẽ giúp bạn bảo vệ hàng hóa tốt hơn và tối ưu chi phí.

**Carton sóng 3 lớp hay 5 lớp?**

Carton sóng 3 lớp gồm 2 lớp giấy mặt và 1 lớp sóng ở giữa. Loại này nhẹ, giá thành thấp, phù hợp cho hàng hóa nhẹ (dưới 10 kg), không yêu cầu chịu lực cao. Carton sóng 5 lớp có thêm 1 lớp giấy phẳng và 1 lớp sóng bổ sung, tạo độ cứng và khả năng chịu lực vượt trội, phù hợp cho hàng hóa nặng (10–30 kg) hoặc cần xếp chồng nhiều tầng.

**Phân loại sóng carton**

Sóng E (1,1–2 mm): Sóng nhỏ nhất, bề mặt phẳng đẹp, in ấn sắc nét. Dùng cho hộp đựng đồ điện tử, mỹ phẩm, quà tặng cao cấp.

Sóng B (2,5–3 mm): Cứng vừa, chịu lực nén tốt theo chiều đứng. Phù hợp đóng gói thực phẩm, đồ gia dụng, hàng tiêu dùng thông thường.

Sóng A (4,5–5 mm): Sóng lớn, đệm chống sốc tốt nhất trong nhóm sóng đơn. Dùng cho hàng dễ vỡ như đồ gốm sứ, thủy tinh.

Sóng AB (8–9 mm): Kết hợp sóng A và B, tạo thành carton 5 lớp cực dày. Ứng dụng cho máy móc, thiết bị nặng, hàng xuất khẩu.

Sóng BE (3,6–5 mm): Kết hợp sóng B và E, cân bằng giữa độ cứng và bề mặt in ấn đẹp. Lý tưởng cho hộp carton bán lẻ cần thẩm mỹ cao.

**Những yếu tố cần cân nhắc khi chọn thùng**

Trọng lượng hàng hóa là yếu tố đầu tiên: hàng dưới 5 kg dùng carton 3 lớp sóng E hoặc B là đủ; hàng 5–20 kg nên dùng carton 3 lớp sóng A hoặc 5 lớp sóng BE; hàng trên 20 kg hoặc cần xếp chồng cao nên dùng carton 5 lớp sóng AB.

Ngoài ra cần xem xét điều kiện bảo quản (môi trường ẩm ướt cần giấy chống thấm), yêu cầu in ấn (hàng trưng bày cần bề mặt phẳng, sóng E hoặc BE) và chi phí vận chuyển (thùng nhẹ giảm cước phí).

**Tư vấn miễn phí từ Công Minh**

Với hơn 25 năm kinh nghiệm, đội ngũ kỹ thuật của Bao Bì Công Minh sẵn sàng tư vấn giải pháp đóng gói tối ưu cho từng loại sản phẩm. Liên hệ ngay để được hỗ trợ miễn phí và nhận báo giá nhanh trong 30 phút.`,
  },
  {
    slug: "quy-trinh-san-xuat-bao-bi-carton",
    title: "Quy trình sản xuất bao bì carton tại Công Minh",
    excerpt:
      "Khám phá quy trình 5 bước sản xuất bao bì carton khép kín tại nhà máy Bao Bì Công Minh — từ nguyên liệu đầu vào đến thành phẩm đạt chuẩn chất lượng.",
    date: "2026-03-01",
    image: "/images/machinery/may-dan-song.jpg",
    content: `Bao Bì Công Minh tự hào sở hữu dây chuyền sản xuất khép kín, hiện đại với công suất lên đến 500.000 m² bao bì/tháng. Quy trình sản xuất được kiểm soát chặt chẽ theo tiêu chuẩn ISO, đảm bảo chất lượng đồng đều trên từng lô hàng.

**Bước 1 — Tiếp nhận và kiểm tra nguyên liệu**

Giấy cuộn (kraft liner, testliner, fluting medium) nhập khẩu từ Hàn Quốc, Indonesia và trong nước được kiểm tra định lượng (gsm), độ ẩm và độ bền kéo trước khi đưa vào sản xuất. Chỉ nguyên liệu đạt chuẩn mới được chấp nhận.

**Bước 2 — Dán sóng và tạo tấm carton**

Máy dán sóng (corrugator) tự động gia nhiệt và tạo hình sóng cho lớp giấy giữa, sau đó dán với các lớp giấy mặt bằng hồ tinh bột. Nhiệt độ và tốc độ máy được điều chỉnh tùy loại sóng (E, B, A, AB, BE) để đảm bảo độ kết dính và độ phẳng tấm carton.

**Bước 3 — Cắt và bế (die-cut)**

Tấm carton lớn được cắt theo kích thước đặt hàng, sau đó qua máy bế rãnh tạo các nếp gấp, lỗ thông hơi hoặc hình dạng đặc biệt theo bản thiết kế. Máy bế CNC đảm bảo độ chính xác đến ±0,5 mm.

**Bước 4 — In ấn**

Với đơn hàng in flexo (1–6 màu), tấm carton đi qua máy in flexo với tốc độ cao. Với sản phẩm cao cấp cần in offset, giấy duplex được in trước trên máy Roland (Đức) 5–6 màu, sau đó cán màng và dán lên bề mặt carton.

**Bước 5 — Hoàn thiện, kiểm tra và đóng gói**

Thành phẩm được dán hông (nếu là hộp) hoặc ghim đinh, kiểm tra kích thước, độ phẳng, chất lượng in và khả năng chịu lực. Hàng đạt chuẩn được đóng bó, dán nhãn lô và lưu kho hoặc giao ngay cho khách hàng.

**Cam kết chất lượng**

Mỗi lô hàng xuất xưởng đều kèm phiếu kiểm nghiệm. Bao Bì Công Minh áp dụng chính sách đổi trả trong 7 ngày nếu sản phẩm không đạt yêu cầu kỹ thuật đã thỏa thuận. Sự hài lòng của khách hàng là tiêu chí hàng đầu chúng tôi hướng đến.`,
  },
];
