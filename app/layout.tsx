import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrimp Caption | Client Delivery Portal",
  description:
    "Premium Shrimp Delivery Platform - Client delivery portal for Shrimp Caption project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-gray-950 text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
