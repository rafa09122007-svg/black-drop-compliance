"use client";
import { User, Mail, Briefcase, GraduationCap, MapPin, Camera } from 'lucide-react';

export default function AdminProfile() {
  const user = {
    name: "Rafael Ayala",
    role: "Administrator / Owner",
    email: "rafael.ayala@blackdroptrucking.com",
    company: "Black Drop Trucking",
    location: "Midland, TX",
    education: "Midland College"
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Admin Settings</h1>
          <p className="text-slate-500 font-medium">Manage your personal credentials and system access</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Avatar Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-32 h-32 bg-slate-900 rounded-full flex items-center justify-center text-emerald-400 text-4xl font-black mb-4 border-4 border-emerald-500/20 group-hover:border-emerald-500 transition-all">
                RA
              </div>
              <button className="absolute bottom-4 right-0 p-2 bg-emerald-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={16} />
              </button>
            </div>
            <h2 className="text-xl font-black text-slate-900">{user.name}</h2>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-1">{user.role}</p>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8 border-b pb-4">Account Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><Mail size={18} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Email</p>
                    <p className="text-sm font-bold text-slate-800">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><Briefcase size={18} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Organization</p>
                    <p className="text-sm font-bold text-slate-800">{user.company}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><GraduationCap size={18} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Education</p>
                    <p className="text-sm font-bold text-slate-800">{user.education}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-400"><MapPin size={18} /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Primary Region</p>
                    <p className="text-sm font-bold text-slate-800">{user.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
              Save Profile Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}