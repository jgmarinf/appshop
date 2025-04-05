import { Font } from "@/config/fonts";
import { Providers } from "@/provider/ReactQueryProvider";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tienda Virtual",
  description:
    "esta pagina es una tienda virtual demo, en la que se puede ver los productos y comprarlos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${Font.variable} antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
