"use client";
import { useState } from 'react';
import { FileSignature, User, IdCard, MapPin, CheckCircle } from 'lucide-react';

export default function DriverApplication() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
        <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full mb-4">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 uppercase">Application Submitted</h2>
        <p className="text-slate-500 mt-2 max-w-sm">
          Thank you for applying to Black Drop Trucking. Our compliance team will review your DQ file shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-emerald-600 font-bold text-sm underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block p-3 bg-slate-900 text-emerald-400 rounded-2xl mb-4">
            <FileSignature size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Driver Application</h1>
          <p className="text-slate-500 font-medium italic">Join the Black Drop Trucking Fleet</p>
        </header>

        <form 
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="space-y-6"
        >
          {/* Section: Personal Info */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <User size={16} className="text-emerald-500" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Legal Name</label>
                <input type="text" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-emerald-500 outline-none transition-all" placeholder="Enter name" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <input type="email" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-emerald-500 outline-none transition-all" placeholder="name@example.com" />
              </div>
            </div>
          </div>

          {/* Section: Licensing */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <IdCard size={16} className="text-emerald-500" /> CDL Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">CDL Number</label>
                <input type="text" required className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-emerald-500 outline-none transition-all" placeholder="State + Number" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">License State</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-emerald-500 outline-none transition-all">
                  <option>Texas</option>
                  <option>New Mexico</option>
                  <option>Oklahoma</option>
                </select>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-900 text-emerald-400 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 shadow-xl transition-all"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}