"use client";
import * as Lucide from 'lucide-react';

export default function AssetsPage() {
  const assets = [
    { id: "TK-101", type: "Semi-Truck", make: "Peterbilt", mileage: 45000, nextService: 50000, status: "In Service" },
    { id: "TK-105", type: "Semi-Truck", make: "Kenworth", mileage: 88500, nextService: 89000, status: "Urgent" },
    { id: "TR-502", type: "Flatbed", make: "Utility", mileage: 12000, nextService: 25000, status: "In Service" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">Asset Management</h1>
            <p className="text-slate-500 font-medium">Maintenance tracking for Midland Fleet</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2">
            <Lucide.PlusSquare size={16} className="text-emerald-400" /> Register Asset
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((asset) => {
            const milesRemaining = asset.nextService - asset.mileage;
            const needsService = milesRemaining < 1000;

            return (
              <div key={asset.id} className={`bg-white p-6 rounded-3xl border ${needsService ? 'border-amber-400' : 'border-slate-200'} shadow-sm relative overflow-hidden`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl ${needsService ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-600'}`}>
                    <Lucide.Truck size={24} />
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                    asset.status === 'In Service' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {asset.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-slate-900">{asset.id}</h3>
                <p className="text-sm text-slate-500 font-medium mb-4">{asset.make} {asset.type}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400">
                    <span>Current Mileage</span>
                    <span>Next Service</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${needsService ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                      style={{ width: `${(asset.mileage / asset.nextService) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between font-mono text-xs font-bold text-slate-700">
                    <span>{asset.mileage.toLocaleString()} mi</span>
                    <span>{asset.nextService.toLocaleString()} mi</span>
                  </div>
                </div>

                {needsService && (
                  <div className="mt-4 flex items-center gap-2 text-amber-600">
                    <Lucide.Wrench size={14} />
                    <span className="text-[10px] font-black uppercase">Service Due in {milesRemaining} mi</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}