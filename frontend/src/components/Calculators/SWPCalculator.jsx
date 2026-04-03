import React, { useState, useMemo } from "react";

const SWPCalculator = () => {
    const [corpus, setCorpus] = useState(1000000);
    const [withdrawal, setWithdrawal] = useState(10000);
    const [rate, setRate] = useState(8);
    const [years, setYears] = useState(10);

    const result = useMemo(() => {
        const r = rate / 100 / 12;
        const n = years * 12;
        const totalWithdrawn = withdrawal * n;
        const remaining = corpus * (1 + r) ** n - withdrawal * (((1 + r) ** n - 1) / r);
        const finalValue = Math.max(0, Math.round(remaining));
        return { totalWithdrawn, finalValue };
    }, [corpus, withdrawal, rate, years]);

    return (
        <div className="space-y-6">
            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Total Investment (₹)</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                        type="number"
                        min="0"
                        value={corpus}
                        onChange={(e) => setCorpus(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-8 pr-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                </div>
            </div>

            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Monthly Withdrawal (₹)</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                        type="number"
                        min="0"
                        value={withdrawal}
                        onChange={(e) => setWithdrawal(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-8 pr-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                </div>
            </div>

            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Expected Return Rate (p.a. %)</label>
                <div className="relative">
                    <input
                        type="number"
                        min="0" max="100" step="0.1"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
            </div>

            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Time Period (Years)</label>
                <div className="relative">
                    <input
                        type="number"
                        min="1"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Yrs</span>
                </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Total Investment</p>
                        <p className="text-xl font-bold text-gray-900">₹{Number(corpus).toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Total Withdrawn</p>
                        <p className="text-xl font-bold text-gray-700">₹{result.totalWithdrawn.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Final Value</p>
                        <p className="text-2xl font-bold text-gray-900">₹{result.finalValue.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SWPCalculator;
