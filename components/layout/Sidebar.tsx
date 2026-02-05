"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Truck, FileText, Settings } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Driver Roster', href: '/drivers', icon: Users },
    { name: 'Asset Management', href: '#', icon: Truck },
    { name: 'Reports', href: '#', icon: FileText },
    { name: 'Settings', href: '#', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen sticky top-0 flex flex-col border-r border-slate-800">
      <div className="p-6">
        <h2 className="text-emerald-400 font-black text-xl tracking-tighter uppercase">BlackHorn</h2>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Compliance v1.0</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-sm transition-all ${
                isActive 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white text-xs uppercase">RA</div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-white truncate">Rafael Ayala</p>
            <p className="text-[10px] text-slate-500 truncate lowercase">Admin Access</p>
          </div>
        </div>
      </div>
    </aside>
  );
}