import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./pages/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Box23Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="w-full bg-zinc-800">
        
        <Header />
        {children}
        
        </body>
    </html>
  );
}
