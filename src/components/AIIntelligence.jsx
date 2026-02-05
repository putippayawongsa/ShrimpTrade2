import React, { useState } from 'react';
import { Zap, LineChart, BarChart3, TrendingUp } from 'lucide-react';

const AIIntelligence = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState(null);

  const runAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setReport({
        trend: "Bullish (Increasing)",
        advice: "Current auction price (฿245) is 12% lower than the projected global average for next week. Recommended to bid up to ฿265.",
        confidence: 94,
        comparison: [
          { name: "Vichai Farm", score: 92, value: "Best Quality" },
          { name: "Siam Seafood", score: 88, value: "Best Price" },
          { name: "Global Trade", score: 85, value: "Fastest Delivery" },
        ]
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-bold shadow-md">
          <Zap size={16} className="mr-2" /> Powered by Gemini 2.5
        </div>
        <h1 className="text-3xl font-black text-slate-900">AI Market Intelligence</h1>
        <p className="text-gray-500">Real-time global data analysis to give you a competitive edge</p>
      </div>

      {!report ? (
        <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto">
            <LineChart className="text-blue-600 w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Market Analysis Tool</h3>
            <p className="text-gray-500 max-w-sm mx-auto">AI will compare 100+ global sources including weather data, production costs, and export demand.</p>
          </div>
          <button
            onClick={runAnalysis}
            disabled={analyzing}
            className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center mx-auto space-x-2 disabled:opacity-50"
          >
            {analyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <BarChart3 size={20} />
                <span>Start AI Analysis</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-lg">Market Advice</h3>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Confidence: {report.confidence}%</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm">{report.advice}</p>
            <div className="p-4 bg-slate-50 rounded-2xl space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase">Current Trend</p>
              <div className="flex items-center text-blue-600 font-black text-xl">
                <TrendingUp size={20} className="mr-2" />
                {report.trend}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6">
            <h3 className="font-bold text-slate-800 text-lg">Product Comparison</h3>
            <div className="space-y-4">
              {report.comparison.map(item => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-blue-600 font-bold">{item.value}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIIntelligence;
