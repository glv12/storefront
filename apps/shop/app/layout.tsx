import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webshop",
  description: "Bachelorarbeit by Ramon & Gian-Luca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Navbar Webshop</div>
        {children}</body>
    </html>
  );
}
