import { Search, Bell } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

export function TopBar() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads, customers, or cars..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B5FFF] focus:border-transparent bg-gray-50"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <Avatar className="w-9 h-9 bg-[#0B5FFF] ring-2 ring-blue-100">
            <AvatarFallback className="bg-[#0B5FFF] text-white">M</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm text-gray-900">Monisha</div>
            <div className="text-xs text-gray-500">Sales Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}