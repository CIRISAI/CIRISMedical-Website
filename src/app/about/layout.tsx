import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../global.css";
import { IconSettings } from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontBrandRegular = localFont({
  src: "../../fonts/AspektaVF.woff2",
  variable: "--font-brand-regular",
  display: "swap",
  style: "normal",
  weight: "100 900",
  preload: true,
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "CIRIS.AI",
  description: "Ethical AI for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${fontBrandRegular.className} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white dark:bg-black">{children}</div>
      </body>
    </html>
  );
}
