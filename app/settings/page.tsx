import { Settings, MapPin, Building2, Shield, Bell } from 'lucide-react';

export default function CompanySettings() {
  const locations = [
    { id: 1, name: 'Main Terminal', city: 'Midland, TX', type: 'HQ' },
    { id: 2, name: 'East Yard', city: 'Dallas, TX', type: 'Storage' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-900 text-emerald-400 rounded-lg">
              <Settings size={20} />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Control Panel</h1>
          </div>
          <p className="text-slate-500 font-medium italic">Configure Black Drop Trucking System Defaults</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location Management */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-emerald-500" /> Operating Locations
              </h3>
              <button className="text-[10px] font-black uppercase text-emerald-600 hover:underline">Add New</button>
            </div>
            <div className="p-4 space-y-3">
              {locations.map(loc => (
                <div key={loc.id} className="flex justify-between items-center p-3 border rounded-xl border-slate-100 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{loc.name}</p>
                    <p className="text-xs text-slate-500">{loc.city}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 rounded text-slate-400">{loc.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Notifications */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <Bell size={16} className="text-emerald-500" /> Alert Thresholds
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase block mb-4 tracking-widest">Expiration Warnings</label>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Initial Warning</span>
                    <span className="text-sm font-bold text-slate-900">30 Days Out</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Critical Alert</span>
                    <span className="text-sm font-bold text-red-600">15 Days Out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Partners */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden md:col-span-2">
            <div className="p-4 border-b bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                <Shield size={16} className="text-emerald-500" /> Insurance Providers
              </h3>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-100 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-black">LM</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Liberty Mutual</p>
                  <p className="text-xs text-slate-400 italic font-medium truncate">Policy: Auto Liability / Cargo</p>
                </div>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl flex items-center gap-4 opacity-50">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 font-bold">+</div>
                <p className="text-xs font-bold text-slate-400 italic">Add Provider...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}