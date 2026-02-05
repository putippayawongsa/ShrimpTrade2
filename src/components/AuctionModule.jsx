import React, { useState, useEffect } from 'react';
import { Package, Award, Clock, Zap } from 'lucide-react';
import { AUCTION_ITEM } from '../data';

const AuctionModule = () => {
  const [currentPrice, setCurrentPrice] = useState(AUCTION_ITEM.currentBid);
  const [timeLeft, setTimeLeft] = useState(AUCTION_ITEM.timer);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const placeBid = (amount) => {
    setCurrentPrice(prev => prev + amount);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        {/* Live Stream / Visualizer */}
        <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="bg-black/50 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-md uppercase tracking-widest">Live Auction</span>
          </div>
          <img src="https://images.unsplash.com/photo-1514944288352-fffbb99f0391?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-900 via-transparent">
            <h2 className="text-3xl font-bold text-white mb-2">{AUCTION_ITEM.name}</h2>
            <div className="flex space-x-4">
              <span className="text-blue-300 flex items-center space-x-1"><Package size={16}/> <span>Lot: {AUCTION_ITEM.lotSize}</span></span>
              <span className="text-blue-300 flex items-center space-x-1"><Award size={16}/> <span>Origin: Ranong</span></span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-xl">
            <p className="text-[10px] font-bold text-green-700 uppercase">Survival Rate</p>
            <p className="text-xl font-bold text-green-900">{AUCTION_ITEM.labResult.survival}</p>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-xl">
            <p className="text-[10px] font-bold text-blue-700 uppercase">Salinity</p>
            <p className="text-xl font-bold text-blue-900">{AUCTION_ITEM.labResult.salinity}</p>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-xl">
            <p className="text-[10px] font-bold text-yellow-700 uppercase">Antibiotic</p>
            <p className="text-xl font-bold text-yellow-900">None</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-500">
              <Clock size={18} />
              <span className="font-mono text-xl font-bold text-slate-800">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-tight">Starting Price</p>
              <p className="text-sm font-medium text-slate-600">฿{AUCTION_ITEM.startPrice}/kg</p>
            </div>
          </div>

          <div className="text-center py-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Current Highest Bid</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-5xl font-black text-slate-900">฿{currentPrice}</span>
              <span className="text-xl text-slate-400 font-bold">/kg</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[10, 50, 100].map(val => (
              <button
                key={val}
                onClick={() => placeBid(val)}
                className="py-3 rounded-xl border-2 border-blue-100 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all transform active:scale-95"
              >
                +{val}
              </button>
            ))}
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all">
            Place Your Bid
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center space-x-2">
            <Zap size={18} className="text-yellow-500" />
            <span>Bidding History</span>
          </h3>
          <div className="space-y-4">
            {AUCTION_ITEM.history.map((bid, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' : 'bg-gray-100 text-gray-600'}`}>
                    {i === 0 ? <Award size={14} /> : i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">{bid.bidder}</p>
                    <p className="text-[10px] text-gray-400">{bid.time}</p>
                  </div>
                </div>
                <p className="font-mono font-bold text-slate-900">฿{bid.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionModule;
