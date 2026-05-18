import React, { useState } from 'react';

const MenuToggleExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, label: 'User Profile', icon: '👤' },
    { id: 2, label: 'Account Settings', icon: '⚙️' },
    { id: 3, label: 'Learning Progress', icon: '📈' },
    { id: 4, label: 'Logout', icon: '🚪', danger: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all active:scale-95"
          >
            {isOpen ? 'Close Menu' : 'Open Menu'}
            <span className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="absolute right-0 w-56 mt-3 origin-top-right bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-700 rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in zoom-in-95 duration-200 z-50">
            <div className="px-1 py-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`group flex items-center w-full px-4 py-3 text-sm rounded-xl transition-colors ${
                    item.danger 
                      ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <span className="font-semibold">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <p className="text-[10px] text-slate-400 dark:text-slate-500 italic text-center max-w-xs">
        Demonstrates conditional rendering and state-driven UI toggling.
      </p>
    </div>
  );
};

export default MenuToggleExample;
