import React from 'react';

const TailwindExample = () => {
  return (
    <div className="space-y-6">
      <h4 className="font-bold text-slate-800">Utility-First Design Playground</h4>
      
      <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] shadow-xl text-white transform transition-all hover:rotate-1 hover:scale-[1.02]">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-xl">
            🎨
          </div>
          <div>
            <h5 className="font-black tracking-tight">Tailwind Magic</h5>
            <p className="text-xs text-white/70">No custom CSS was used for this card.</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed opacity-90">
          This card uses gradients, backdrop filters, custom rotations, and hover effects—all directly in the class attributes.
        </p>
        <button className="mt-6 w-full py-3 bg-white text-indigo-600 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-slate-50 transition-colors">
          Explore Utilities
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="h-10 bg-red-400 rounded-lg animate-pulse"></div>
        <div className="h-10 bg-blue-400 rounded-lg animate-bounce [animation-duration:2s]"></div>
        <div className="h-10 bg-green-400 rounded-lg animate-pulse [animation-delay:0.5s]"></div>
      </div>
      
      <p className="text-[10px] text-slate-400 italic text-center">
        Tailwind makes building complex, animated UIs incredibly fast.
      </p>
    </div>
  );
};

export default TailwindExample;
