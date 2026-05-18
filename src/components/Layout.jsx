import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { curriculum } from '../chapters/chapterData';

const Layout = () => {
  const completedChapters = useSelector((state) => state.progress.completedChapters);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Load preference from localStorage or default to system preference
    const savedTheme = localStorage.getItem('react_mastery_theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const totalChapters = curriculum.reduce((acc, phase) => acc + phase.chapters.length, 0);
  const progressPercentage = (completedChapters.length / totalChapters) * 100;

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('react_mastery_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('react_mastery_theme', 'light');
    }
  }, [isDarkMode]);

  const SidebarContent = () => (
    <>
      <div className="p-8 sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-20 border-b border-slate-50 dark:border-slate-800">
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-black text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">ReactMaster</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">2026 Edition</p>
            </div>
          </Link>
        </div>
        
        <nav className="p-6 space-y-8">
          <div>
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                location.pathname === '/' 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md' 
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className={`mr-3 transition-transform duration-300 ${location.pathname === '/' ? 'scale-110' : 'group-hover:scale-110'}`}>🏠</span>
              <span className="font-semibold text-sm">Dashboard</span>
            </Link>
          </div>

          {curriculum.map((phase) => (
            <div key={phase.phase} className="space-y-2">
              <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Phase {phase.phase}
                </h3>
                <span className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full">
                  {phase.chapters.filter(c => completedChapters.includes(c.id)).length}/{phase.chapters.length}
                </span>
              </div>
              <ul className="space-y-1">
                {phase.chapters.map((chapter) => {
                  const isActive = location.pathname.includes(chapter.id);
                  const isCompleted = completedChapters.includes(chapter.id);
                  return (
                    <li key={chapter.id}>
                      <Link 
                        to={`/chapters/${chapter.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center p-3 rounded-xl text-[13px] transition-all duration-200 ${
                          isActive 
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold shadow-sm ring-1 ring-blue-100 dark:ring-blue-900/50' 
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                          isActive ? 'bg-blue-600 scale-125' : isCompleted ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-700 group-hover:bg-slate-400'
                        }`} />
                        <span className="flex-1 truncate">{chapter.title.split('. ')[1] || chapter.title}</span>
                        {isCompleted && !isActive && (
                          <span className="text-green-500 font-bold text-[10px] bg-green-50 dark:bg-green-900/10 px-1.5 py-0.5 rounded-md">
                            Done
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
    </>
  );

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-[#fafafa] text-slate-900'} font-sans selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-700 dark:selection:text-blue-200 transition-colors duration-300`}>
      {/* Desktop Sidebar */}
      <aside className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 sticky top-0 h-screen overflow-y-auto hidden lg:block scrollbar-hide">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed top-0 left-0 bottom-0 w-80 bg-white dark:bg-slate-900 z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center px-6 lg:px-12 sticky top-0 z-30">
          <div className="flex-1 flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 mr-4 bg-slate-50 dark:bg-slate-800 rounded-lg lg:hidden text-slate-600 dark:text-slate-400"
            >
              ☰
            </button>
            <div className="hidden lg:block">
              {location.pathname !== '/' && (
                <nav className="text-sm text-slate-400 font-medium">
                    <Link to="/" className="hover:text-slate-600 dark:hover:text-white">Home</Link>
                    <span className="mx-2 text-slate-300 dark:text-slate-700">/</span>
                    <span className="text-slate-900 dark:text-white uppercase tracking-wider text-[11px] font-bold">Learning Track</span>
                </nav>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Overall Mastery</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 lg:w-48 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-xs font-black text-slate-700 dark:text-slate-300">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-12 max-w-5xl mx-auto w-full">
          <Outlet />
        </div>

        <footer className="py-12 px-8 border-t border-slate-200 dark:border-slate-800 mt-auto bg-white dark:bg-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-5xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-slate-900 dark:bg-white rounded-md flex items-center justify-center text-[10px] text-white dark:text-slate-900 font-bold">R</div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">ReactMaster 2026</span>
            </div>
            <div className="flex space-x-8 text-xs font-medium text-slate-400">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Roadmap</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resources</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Community</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            </div>
            <p className="text-[11px] text-slate-400 font-medium italic">Crafted for Excellence.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
