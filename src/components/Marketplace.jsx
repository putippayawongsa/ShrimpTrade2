import React, { useState } from 'react';
import { Search, Star, MessageCircle, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../data';

const Marketplace = ({ currency, setCurrency }) => {
  const [filter, setFilter] = useState('All');
  const [quantity] = useState(1);

  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.type === filter);

  // Bulk Pricing Logic
  const getPrice = (base) => {
    let multiplier = 1;
    if (quantity >= 100) multiplier = 0.85; // 15% discount
    else if (quantity >= 50) multiplier = 0.90; // 10% discount
    else if (quantity >= 10) multiplier = 0.95; // 5% discount

    let price = base * multiplier;
    return currency === 'USD' ? (price / 35).toFixed(2) : price.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Search premium shrimp..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl outline-none"
          >
            <option value="All">All Types</option>
            <option value="White Shrimp">White Shrimp</option>
            <option value="Black Tiger">Black Tiger</option>
            <option value="River Prawn">River Prawn</option>
          </select>
          <button
            onClick={() => setCurrency(currency === 'THB' ? 'USD' : 'THB')}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium"
          >
            {currency}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(product => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-48">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 flex gap-1">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center space-x-1 shadow-sm">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold">{product.rating}</span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <div>
                <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.origin}</p>
              </div>

              <div className="flex items-center justify-between py-2 border-y border-gray-50">
                <div className="text-xs text-gray-500">
                  <p>Farm: <span className="text-slate-700 font-medium">{product.farm}</span></p>
                  <p>Size: {product.size}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 line-through">{currency === 'USD' ? '$' : '฿'}{currency === 'USD' ? (product.price / 35).toFixed(2) : product.price}</p>
                  <p className="text-xl font-bold text-blue-600">
                    {currency === 'USD' ? '$' : '฿'}{getPrice(product.price)}
                    <span className="text-xs font-normal text-gray-400 ml-1">/kg</span>
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-medium text-sm hover:bg-slate-800 transition-colors">
                  Add to Cart
                </button>
                <button className="px-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <MessageCircle size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-xl flex items-start space-x-3">
        <TrendingUp className="text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900 text-sm">Bulk Pricing Active</h4>
          <p className="text-xs text-blue-700 mt-0.5">Buy more than 100kg to unlock 15% VIP discount. Adjust quantity in checkout.</p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
