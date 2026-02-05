"use client";
import * as Lucide from 'lucide-react';

export default function DriverRoster() {
  const drivers = [
    { id: 1, name: "Marcus Thompson", license: "CDL-A", status: "Active", phone: "432-555-0101", truck: "TK-101" },
    { id: 2, name: "Sarah Jenkins", license: "CDL-A", status: "On Leave", phone: "432-555-0202", truck: "TK-105" },
    { id: 3, name: "Robert Flores", license: "CDL-B", status: "Active", phone: "432-555-0303", truck: "TR-502" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-emerald-500">Driver Roster</h1>
            <p className="text-slate-500 font-medium text-sm">Personnel management and licensing status</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center gap-2">
            <Lucide.UserPlus size={16} className="text-emerald-400" /> + Add Driver
          </button>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-widest">
                <th className="px-8 py-5">Driver Name</th>
                <th className="px-8 py-5">License Type</th>
                <th className="px-8 py-5">Assigned Unit</th>
                <th className="px-8 py-5">Contact</th>
                <th className="px-8 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {drivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded text-slate-400"><Lucide.User size={16} /></div>
                      <span className="font-bold text-slate-800">{driver.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-600">{driver.license}</td>
                  <td className="px-8 py-5 text-sm font-mono text-slate-500">{driver.truck}</td>
                  <td className="px-8 py-5 text-sm text-slate-500">{driver.phone}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      driver.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'
                    }`}>{driver.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}