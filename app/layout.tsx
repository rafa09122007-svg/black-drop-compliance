import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-slate-50">
          {/* We will add a new sidebar here later */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}