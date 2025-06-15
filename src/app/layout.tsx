import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer  from "@/app/component/footer"
import Navbar from "@/app/component/menu";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
