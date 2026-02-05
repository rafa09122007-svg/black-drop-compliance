"use client";
import { useState } from 'react';
import * as Lucide from 'lucide-react';

export default function MobileCheckIn() {
  const [status, setStatus] = useState('offline');

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-sm space-y-8">
        <header className="text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
            <Lucide.Truck className="text-slate-900" size={32} />
          </div>
          <h1 className="text-2xl font-black uppercase italic tracking-tighter">Black Drop Mobile</h1>
          <p className="text-slate-400 text-xs font-bold uppercase mt-1">Driver Portal | Midland, TX</p>
        </header>

        <div className="bg-slate-800 p-8 rounded-[40px] border border-slate-700 shadow-2xl space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Assign Unit</label>
            <input type="text" placeholder="e.g. TK-101" className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-700 focus:border-emerald-500 outline-none font-mono text-emerald-400" />
          </div>

          <button 
            onClick={() => setStatus('online')}
            className={`w-full py-6 rounded-[30px] font-black uppercase tracking-widest transition-all ${
              status === 'online' ? 'bg-emerald-500 text-slate-900 shadow-xl shadow-emerald-500/20' : 'bg-slate-700 text-slate-400'
            }`}
          >
            {status === 'online' ? 'Shift Active' : 'Clock In'}
          </button>
        </div>

        <footer className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          Authorized Access Only — Rafael Ayala
        </footer>
      </div>
    </div>
  );
}