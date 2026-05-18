import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { curriculum } from '../chapters/chapterData';

const Home = () => {
  const completedChapters = useSelector((state) => state.progress.completedChapters);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10"></div>
        <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-8 border border-blue-100 dark:border-blue-900/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">New Content for 2026</span>
        </div>
        <h2 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
          Master React <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Without Compromise.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
          An elite 18-phase journey designed to transform you from a beginner into a 
          <span className="text-slate-900 dark:text-slate-200 font-bold"> high-performance production engineer.</span>
        </p>
        <div className="flex justify-center space-x-4">
          <Link to={`/chapters/${curriculum[0].chapters[0].id}`} className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-xl shadow-slate-200 dark:shadow-blue-900/20 hover:-translate-y-1">
            Start Learning
          </Link>
          <a href="#" className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 px-8 py-4 rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            View Syllabus
          </a>
        </div>
      </div>

      {/* Phase Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {curriculum.map((phase) => {
          const completedCount = phase.chapters.filter(c => completedChapters.includes(c.id)).length;
          const isStarted = completedCount > 0;
          const isFullyCompleted = completedCount === phase.chapters.length;

          return (
            <div key={phase.phase} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2.5rem] opacity-0 group-hover:opacity-5 transition-opacity blur-xl"></div>
              <div className="relative bg-white dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-blue-100 dark:hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl transition-all duration-300 ${
                      isFullyCompleted ? 'bg-green-500 text-white shadow-lg shadow-green-100 dark:shadow-green-900/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 dark:group-hover:shadow-blue-900/40'
                    }`}>
                      {phase.phase}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {phase.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                        {phase.chapters.length} Topics • {completedCount} Completed
                      </p>
                    </div>
                  </div>
                  {isFullyCompleted && <span className="text-2xl">🏆</span>}
                </div>

                <div className="grid grid-cols-1 gap-3 mb-8">
                  {phase.chapters.slice(0, 3).map((chapter) => (
                    <Link 
                      key={chapter.id} 
                      to={`/chapters/${chapter.id}`}
                      className="group/item flex items-center p-4 bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl text-[13px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      <span className="w-6 text-slate-300 dark:text-slate-700 group-hover/item:text-blue-300 dark:group-hover/item:text-blue-700 font-mono">0{phase.chapters.indexOf(chapter) + 1}</span>
                      <span className="flex-1 truncate">{chapter.title.split('. ')[1] || chapter.title}</span>
                      {completedChapters.includes(chapter.id) ? (
                        <span className="text-green-500 ml-2 font-bold">✓</span>
                      ) : (
                        <span className="text-slate-300 dark:text-slate-700 group-hover/item:translate-x-1 transition-transform">→</span>
                      )}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800">
                  <Link to={`/chapters/${phase.chapters[0].id}`} className="text-sm font-black text-blue-600 dark:text-blue-400 hover:underline">
                    {isStarted ? 'Continue Phase' : 'Explore Phase'}
                  </Link>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700"></div>
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[8px] font-bold text-slate-400 dark:text-slate-500">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
