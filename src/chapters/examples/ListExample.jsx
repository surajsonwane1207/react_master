import React, { useState } from 'react';

const ListExample = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Master Tailwind', completed: false },
    { id: 3, text: 'Deploy to K8s', completed: false },
  ]);

  const toggle = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="space-y-4">
      <h4 className="font-bold text-slate-800">Dynamic List with Keys</h4>
      <ul className="space-y-2">
        {items.map(item => (
          <li 
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
              item.completed ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'
            }`}
          >
            <span className={item.completed ? 'line-through opacity-50' : ''}>{item.text}</span>
            <span className="text-xs font-bold">{item.completed ? '✓' : '○'}</span>
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-slate-400 italic text-center">Click an item to toggle completion (demonstrates state + keys).</p>
    </div>
  );
};

export default ListExample;
