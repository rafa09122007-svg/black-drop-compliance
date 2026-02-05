"use client";
import { Shield, AlertOctagon, RefreshCw, ClipboardCheck, Box } from 'lucide-react';

export default function SafetyEquipment() {
  const inventory = [
    { id: 1, item: "Fire Extinguisher (5lb)", unit: "TK-101", lastInspected: "2025-12-10", frequency: "Annual", status: "Valid" },
    { id: 2, item: "Emergency Triangle Kit", unit: "TK-105", lastInspected: "2025-08-20", frequency: "Monthly", status: "Warning" },
    { id: 3, item: "First Aid Kit (Class A)", unit: "TR-502", lastInspected: "2026-01-15", frequency: "Quarterly", status: "Valid" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-emerald-500">Safety Inventory</h1>
            <p className="text-slate-500 font-medium">Equipment allocation and inspection tracking</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center gap-2">
            <Box size={16} className="text-emerald-400" /> + Add Inventory
          </button>
        </header>

        {/* Inspection Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border-l-4 border-l-amber-500 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-full">
              <RefreshCw size={24} className="animate-spin-slow" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Pending Inspections</p>
              <p className="text-xl font-black text-slate-900">4 Items Due</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-l-4 border-l-emerald-500 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Fleet Readiness</p>
              <p className="text-xl font-black text-slate-900">98.2% Compliant</p>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-widest">
                <th className="px-8 py-5">Safety Item</th>
                <th className="px-8 py-5">Assigned Unit</th>
                <th className="px-8 py-5">Last Inspection</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {inventory.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-100 rounded text-slate-400"><Shield size={16} /></div>
                      <span className="font-bold text-slate-800">{inv.item}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-mono font-bold text-slate-600">{inv.unit}</td>
                  <td className="px-8 py-5 text-sm text-slate-500">{inv.lastInspected}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      inv.status === 'Valid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>{inv.status}</span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-slate-900 font-bold text-xs underline decoration-emerald-500 underline-offset-4">Log Inspection</button>
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