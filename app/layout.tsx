import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "شرمب كابشن | بوابة التسليم",
  description:
    "منصة توصيل الروبيان الفاخر في المملكة العربية السعودية - بوابة التسليم لمشروع شرمب كابشن",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.className}>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
