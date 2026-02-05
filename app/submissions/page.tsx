"use client";
import { FileText, CheckCircle, Eye, Clock, ArrowRight } from 'lucide-react';

export default function FormSubmissions() {
  const submissions = [
    { id: 'SUB-9921', driver: 'Rafael Ayala', form: 'Pre-Trip Inspection', date: '2026-02-04', status: 'Approved' },
    { id: 'SUB-9925', driver: 'John Smith', form: 'Fuel Receipt Log', date: '2026-02-04', status: 'Pending Review' },
    { id: 'SUB-9930', driver: 'Sarah Connor', form: 'Safety Equipment Check', date: '2026-02-03', status: 'Flagged' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Submissions Inbox</h1>
            <p className="text-slate-500 font-medium">Review and approve digital paperwork from the fleet</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black uppercase flex items-center gap-1">
              <Clock size={12} /> 1 Pending Review
            </span>
          </div>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-[10px] uppercase text-slate-400 font-bold tracking-[0.2em]">
                <th className="px-8 py-5">Submission ID</th>
                <th className="px-8 py-5">Driver</th>
                <th className="px-8 py-5">Form Type</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">View Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50 transition-all group">
                  <td className="px-8 py-5 font-mono text-xs font-bold text-blue-600">{sub.id}</td>
                  <td className="px-8 py-5">
                    <span className="font-bold text-slate-800">{sub.driver}</span>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-600 font-medium">{sub.form}</td>
                  <td className="px-8 py-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                      sub.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 
                      sub.status === 'Flagged' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:bg-slate-900 group-hover:text-emerald-400 transition-all">
                      <ArrowRight size={18} />
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