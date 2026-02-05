import React from 'react';
import { ShoppingBag, Gavel, LineChart, Truck } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:top-0 md:bottom-auto md:border-b md:border-t-0">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16 md:h-20">
        <div className="hidden md:flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl text-slate-800">ShrimpPro<span className="text-blue-600">Global</span></span>
        </div>
        <div className="flex justify-around w-full md:w-auto md:space-x-8">
          {[
            { id: 'market', icon: ShoppingBag, label: 'Market' },
            { id: 'auction', icon: Gavel, label: 'Live Auction' },
            { id: 'ai', icon: LineChart, label: 'AI Insights' },
            { id: 'logistics', icon: Truck, label: 'Logistics' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-3 py-1 rounded-lg transition-colors ${
                activeTab === item.id ? 'text-blue-600 md:bg-blue-50' : 'text-gray-500'
              }`}
            >
              <item.icon size={22} />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
