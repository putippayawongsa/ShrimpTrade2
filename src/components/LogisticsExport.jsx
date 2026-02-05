import React, { useState } from 'react';
import { Truck, Package, Award, Globe, CheckCircle, ArrowRightLeft } from 'lucide-react';

const LogisticsExport = () => {
  const [activeStep] = useState(2);
  const steps = ["Order Confirmed", "Processing & Cooling", "In Transit", "Customs Clearing", "Delivered"];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Shipments", value: "12", icon: Truck, color: "blue" },
          { label: "Total Export Volume", value: "4.8 Tons", icon: Package, color: "indigo" },
          { label: "Pending Documents", value: "3", icon: Award, color: "orange" },
        ].map(card => (
          <div key={card.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4">
            <div className={`p-3 rounded-xl bg-${card.color}-50 text-${card.color}-600`}>
              <card.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{card.label}</p>
              <p className="text-2xl font-black text-slate-800">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-slate-50/50">
          <div>
            <h3 className="font-black text-slate-800 text-lg">Live Shipment Tracking</h3>
            <p className="text-xs text-gray-500 font-medium">Tracking ID: SHP-2024-00129-GLOBAL</p>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 text-sm font-bold bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
            <Globe size={16} />
            <span>Map View</span>
          </button>
        </div>

        <div className="p-8">
          <div className="relative flex justify-between">
            {/* Connection Line */}
            <div className="absolute top-5 left-0 w-full h-1 bg-gray-100 z-0">
              <div
                className="h-full bg-blue-600 transition-all duration-1000"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all ${
                  i <= activeStep ? 'bg-blue-600 border-white text-white shadow-lg' : 'bg-white border-gray-100 text-gray-300'
                }`}>
                  {i < activeStep ? <CheckCircle size={20} /> : <span className="text-xs font-bold">{i + 1}</span>}
                </div>
                <p className={`mt-3 text-[10px] md:text-xs font-bold text-center max-w-[80px] ${
                  i <= activeStep ? 'text-slate-800' : 'text-gray-400'
                }`}>{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 p-6 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=100" className="rounded-lg w-12 h-12 object-cover" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Frozen Black Tiger Prawns</p>
                <p className="text-xs text-gray-500">Destination: Tokyo, Japan (NRT)</p>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Next Milestone</p>
                <p className="text-sm font-bold text-slate-800">Estimated Clearance in 4h</p>
              </div>
              <button className="bg-slate-900 text-white p-3 rounded-xl">
                <ArrowRightLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsExport;
