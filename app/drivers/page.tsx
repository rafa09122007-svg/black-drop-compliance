"use client";
import { useState } from 'react';
import * as Lucide from 'lucide-react';

export default function DriverRoster() {
  const [showForm, setShowForm] = useState(false);
  const [drivers, setDrivers] = useState([
    { id: 1, name: "Marcus Thompson", license: "CDL-A", status: "Active", phone: "432-555-0101", truck: "TK-101" },
  ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">Driver Roster</h1>
            <p className="text-slate-500 font-medium">Manage personnel for Black Drop Trucking</p>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all"
          >
            <Lucide.UserPlus size={16} /> + Add Driver
          </button>
        </header>

        {/* Driver Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-widest">
              <tr>
                <th className="px-8 py-5">Driver Name</th>
                <th className="px-8 py-5">License</th>
                <th className="px-8 py-5">Unit</th>
                <th className="px-8 py-5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {drivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-slate-50">
                  <td className="px-8 py-5 font-bold text-slate-800">{driver.name}</td>
                  <td className="px-8 py-5 text-sm text-slate-500">{driver.license}</td>
                  <td className="px-8 py-5 text-sm font-mono text-slate-500">{driver.truck}</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase">
                      {driver.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simple Modal Pop-up */}
        {showForm && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200">
              <h2 className="text-xl font-black uppercase italic mb-4">Register New Driver</h2>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-emerald-500" />
                <input type="text" placeholder="License Type (e.g. CDL-A)" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-emerald-500" />
                <div className="flex gap-4">
                  <button onClick={() => setShowForm(false)} className="flex-1 py-3 font-bold text-slate-400">Cancel</button>
                  <button onClick={() => setShowForm(false)} className="flex-1 py-3 bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-200">Save Driver</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}