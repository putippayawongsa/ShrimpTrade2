import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import AuctionModule from './components/AuctionModule';
import AIIntelligence from './components/AIIntelligence';
import LogisticsExport from './components/LogisticsExport';

export default function App() {
  const [activeTab, setActiveTab] = useState('market');
  const [currency, setCurrency] = useState('THB');

  return (
    <div className="min-h-screen bg-slate-50 pb-24 md:pb-0 md:pt-20 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Branding */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900">
              {activeTab === 'market' && "Global Market"}
              {activeTab === 'auction' && "Live Auction Room"}
              {activeTab === 'ai' && "AI Intelligence Center"}
              {activeTab === 'logistics' && "Logistics & Exports"}
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base">
              {activeTab === 'market' && "Browse and source the finest shrimp directly from verified farms."}
              {activeTab === 'auction' && "Real-time bidding on premium batches with certified quality."}
              {activeTab === 'ai' && "Data-driven insights to optimize your seafood trading strategy."}
              {activeTab === 'logistics' && "Track your global shipments and manage export documentation."}
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-2 bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600">Market Open: Tokyo, Singapore, Bangkok</span>
          </div>
        </header>

        {/* Dynamic Content */}
        <section className="animate-in fade-in duration-500">
          {activeTab === 'market' && <Marketplace currency={currency} setCurrency={setCurrency} />}
          {activeTab === 'auction' && <AuctionModule />}
          {activeTab === 'ai' && <AIIntelligence />}
          {activeTab === 'logistics' && <LogisticsExport />}
        </section>
      </main>

      {/* Floating Action for Mobile Market */}
      {activeTab === 'market' && (
        <button className="md:hidden fixed bottom-20 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 transform active:scale-90 transition-transform">
          <ShoppingBag size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">2</span>
        </button>
      )}
    </div>
  );
}
