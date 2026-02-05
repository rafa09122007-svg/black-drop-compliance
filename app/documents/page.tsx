"use client";
import { useState } from 'react';
import { UploadCloud, FileCheck, Loader2, AlertCircle, Search } from 'lucide-react';

export default function DocumentDropzone() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleUpload = () => {
    setIsProcessing(true);
    // Simulating AI OCR analysis
    setTimeout(() => {
      setIsProcessing(false);
      setUploadComplete(true);
    }, 3000);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">AI Document Processor</h1>
          <p className="text-slate-500 font-medium">Upload check stubs, titles, or medical cards for auto-classification</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <div className="lg:col-span-2">
            <div 
              className={`border-4 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center transition-all ${
                uploadComplete ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white hover:border-emerald-400'
              }`}
            >
              {!isProcessing && !uploadComplete && (
                <>
                  <div className="p-4 bg-emerald-100 rounded-full text-emerald-600 mb-4">
                    <UploadCloud size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Drop files here</h3>
                  <p className="text-slate-500 mb-6 text-center">AI will automatically detect document type and expiration dates</p>
                  <button 
                    onClick={handleUpload}
                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Select Documents
                  </button>
                </>
              )}

              {isProcessing && (
                <div className="text-center">
                  <Loader2 size={48} className="animate-spin text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800">AI Scanning...</h3>
                  <p className="text-slate-500">Extracting fields and validating DOT numbers</p>
                </div>
              )}

              {uploadComplete && (
                <div className="text-center">
                  <FileCheck size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800">Analysis Complete</h3>
                  <p className="text-emerald-600 font-medium mb-6">Found: 1 Medical Long Form, 1 Vehicle Title</p>
                  <button 
                    onClick={() => setUploadComplete(false)}
                    className="text-slate-500 font-bold text-sm underline"
                  >
                    Upload More
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Verification Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Search size={16} className="text-emerald-500" /> Human Review Required
              </h4>
              <div className="space-y-4">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <p className="text-[10px] font-black text-amber-600 uppercase">Low Confidence (82%)</p>
                  <p className="text-xs font-bold text-slate-700 mt-1">Check Stub: #8829</p>
                  <p className="text-[10px] text-slate-500">Amount match: $1,240.50</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Verified</p>
                  <p className="text-xs font-bold text-slate-700 mt-1">Vehicle Title: TK-101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}