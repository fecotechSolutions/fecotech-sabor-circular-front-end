import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { montserrat } from "@/public/fonts/font";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Sabord Circular",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
        style={{
          background: "rgba(254, 187, 94, 0.8)",
          height: "100vh",
        }}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
