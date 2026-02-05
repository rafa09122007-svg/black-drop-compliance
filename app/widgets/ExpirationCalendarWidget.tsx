"use client";
import { useState, useEffect } from 'react';
import { Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export default function ExpirationCalendarWidget() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/expirations').then(res => res.json()).then(setData);
  }, []);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden">
      <div className="p-4 bg-slate-900 text-white flex items-center gap-2">
        <Calendar size={18} className="text-emerald-400" />
        <h2 className="font-bold">Compliance Risk Monitor</h2>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 text-[11px] uppercase text-slate-500 font-bold border-b">
            <th className="px-4 py-3">Entity</th>
            <th className="px-4 py-3">Requirement</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((item: any) => (
            <tr key={item.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-bold text-slate-800 text-sm">{item.entityName}</td>
              <td className="px-4 py-3 text-sm text-slate-600">{item.category}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                  item.status === 'expired' ? 'bg-red-100 text-red-700' : 
                  item.status === 'due_soon' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {item.status.replace('_', ' ')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}