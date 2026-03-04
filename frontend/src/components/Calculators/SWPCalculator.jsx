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
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Total Investment</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                        ₹{corpus.toLocaleString("en-IN")}
                    </span>
                </div>
                <input type="range" min="100000" max="10000000" step="50000" value={corpus}
                    onChange={(e) => setCorpus(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹1L</span><span>₹1Cr</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Monthly Withdrawal</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                        ₹{withdrawal.toLocaleString("en-IN")}
                    </span>
                </div>
                <input type="range" min="1000" max="100000" step="1000" value={withdrawal}
                    onChange={(e) => setWithdrawal(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹1,000</span><span>₹1,00,000</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Expected Return Rate (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{rate}%</span>
                </div>
                <input type="range" min="1" max="20" step="0.5" value={rate}
                    onChange={(e) => setRate(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>20%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Time Period</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{years} Yrs</span>
                </div>
                <input type="range" min="1" max="30" step="1" value={years}
                    onChange={(e) => setYears(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 Yr</span><span>30 Yrs</span></div>
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100">
                <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Investment</p>
                        <p className="text-base font-bold text-gray-900">₹{corpus.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Withdrawn</p>
                        <p className="text-base font-bold text-blue-600">₹{result.totalWithdrawn.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Final Value</p>
                        <p className="text-lg font-bold text-gray-900">₹{result.finalValue.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SWPCalculator;
