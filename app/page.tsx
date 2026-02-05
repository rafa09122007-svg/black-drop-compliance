"use client";
import * as Lucide from 'lucide-react';

export default function Dashboard() {
  const weeklyFuel = [
    { day: 'Mon', cost: 1200 },
    { day: 'Tue', cost: 1900 },
    { day: 'Wed', cost: 1500 },
    { day: 'Thu', cost: 2100 },
    { day: 'Fri', cost: 1800 },
  ];

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

        {/* Top Stats Cards */}
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

        {/* Fuel Expense Chart Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black uppercase italic">Fuel Expenses</h2>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Weekly View</span>
            </div>
            <div className="flex items-end justify-between h-40 gap-2">
              {weeklyFuel.map((item) => (
                <div key={item.day} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-slate-100 rounded-t-lg hover:bg-emerald-400 transition-colors relative group"
                    style={{ height: `${(item.cost / 2500) * 100}%` }}
                  >
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${item.cost}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <Lucide.Zap className="absolute right-[-20px] top-[-20px] text-slate-800" size={200} />
            <div className="relative z-10">
              <h2 className="text-xl font-black uppercase italic mb-2">Efficiency Rating</h2>
              <p className="text-slate-400 text-sm mb-6">Your fleet is currently operating at 92% fuel efficiency across the Midland sector.</p>
              <div className="flex gap-4">
                <div className="bg-slate-800 p-4 rounded-2xl flex-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Average MPG</p>
                  <p className="text-2xl font-black">6.4</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-2xl flex-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Cost per Mile</p>
                  <p className="text-2xl font-black">$0.84</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}