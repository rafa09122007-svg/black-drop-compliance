"use client";
import { useState } from 'react';
import { PlayCircle, Award, Globe, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function SafetyTraining() {
  const [isSpanish, setIsSpanish] = useState(false);

  const programs = [
    { 
      id: 1, 
      title: isSpanish ? "Seguridad en el Invierno" : "Winter Safety Operations", 
      type: "System", 
      duration: "15 min", 
      hazmat: false 
    },
    { 
      id: 2, 
      title: isSpanish ? "Manejo de Materiales Peligrosos" : "Hazmat Handling 101", 
      type: "Manual", 
      duration: "45 min", 
      hazmat: true 
    }
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">Safety & Training</h1>
            <p className="text-slate-500 font-medium">Compliance education for Black Drop personnel</p>
          </div>
          <button 
            onClick={() => setIsSpanish(!isSpanish)}
            className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all"
          >
            <Globe size={14} className="text-emerald-500" />
            {isSpanish ? "SWITCH TO ENGLISH" : "CAMBIAR A ESPAÑOL"}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:border-emerald-500 transition-all">
              <div className="h-40 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <PlayCircle size={48} className="text-emerald-400 opacity-80 group-hover:scale-110 transition-transform cursor-pointer" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {program.hazmat && (
                    <span className="bg-red-500 text-white text-[9px] font-black px-2 py-1 rounded flex items-center gap-1">
                      <ShieldAlert size={10} /> HAZMAT
                    </span>
                  )}
                  <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-1 rounded uppercase">
                    {program.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{program.title}</h3>
                  <Award size={20} className="text-slate-200 group-hover:text-emerald-500 transition-colors" />
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{program.duration} Video</span>
                  <button className="text-xs font-black text-emerald-600 uppercase tracking-tighter hover:underline">
                    Assign to Driver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Checklist Section */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-4 uppercase italic">Compliance Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Defensive Driving', 'Pre-Trip Inspection', 'Logbook Accuracy', 'HOS Regulations'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span className="text-sm font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Award size={200} />
          </div>
        </div>
      </div>
    </div>
  );
}