import { Wrench, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export default function Maintenance() {
  const repairs = [
    { id: 'RO-4421', unit: 'TK-101', service: 'Oil Change & Filter', status: 'Completed', tech: 'M. Rodriguez', date: '2026-02-01' },
    { id: 'RO-4425', unit: 'TR-502', service: 'Brake Adjustment', status: 'In Progress', tech: 'J. Smith', date: '2026-02-04' },
    { id: 'RO-4429', unit: 'TK-105', service: 'Annual DOT Inspection', status: 'Scheduled', tech: 'Pending', date: '2026-02-10' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Black Drop Maintenance</h1>
          <p className="text-slate-500 font-medium italic">Repair Orders & Fleet Readiness Logs</p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Wrench size={20}/></div>
            <div><p className="text-[10px] font-bold text-slate-400 uppercase">Open ROs</p><p className="text-xl font-black text-slate-900">12</p></div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 rounded-lg text-amber-600"><Clock size={20}/></div>
            <div><p className="text-[10px] font-bold text-slate-400 uppercase">Overdue PM</p><p className="text-xl font-black text-slate-900">3</p></div>
          </div>
        </div>

        {/* Maintenance Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-700 text-sm">Recent Service Activity</h3>
            <button className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-800 transition-colors">+ New Repair Order</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase text-slate-400 font-bold border-b">
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Unit</th>
                <th className="px-6 py-3">Service Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {repairs.map((ro) => (
                <tr key={ro.id} className="text-sm">
                  <td className="px-6 py-4 font-mono font-bold text-blue-600">{ro.id}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">{ro.unit}</td>
                  <td className="px-6 py-4 text-slate-600">{ro.service}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      ro.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                    }`}>{ro.status}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{ro.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}