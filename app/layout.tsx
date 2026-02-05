"use client";
import * as Lucide from 'lucide-react';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'Dashboard', icon: 'LayoutDashboard', href: '/' },
    { name: 'Driver Roster', icon: 'Users', href: '/drivers' },
    { name: 'Asset Management', icon: 'Truck', href: '/assets' },
    { name: 'Reports', icon: 'FileText', href: '/reports' },
    { name: 'Settings', icon: 'Settings', href: '/settings' },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-slate-50">
          <aside className="w-64 bg-slate-900 text-white flex flex-col p-6 fixed h-full">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-slate-900 italic">B</div>
              <span className="font-black tracking-tighter uppercase italic">Black Drop</span>
            </div>
            <nav className="flex-1 space-y-2">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-bold text-slate-300">
                  <span className="text-emerald-400">
                    {item.name === 'Dashboard' && <Lucide.LayoutDashboard size={18} />}
                    {item.name === 'Driver Roster' && <Lucide.Users size={18} />}
                    {item.name === 'Asset Management' && <Lucide.Truck size={18} />}
                    {item.name === 'Reports' && <Lucide.FileText size={18} />}
                    {item.name === 'Settings' && <Lucide.Settings size={18} />}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-slate-900">RA</div>
                <div>
                  <p className="text-xs font-black">Rafael Ayala</p>
                  <p className="text-[10px] text-slate-500 uppercase">Admin Access</p>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1 ml-64">{children}</main>
        </div>
      </body>
    </html>
  );
}