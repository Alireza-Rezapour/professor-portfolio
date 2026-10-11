import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./(main-app)/components/navbar/navbar";

export const metadata: Metadata = {
  title: "دکتر محمدباقر جمالی | استادیار مهندسی صنایع",
  description:
    "وب‌سایت شخصی دکتر محمدباقر جمالی؛ پژوهش، پروژه‌ها، مقالات و تدریس.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fonts are yours to configure: add your font className to <body>.
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
