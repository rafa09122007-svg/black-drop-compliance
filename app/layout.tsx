import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Drop Trucking | Compliance",
  description: "Fleet Operations & DOT Compliance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 h-screen overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}