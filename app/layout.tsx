import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Controle financeiro - Entradas e saídas",
   description: "Controle financeiro - Entradas e saídas",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-br">
         <body className={`${interSans.variable} antialiased`}>{children}</body>
      </html>
   );
}
