import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bao Bì Công Minh | Nhà sản xuất thùng carton tại Hà Nội",
    template: "%s | Bao Bì Công Minh",
  },
  description:
    "Bao Bì Công Minh chuyên sản xuất thùng carton sóng, hộp carton, bao bì đóng gói chất lượng cao tại Hà Nội. Giao hàng nhanh, giá cạnh tranh, đáp ứng mọi nhu cầu đóng gói công nghiệp.",
  keywords: [
    "thùng carton",
    "hộp carton",
    "bao bì carton",
    "thùng carton sóng",
    "sản xuất thùng carton Hà Nội",
    "bao bì đóng gói",
    "carton công nghiệp",
    "thùng giấy carton",
    "bao bì Công Minh",
    "baobicongminh",
  ],
  authors: [{ name: "Bao Bì Công Minh", url: "https://baobicongminh.com.vn" }],
  creator: "Bao Bì Công Minh",
  publisher: "Bao Bì Công Minh",
  metadataBase: new URL("https://baobicongminh.com.vn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://baobicongminh.com.vn",
    siteName: "Bao Bì Công Minh",
    title: "Bao Bì Công Minh | Nhà sản xuất thùng carton tại Hà Nội",
    description:
      "Chuyên sản xuất thùng carton sóng, hộp carton, bao bì đóng gói chất lượng cao tại Hà Nội.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bao Bì Công Minh | Nhà sản xuất thùng carton tại Hà Nội",
    description:
      "Chuyên sản xuất thùng carton sóng, hộp carton, bao bì đóng gói chất lượng cao tại Hà Nội.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
        </TooltipProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bao Bì Công Minh",
              url: "https://baobicongminh.com.vn",
              logo: "https://baobicongminh.com.vn/images/logo.png",
              telephone: "+84813086886",
              email: "congminhpack@gmail.com",
              foundingDate: "1998",
              description:
                "Bao Bì Công Minh chuyên sản xuất thùng carton sóng, hộp carton, bao bì đóng gói chất lượng cao tại Hà Nội. Giao hàng nhanh, giá cạnh tranh.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lô 44-B1, KCN Quang Minh",
                addressLocality: "Mê Linh, Hà Nội",
                addressCountry: "VN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
