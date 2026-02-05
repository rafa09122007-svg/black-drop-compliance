"use client";
import * as Lucide from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { id: "R-1004", date: "2026-02-04", type: "DVIR - Pre Trip", status: "Clean", unit: "TK-101" },
    { id: "R-1003", date: "2026-02-03", type: "Maintenance Log", status: "Repair Needed", unit: "TR-502" },
    { id: "R-1002", date: "2026-02-02", type: "Fuel Audit", status: "Verified", unit: "TK-105" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">Compliance Reports</h1>
            <p className="text-slate-500 font-medium">Audit-ready logs and history</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-50">
              <Lucide.Download size={16} /> Export PDF
            </button>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all">
              <Lucide.FilePlus size={16} className="text-emerald-400" /> New Report
            </button>
          </div>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-widest">
                <th className="px-8 py-5">Report ID</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Inspection Type</th>
                <th className="px-8 py-5">Unit</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50">
                  <td className="px-8 py-5 font-bold text-slate-800">{report.id}</td>
                  <td className="px-8 py-5 text-sm text-slate-500">{report.date}</td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-700">{report.type}</td>
                  <td className="px-8 py-5 text-sm font-mono text-slate-500">{report.unit}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      report.status === 'Clean' || report.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>{report.status}</span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="p-2 text-slate-400 hover:text-emerald-500 transition-colors">
                      <Lucide.Eye size={18} />
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