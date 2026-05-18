import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { curriculum } from '../chapters/chapterData';
import { toggleChapterCompletion } from '../store/progressSlice';

const ChapterPage = () => {
  const { chapterId } = useParams();
  const dispatch = useDispatch();
  const completedChapters = useSelector((state) => state.progress.completedChapters);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  // Flatten curriculum to find the chapter
  const allChapters = curriculum.flatMap(phase => phase.chapters);
  const currentIndex = allChapters.findIndex((c) => c.id === chapterId);
  const chapter = allChapters[currentIndex];
  const nextChapter = allChapters[currentIndex + 1];

  if (!chapter) {
    return <Navigate to="/" />;
  }

  const isCompleted = completedChapters.includes(chapter.id);

  // Function to render content with enhanced markdown support
  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white tracking-tight">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="flex items-start mb-3 text-slate-600 dark:text-slate-400">
            <span className="text-blue-500 mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-sm md:text-base leading-relaxed">{line.replace('- ', '')}</span>
          </li>
        );
      }
      // Simple bold support
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={i} className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            {parts.map((part, index) => index % 2 === 1 ? <strong key={index} className="text-slate-900 dark:text-white font-bold">{part}</strong> : part)}
          </p>
        );
      }
      if (line.trim() === '') return null;
      return <p key={i} className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">{line}</p>;
    });
  };

  const prevChapter = allChapters[currentIndex - 1];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      {/* Chapter Header */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
               <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 dark:border-blue-900/50">
                  Topic {currentIndex + 1}
               </span>
               <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
               <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  {Math.round((completedChapters.length / allChapters.length) * 100)}% Course Completed
               </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
               {chapter.title.split('. ')[1] || chapter.title}
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl">
               {chapter.description}
            </p>
          </div>
          <button 
            onClick={() => dispatch(toggleChapterCompletion(chapter.id))}
            className={`group relative overflow-hidden px-8 py-4 rounded-2xl font-black text-sm transition-all active:scale-95 shadow-xl ${
              isCompleted 
                ? 'bg-green-500 text-white shadow-green-100 dark:shadow-green-900/20' 
                : 'bg-blue-600 text-white shadow-blue-100 dark:shadow-blue-900/20 hover:bg-blue-700'
            }`}
          >
            <span className="relative z-10 flex items-center">
               {isCompleted ? '✓ Mastery Achieved' : 'Complete Topic'}
            </span>
            {!isCompleted && (
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            )}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-sm relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-800/50 rounded-bl-[5rem] -z-10 opacity-50"></div>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {renderContent(chapter.content)}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevChapter ? (
              <Link 
                to={`/chapters/${prevChapter.id}`}
                className="group flex items-center p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] text-slate-600 dark:text-slate-400 hover:border-blue-200 dark:hover:border-blue-900/50 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all shadow-sm"
              >
                <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4 group-hover:-translate-x-1 transition-transform">
                    <span className="font-bold">←</span>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Previous</p>
                    <h4 className="font-bold text-slate-800 dark:text-white truncate max-w-[150px] md:max-w-none">
                      {prevChapter.title.split('. ')[1] || prevChapter.title}
                    </h4>
                </div>
              </Link>
            ) : <div />}

            {nextChapter ? (
              <Link 
                to={`/chapters/${nextChapter.id}`}
                className="group flex items-center justify-between p-6 bg-slate-900 dark:bg-blue-600 rounded-[2rem] text-white hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-xl shadow-slate-200 dark:shadow-blue-900/20"
              >
                <div className="text-left">
                    <p className="text-[10px] font-bold text-slate-400 dark:text-blue-200 uppercase tracking-widest mb-1 text-slate-500 dark:text-blue-300">Next</p>
                    <h4 className="font-bold truncate max-w-[150px] md:max-w-none">
                      {nextChapter.title.split('. ')[1] || nextChapter.title}
                    </h4>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center ml-4 group-hover:translate-x-1 transition-transform">
                    <span className="font-bold">→</span>
                </div>
              </Link>
            ) : (
              <Link 
                to="/"
                className="group flex items-center justify-between p-6 bg-blue-600 rounded-[2rem] text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 dark:shadow-blue-900/40"
              >
                <div className="text-left">
                    <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Finish Line</p>
                    <h4 className="font-bold">Back to Dashboard</h4>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center ml-4 group-hover:scale-110 transition-transform">
                    <span className="font-bold">🏆</span>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar Features */}
        <div className="lg:col-span-4 space-y-8">
          {chapter.exampleCode && (
            <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl sticky top-28">
              <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Example</span>
              </div>
              <div className="p-6 overflow-x-auto scrollbar-hide">
                <pre className="text-blue-300 font-mono text-[13px] leading-relaxed">
                  <code>{chapter.exampleCode}</code>
                </pre>
              </div>
              <div className="p-4 bg-slate-800/50 border-t border-slate-700/50">
                 <button className="w-full py-2 bg-slate-700 text-slate-300 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-600 transition-colors">
                    Copy Code
                 </button>
              </div>
            </div>
          )}

          {chapter.ExampleComponent && (
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-8 shadow-sm transition-colors">
              <h3 className="text-sm font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest flex items-center">
                <span className="mr-2 text-blue-500">⚡</span> Sandbox
              </h3>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                <chapter.ExampleComponent />
              </div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-4 text-center italic">Interact with the component above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
