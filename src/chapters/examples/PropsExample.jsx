import React from 'react';

const Card = ({ title, role, color }) => (
  <div className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 ${color === 'blue' ? 'border-blue-100 bg-blue-50' : 'border-purple-100 bg-purple-50'}`}>
    <h5 className="font-bold text-slate-800">{title}</h5>
    <p className="text-xs text-slate-500">{role}</p>
  </div>
);

const PropsExample = () => {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-slate-800">Reusable Components with Props</h4>
      <div className="grid grid-cols-2 gap-4">
        <Card title="Suraj" role="Lead Developer" color="blue" />
        <Card title="Gemini" role="AI Assistant" color="purple" />
      </div>
      <p className="text-[10px] text-slate-400 italic text-center">
        The same 'Card' component is rendered twice with different data passed via props.
      </p>
    </div>
  );
};

export default PropsExample;
