"use client";
import { useState } from 'react';
import { Layout, Plus, GripVertical, Save, Trash2, CheckSquare } from 'lucide-react';

export default function FormTemplates() {
  const [fields, setFields] = useState([
    { id: 1, label: 'Unit Number', type: 'text' },
    { id: 2, label: 'Odometer Reading', type: 'number' },
    { id: 3, label: 'Safety Equipment Check', type: 'checkbox' }
  ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Form Builder</h1>
            <p className="text-slate-500 font-medium italic">Design custom inspection and compliance forms</p>
          </div>
          <button className="bg-slate-900 text-emerald-400 px-6 py-2.5 rounded-xl font-black text-sm hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl">
            <Save size={18} /> Save Template
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Builder Canvas */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm">
              <input 
                type="text" 
                defaultValue="Pre-Trip Inspection Form" 
                className="text-xl font-black text-slate-800 w-full border-b-2 border-emerald-500 pb-2 mb-8 outline-none bg-transparent"
              />
              
              <div className="space-y-4">
                {fields.map((field) => (
                  <div key={field.id} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 group">
                    <GripVertical size={20} className="text-slate-300 cursor-grab" />
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{field.type} Field</p>
                      <input 
                        type="text" 
                        defaultValue={field.label} 
                        className="bg-transparent font-bold text-slate-700 w-full outline-none"
                      />
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-300 hover:text-red-500 transition-all">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setFields([...fields, { id: Date.now(), label: 'New Field', type: 'text' }])}
                className="w-full mt-6 py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <Plus size={18} /> Add Field
              </button>
            </div>
          </div>

          {/* Component Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-2xl">
              <h3 className="font-black text-xs uppercase tracking-widest text-emerald-400 mb-6">Input Types</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: Layout, label: 'Text Input' },
                  { icon: CheckSquare, label: 'Checkbox' },
                  { icon: Plus, label: 'Number Field' }
                ].map((item) => (
                  <button key={item.label} className="flex items-center gap-3 bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition-colors text-left">
                    <item.icon size={16} className="text-emerald-500" />
                    <span className="text-sm font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}