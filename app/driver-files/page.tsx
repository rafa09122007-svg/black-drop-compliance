import { UserCheck, FileWarning, Calendar, MoreVertical } from 'lucide-react';

export default function DriverFiles() {
  const drivers = [
    { id: '1', name: 'Rafael Ayala', type: 'Owner', status: 'Compliant', expiry: '2026-11-20', missing: 0 },
    { id: '2', name: 'Johnathan Smith', type: 'Company', status: 'Warning', expiry: '2026-03-15', missing: 1 },
    { id: '3', name: 'Sarah Connor', type: 'Contractor', status: 'Critical', expiry: '2026-02-10', missing: 3 },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Driver Qualification Files</h1>
            <p className="text-slate-500 font-medium">Monitoring CDL, Medical, and MVR Compliance</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-slate-50">Export PDF</button>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-500/20">+ Add Driver</button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {drivers.map((driver) => (
            <div key={driver.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-emerald-500 transition-all group">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  driver.status === 'Compliant' ? 'bg-emerald-50 text-emerald-600' : 
                  driver.status === 'Warning' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                }`}>
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{driver.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{driver.type} Driver</p>
                </div>
              </div>

              <div className="flex gap-12 items-center text-center">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Status</p>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                    driver.status === 'Compliant' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>{driver.status}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Next Expiration</p>
                  <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                    <Calendar size={14} className="text-slate-400" />
                    {driver.expiry}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Missing Docs</p>
                  <div className={`text-sm font-black ${driver.missing > 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                    {driver.missing}
                  </div>
                </div>
              </div>

              <button className="p-2 text-slate-300 hover:text-slate-600">
                <MoreVertical size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}