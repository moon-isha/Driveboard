import { Users, LayoutDashboard, FileText, Car } from 'lucide-react';

interface LeftNavProps {
  currentView: 'leads' | 'dashboard' | 'reports';
  onNavigate: (view: 'leads' | 'dashboard' | 'reports') => void;
}

export function LeftNav({ currentView, onNavigate }: LeftNavProps) {
  const navItems = [
    { id: 'leads' as const, label: 'Leads', icon: Users },
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'reports' as const, label: 'Reports', icon: FileText },
  ];

  return (
    <div className="w-[240px] bg-black text-white flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-[#0B5FFF] flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl text-white">HSR Motor</h1>
            <p className="text-xs text-gray-400">Drive Your Dreams</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                isActive
                  ? 'bg-[#0B5FFF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}