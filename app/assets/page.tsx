"use client";
import { useState, useEffect } from 'react';
import * as Lucide from 'lucide-react';
import { supabase } from '@/lib/supabase'; // Using your clean bridge

export default function AssetsPage() {
  const [assets, setAssets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssets();
  }, []);

  async function fetchAssets() {
    const { data, error } = await supabase
      .from('assets')
      .select('*')
      .order('unit_id', { ascending: true });
    
    if (!error && data) {
      setAssets(data);
    }
    setLoading(false);
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">Fleet Inventory</h1>
            <p className="text-slate-500 font-medium">Live Asset Tracking | Black Drop Trucking</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-600 transition-all">
            <Lucide.PlusSquare size={16} /> Register Asset
          </button>
        </header>

        {loading ? (
          <p className="text-slate-400 font-bold animate-pulse">CONNECTING TO DATABASE...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <div key={asset.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-100 rounded-2xl text-slate-600">
                    <Lucide.Truck size={24} />
                  </div>
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-[10px] font-black uppercase">
                    {asset.status}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{asset.unit_id}</h3>
                <p className="text-sm text-slate-500 font-medium">{asset.make}</p>
                <div className="mt-4 pt-4 border-t border-slate-50">
                  <p className="text-[10px] font-black uppercase text-slate-400">Current Mileage</p>
                  <p className="font-mono font-bold text-slate-700">{asset.mileage?.toLocaleString()} MI</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}