"use client";
import * as Lucide from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-emerald-500">
            Command Center
          </h1>
          <p className="text-slate-500 font-medium">Black Drop Trucking | Midland, TX Operations</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <Lucide.Truck className="text-emerald-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900">Active Fleet</h3>
            <p className="text-3xl font-black text-slate-900">12</p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <Lucide.Users className="text-blue-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900">Drivers On-Duty</h3>
            <p className="text-3xl font-black text-slate-900">8</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <Lucide.AlertTriangle className="text-amber-500 mb-4" size={32} />
            <h3 className="font-bold text-slate-900">Pending Alerts</h3>
            <p className="text-3xl font-black text-slate-900">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}