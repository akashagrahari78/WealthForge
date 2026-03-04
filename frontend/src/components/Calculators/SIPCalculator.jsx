import React, { useState, useMemo } from "react";

const SIPCalculator = () => {
    const [monthly, setMonthly] = useState(5000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);

    const result = useMemo(() => {
        const n = years * 12;
        const r = rate / 100 / 12;
        const invested = monthly * n;
        const fv = monthly * (((1 + r) ** n - 1) / r) * (1 + r);
        const wealth = Math.round(fv);
        const gains = wealth - invested;
        return { invested, wealth, gains };
    }, [monthly, rate, years]);

    const investedPct = ((result.invested / result.wealth) * 100).toFixed(1);

    return (
        <div className="space-y-6">
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Monthly Investment</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                        ₹{monthly.toLocaleString("en-IN")}
                    </span>
                </div>
                <input type="range" min="500" max="100000" step="500" value={monthly}
                    onChange={(e) => setMonthly(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹500</span><span>₹1,00,000</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Expected Return Rate (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{rate}%</span>
                </div>
                <input type="range" min="1" max="30" step="0.5" value={rate}
                    onChange={(e) => setRate(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>30%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Time Period</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{years} Yrs</span>
                </div>
                <input type="range" min="1" max="40" step="1" value={years}
                    onChange={(e) => setYears(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 Yr</span><span>40 Yrs</span></div>
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100">
                <div className="w-full h-2 rounded-full bg-blue-100 overflow-hidden mb-4">
                    <div className="h-full rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${investedPct}%` }} />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Invested</p>
                        <p className="text-base font-bold text-gray-900">₹{result.invested.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Est. Returns</p>
                        <p className="text-base font-bold text-blue-600">₹{result.gains.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Value</p>
                        <p className="text-lg font-bold text-gray-900">₹{result.wealth.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIPCalculator;
