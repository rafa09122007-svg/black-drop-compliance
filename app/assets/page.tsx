"use client";
import * as Lucide from 'lucide-react';

export default function AssetsPage() {
  const assets = [
    { id: "TK-101", type: "Semi-Truck", make: "Peterbilt", year: "2023", status: "In Service" },
    { id: "TK-105", type: "Semi-Truck", make: "Kenworth", year: "2022", status: "Maintenance" },
    { id: "TR-502", type: "Flatbed", make: "Utility", year: "2024", status: "In Service" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">Asset Management</h1>
            <p className="text-slate-500 font-medium">Fleet inventory and vehicle status</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2">
            <Lucide.PlusSquare size={16} className="text-emerald-400" /> Register Asset
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div key={asset.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-100 rounded-2xl text-slate-600">
                  <Lucide.Truck size={24} />
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                  asset.status === 'In Service' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {asset.status}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900">{asset.id}</h3>
              <p className="text-sm text-slate-500 font-medium">{asset.year} {asset.make} {asset.type}</p>
              <div className="mt-4 pt-4 border-t border-slate-50 flex gap-2">
                <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-slate-900">View Logs</button>
                <button className="text-[10px] font-bold uppercase text-slate-400 hover:text-slate-900">Edit Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
