import { Truck, Hash, Activity, ChevronRight } from 'lucide-react';

export default function AssetManagement() {
  const assets = [
    { id: '1', unit: 'TK-101', type: 'Tractor', vin: '1NXP6DX647201822', status: 'Active', make: 'Peterbilt', model: '579' },
    { id: '2', unit: 'TR-502', type: 'Trailer', vin: '532V128490X11223', status: 'In Shop', make: 'Great Dane', model: 'Champion' },
    { id: '3', unit: 'TK-105', type: 'Tractor', vin: '1NXP6DX647201945', status: 'Active', make: 'Kenworth', model: 'T680' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">ASSET MANAGEMENT</h1>
            <p className="text-slate-500 font-medium italic">Black Drop Trucking Fleet Registry</p>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-emerald-700 transition-shadow shadow-lg shadow-emerald-500/20">
            + Register New Unit
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">Total Units</p>
            <p className="text-2xl font-black text-slate-900">42</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-emerald-500">
            <p className="text-xs font-bold text-slate-400 uppercase">Available</p>
            <p className="text-2xl font-black text-emerald-600">38</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
            <p className="text-xs font-bold text-slate-400 uppercase">In Maintenance</p>
            <p className="text-2xl font-black text-amber-600">4</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-[11px] uppercase text-slate-400 font-bold">
                <th className="px-6 py-4">Unit #</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">VIN</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{asset.unit}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">{asset.make} {asset.model}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{asset.type}</td>
                  <td className="px-6 py-4">
                    <code className="text-[11px] bg-slate-100 px-2 py-1 rounded text-slate-700 font-mono tracking-wider">
                      {asset.vin}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      asset.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-emerald-600 hover:text-emerald-800 font-bold text-xs inline-flex items-center">
                      Manage <ChevronRight size={14} />
                    </button>
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