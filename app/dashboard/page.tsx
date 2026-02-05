import ExpirationCalendarWidget from '@/components/widgets/ExpirationCalendarWidget';

export default function Dashboard() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">COMMAND CENTER</h1>
          <p className="text-slate-500 font-medium">Real-time Fleet Compliance Monitoring</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ExpirationCalendarWidget />
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-slate-800 rounded-xl text-white shadow-lg">
              <h3 className="font-bold mb-2">Fleet Readiness</h3>
              <div className="text-4xl font-black text-emerald-400">94%</div>
              <p className="text-xs text-slate-400 mt-2">Active units with valid inspections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}