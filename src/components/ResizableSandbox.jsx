import React, { useState } from 'react';
import { Panel, Group, Separator } from 'react-resizable-panels';
import { Code2, Play, Columns, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';

const ResizableSandbox = ({ code, Component }) => {
  const [viewMode, setViewMode] = useState('split'); // 'code', 'preview', 'split'

  if (!code && !Component) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col h-[600px] transition-colors">
      {/* Toolbar */}
      <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          </div>
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center">
            <span className="mr-2">⚡</span> Interactive Sandbox
          </span>
        </div>
        
        <div className="flex items-center bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <button 
            onClick={() => setViewMode('code')}
            className={`p-2 rounded-lg transition-all ${viewMode === 'code' ? 'bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/20' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
            title="Code Only"
          >
            <Code2 size={16} />
          </button>
          <button 
            onClick={() => setViewMode('split')}
            className={`p-2 rounded-lg transition-all ${viewMode === 'split' ? 'bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/20' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
            title="Split View"
          >
            <Columns size={16} />
          </button>
          <button 
            onClick={() => setViewMode('preview')}
            className={`p-2 rounded-lg transition-all ${viewMode === 'preview' ? 'bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/20' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
            title="Preview Only"
          >
            <Play size={16} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 relative">
        <Group orientation="horizontal">
          {(viewMode === 'code' || viewMode === 'split') && (
            <>
              <Panel defaultSize={viewMode === 'code' ? "100%" : "50%"} minSize={20}>
                <div className="h-full bg-slate-900 p-6 overflow-auto scrollbar-hide relative group">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button 
                      onClick={() => navigator.clipboard.writeText(code)}
                      className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-700 hover:text-white transition-all"
                     >
                       Copy
                     </button>
                  </div>
                  <pre className="text-blue-300 font-mono text-[13px] leading-relaxed">
                    <code>{code}</code>
                  </pre>
                </div>
              </Panel>
              {viewMode === 'split' && <Separator className="w-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors relative cursor-col-resize">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-1">
                  <div className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <div className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <div className="w-0.5 h-0.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                </div>
              </Separator>}
            </>
          )}

          {(viewMode === 'preview' || viewMode === 'split') && (
            <Panel defaultSize={viewMode === 'preview' ? "100%" : "50%"} minSize={20}>
              <div className="h-full bg-slate-50 dark:bg-slate-800/30 p-8 overflow-auto flex items-center justify-center">
                <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200 dark:shadow-black/20 border border-slate-100 dark:border-slate-800">
                  {Component ? <Component /> : <div className="text-slate-400 text-sm text-center italic">No preview available</div>}
                </div>
              </div>
            </Panel>
          )}
        </Group>
      </div>

      {/* Footer / Status Bar */}
      <div className="bg-white dark:bg-slate-900 px-6 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {viewMode === 'split' ? 'Split View Mode' : viewMode === 'code' ? 'Editor Only' : 'Preview Only'}
        </span>
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-[10px] font-bold text-green-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse" />
            Live Preview Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResizableSandbox;
