import React, { useState, useMemo } from "react";

const SIPCalculator = () => {
    const [monthly, setMonthly] = useState(5000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);

    const result = useMemo(() => {
        // Ensure inputs are valid numbers before calculating
        const m = Number(monthly) || 0;
        const rInput = Number(rate) || 0;
        const y = Number(years) || 0;

        const n = y * 12;
        const r = rInput / 100 / 12;
        const invested = m * n;

        // Handle 0% interest case to avoid division by zero
        let fv = 0;
        if (r === 0) {
            fv = invested;
        } else {
            fv = m * (((1 + r) ** n - 1) / r) * (1 + r);
        }

        const wealth = Math.round(fv);
        const gains = Math.max(0, wealth - invested);
        return { invested, wealth, gains };
    }, [monthly, rate, years]);

    const investedPct = result.wealth > 0 ? ((result.invested / result.wealth) * 100).toFixed(1) : 0;

    return (
        <div className="space-y-6">
            {/* Input Row 1: Monthly Investment */}
            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Monthly Investment (₹)</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                        type="number"
                        min="0"
                        value={monthly}
                        onChange={(e) => setMonthly(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-8 pr-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                </div>
            </div>

            {/* Input Row 2: Expected Return Rate */}
            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Expected Return Rate (p.a. %)</label>
                <div className="relative">
                    <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.1"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
            </div>

            {/* Input Row 3: Time Period */}
            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Time Period (Years)</label>
                <div className="relative">
                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Yrs</span>
                </div>
            </div>

            {/* Results Section */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden mb-6">
                    <div className="h-full rounded-full bg-gray-900 transition-all duration-500" style={{ width: `${investedPct}%` }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Invested Amount</p>
                        <p className="text-xl font-bold text-gray-900">₹{result.invested.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Est. Returns</p>
                        <p className="text-xl font-bold text-gray-700">₹{result.gains.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Total Value</p>
                        <p className="text-2xl font-bold text-gray-900">₹{result.wealth.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIPCalculator;
