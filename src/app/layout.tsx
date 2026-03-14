import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxen | Premium Galaxy Projectors",
  description:
    "Transform any room into a breathtaking galaxy experience with Luxen premium night lights and galaxy projectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78YGM1RUlW4UeaQDPbh9xSYXTLrRFtJ2ysk0dH" type="image/png" />
        <link rel="preload" href="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78WZ0XA8n2lEyVhDXz2vU5jxeOc1u0FrmnwZf4" as="image" />
        <link rel="preconnect" href="https://cqdsz6sbj4.ufs.sh" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
