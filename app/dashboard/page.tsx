"use client";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-black text-slate-900 uppercase italic underline decoration-emerald-500">
        Command Center
      </h1>
      <p className="text-slate-500 font-medium">System Reset Successful | Midland, TX</p>
      <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
        <p className="text-emerald-700 font-bold">The build is now clean. Send this to Vercel to go live.</p>
      </div>
    </div>
  );
}