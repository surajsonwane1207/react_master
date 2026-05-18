import React, { useState, useEffect } from 'react';

const EffectExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLoading(true);
    // Simulating an API call
    const timer = setTimeout(() => {
      setData({
        id: Math.floor(Math.random() * 1000),
        time: new Date().toLocaleTimeString(),
        status: 'Success'
      });
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup
  }, [refresh]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-slate-800">Side Effect: Mock Data Fetch</h4>
        <button 
          onClick={() => setRefresh(prev => prev + 1)}
          className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800"
        >
          Refresh Data
        </button>
      </div>

      <div className="min-h-[100px] flex items-center justify-center bg-slate-100 rounded-xl border border-slate-200">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Fetching...</p>
          </div>
        ) : data ? (
          <div className="text-center animate-in fade-in zoom-in-95">
            <p className="text-sm font-bold text-slate-700">Object ID: #{data.id}</p>
            <p className="text-xs text-slate-500">Last Synced: {data.time}</p>
          </div>
        ) : null}
      </div>
      <p className="text-[10px] text-slate-400 italic text-center">
        Demonstrates useEffect fetching data on mount and when the 'refresh' state changes.
      </p>
    </div>
  );
};

export default EffectExample;
