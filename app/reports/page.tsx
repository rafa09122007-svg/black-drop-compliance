"use client";
import { BarChart3, PieChart, FileDown, TrendingUp, AlertCircle } from 'lucide-react';

export default function Reports() {
  const reportCategories = [
    { title: "Compliance Expirations", description: "Upcoming CDL and Med Card renewals.", status: "Critical" },
    { title: "Fleet Maintenance", description: "Analysis of PM vs. Roadside Repairs.", status: "Stable" },
    { title: "Training Completion", description: "Drivers pending mandatory safety videos.", status: "Action Required" },
    { title: "Asset Utilization", description: "Active units vs. idle equipment.", status: "Stable" },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Reports & Analytics</h1>
            <p className="text-slate-500 font-medium">Performance and compliance auditing for Black Drop Trucking</p>
          </div>
          <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all flex items-center gap-2">
            <FileDown size={16} /> Export Master Audit
          </button>
        </header>

        {/* High-Level KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <TrendingUp className="absolute -right-4 -bottom-4 text-emerald-50 w-24 h-24" />
            <p className="text-xs font-black text-slate-400 uppercase mb-2">Overall Compliance</p>
            <p className="text-3xl font-black text-slate-900 tracking-tighter">97.4%</p>
            <p className="text-xs text-emerald-600 font-bold mt-2">+1.2% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <BarChart3 className="absolute -right-4 -bottom-4 text-blue-50 w-24 h-24" />
            <p className="text-xs font-black text-slate-400 uppercase mb-2">Active Drivers</p>
            <p className="text-3xl font-black text-slate-900 tracking-tighter">42</p>
            <p className="text-xs text-slate-400 font-bold mt-2">3 pending applications</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden border-b-4 border-b-red-500">
            <AlertCircle className="absolute -right-4 -bottom-4 text-red-50 w-24 h-24" />
            <p className="text-xs font-black text-slate-400 uppercase mb-2">Open Issues</p>
            <p className="text-3xl font-black text-red-600 tracking-tighter">5</p>
            <p className="text-xs text-red-400 font-bold mt-2">Requires immediate attention</p>
          </div>
        </div>

        {/* Report Menu */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
          <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm mb-6 border-b pb-4 flex items-center gap-2">
            <PieChart size={18} className="text-emerald-500" /> Available Reports
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reportCategories.map((report) => (
              <div key={report.title} className="p-5 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{report.title}</h4>
                  <span className={`text-[9px] font-black px-2 py-1 rounded-full uppercase ${
                    report.status === 'Stable' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{report.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}