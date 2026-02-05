"use client";
import * as Lucide from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">System Settings</h1>
          <p className="text-slate-500 font-medium">Manage company profile and user access</p>
        </header>

        <div className="space-y-6">
          {/* Company Profile Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-100 rounded-2xl text-slate-400">
                <Lucide.Building2 size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Company Identity</p>
                <p className="text-xs text-slate-500 italic">Black Drop Trucking | Midland, TX</p>
              </div>
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-600 transition-colors">
              Update Logo
            </button>
          </div>

          {/* Admin Info Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-100 rounded-2xl text-slate-400">
                <Lucide.UserCog size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Administrator</p>
                <p className="text-xs text-slate-500 italic font-mono uppercase">Rafael Ayala</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase">
              Active Session
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}