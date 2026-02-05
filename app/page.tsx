"use client";
import * as Lucide from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-emerald-500">
              Command Center
            </h1>
            <p className="text-slate-500 font-medium tracking-wide">Black Drop Trucking | Midland, TX Operations</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <Lucide.CloudSun className="text-blue-400" size={24} />
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400">Midland Weather</p>
              <p className="text-sm font-bold text-slate-800">45°F - Clear</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm border-b-4 border-b-emerald-500">
            <Lucide.Truck className="text-emerald-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Active Fleet</h3>
            <p className="text-4xl font-black text-slate-900">12</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm border-b-4 border-b-blue-500">
            <Lucide.Users className="text-blue-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Drivers On-Duty</h3>
            <p className="text-4xl font-black text-slate-900">8</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm border-b-4 border-b-amber-500">
            <Lucide.AlertTriangle className="text-amber-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Pending Alerts</h3>
            <p className="text-4xl font-black text-slate-900">3</p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <Lucide.Wind className="absolute right-[-20px] top-[-20px] text-slate-800" size={200} />
          <div className="relative z-10">
            <h2 className="text-xl font-black uppercase italic mb-2">Road Condition Alert</h2>
            <p className="text-slate-400 text-sm max-w-md">High wind advisories currently in effect for I-20 near Midland. Advise drivers to maintain caution with empty trailers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}