export type NavLink = {
  label: string;
  labelEn: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Trang chủ", labelEn: "Home", href: "/" },
  { label: "Giới thiệu", labelEn: "About Us", href: "/gioi-thieu" },
  { label: "Sản phẩm", labelEn: "Products", href: "/san-pham" },
  {
    label: "Năng lực sản xuất",
    labelEn: "Production Capacity",
    href: "/he-thong-may-moc",
  },
  { label: "Tin tức", labelEn: "News", href: "/tin-tuc" },
  { label: "Liên hệ", labelEn: "Contact", href: "/lien-he" },
];

export type ContactInfo = {
  companyName: string;
  companyNameEn: string;
  address: string;
  addressEn: string;
  phone: string;
  hotline: string;
  fax: string;
  email: string;
  taxCode: string;
  zalo: string;
  mapEmbedUrl: string;
};

export const contactInfo: ContactInfo = {
  companyName: "Công ty TNHH Bao Bì Công Minh",
  companyNameEn: "Cong Minh Packaging Co., Ltd.",
  address:
    "Lô 44-B1, KCN Quang Minh, thị trấn Quang Minh, Mê Linh, Hà Nội",
  addressEn:
    "Lot 44-B1, Quang Minh Industrial Zone, Me Linh, Hanoi",
  phone: "043.586.0004",
  hotline: "081.308.6886",
  fax: "043.586.0004",
  email: "congminhpack@gmail.com",
  taxCode: "0100784051",
  zalo: "https://zalo.me/0813086886",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d105.7600497!3d21.2007137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134fe0a962ebdc3%3A0xf183e738aaccb018!2sDoanh%20nghi%E1%BB%87p%20t%C6%B0%20nh%C3%A2n%20X%C3%AD%20Nghi%E1%BB%87p%20Bao%20B%C3%AC%20C%C3%B4ng%20Minh!5e0!3m2!1svi!2svn!4v1711756800000",
};
