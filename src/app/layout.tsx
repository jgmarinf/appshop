import { Font } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Tienda Virtual",
  description: "esta pagina es una tienda virtual demo, en la que se puede ver los productos y comprarlos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
