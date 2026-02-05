"use client";
import { useState } from 'react';
import * as Lucide from 'lucide-react';

export default function DriverRoster() {
  const [showForm, setShowForm] = useState(false);
  const [drivers] = useState([
    { id: 1, name: "Marcus Thompson", license: "CDL-A", status: "Active", expires: "2026-03-15", truck: "TK-101" },
    { id: 2, name: "Sarah Jenkins", license: "CDL-A", status: "Active", expires: "2026-02-10", truck: "TK-105" }, // Expiring soon
  ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">Driver Roster</h1>
            <p className="text-slate-500 font-medium tracking-tight">Compliance and License Tracking</p>
          </div>
          <button onClick={() => setShowForm(true)} className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all">
            <Lucide.UserPlus size={16} /> + Add Driver
          </button>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-widest">
              <tr>
                <th className="px-8 py-5">Driver Name</th>
                <th className="px-8 py-5">License</th>
                <th className="px-8 py-5">Expiration</th>
                <th className="px-8 py-5">Unit</th>
                <th className="px-8 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {drivers.map((driver) => {
                const isExpiring = new Date(driver.expires) < new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
                return (
                  <tr key={driver.id} className="hover:bg-slate-50">
                    <td className="px-8 py-5 font-bold text-slate-800">{driver.name}</td>
                    <td className="px-8 py-5 text-sm text-slate-500">{driver.license}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${isExpiring ? 'text-amber-600' : 'text-slate-500'}`}>
                          {driver.expires}
                        </span>
                        {isExpiring && <Lucide.AlertCircle size={14} className="text-amber-500" />}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm font-mono text-slate-500">{driver.truck}</td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase">
                        {driver.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}