import React, { useState, useMemo } from "react";

const STPCalculator = () => {
    const [corpus, setCorpus] = useState(1000000);
    const [transfer, setTransfer] = useState(10000);
    const [sourceRate, setSourceRate] = useState(6);
    const [targetRate, setTargetRate] = useState(12);
    const [months, setMonths] = useState(12);

    const result = useMemo(() => {
        const rSource = sourceRate / 100 / 12;
        const rTarget = targetRate / 100 / 12;
        let sourceBalance = corpus;
        let targetBalance = 0;

        for (let m = 0; m < months; m++) {
            sourceBalance = sourceBalance * (1 + rSource);
            sourceBalance -= transfer;
            if (sourceBalance < 0) sourceBalance = 0;
            targetBalance = (targetBalance + transfer) * (1 + rTarget);
        }

        const totalTransferred = transfer * months;
        return {
            sourceBalance: Math.round(sourceBalance),
            targetBalance: Math.round(targetBalance),
            totalTransferred,
            totalValue: Math.round(sourceBalance + targetBalance),
        };
    }, [corpus, transfer, sourceRate, targetRate, months]);

    return (
        <div className="space-y-6">
            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Total Investment in Source Fund (₹)</label>
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
                <label className="text-sm font-medium text-gray-700 block mb-2">Monthly Transfer Amount (₹)</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                        type="number"
                        min="0"
                        value={transfer}
                        onChange={(e) => setTransfer(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-8 pr-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Source Fund Return (p.a.)</label>
                    <div className="relative">
                        <input
                            type="number"
                            min="0" max="100" step="0.1"
                            value={sourceRate}
                            onChange={(e) => setSourceRate(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Target Fund Return (p.a.)</label>
                    <div className="relative">
                        <input
                            type="number"
                            min="0" max="100" step="0.1"
                            value={targetRate}
                            onChange={(e) => setTargetRate(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                </div>
            </div>

            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Transfer Period (Months)</label>
                <div className="relative">
                    <input
                        type="number"
                        min="1"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Months</span>
                </div>
            </div>

            {/* Results Section */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-8">
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center">
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Source Balance</p>
                        <p className="text-lg font-bold text-gray-900">₹{result.sourceBalance.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Target Value</p>
                        <p className="text-lg font-bold text-gray-700">₹{result.targetBalance.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="col-span-2 h-[1px] bg-gray-200/60 my-2"></div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Total Transferred</p>
                        <p className="text-xl font-bold text-gray-900">₹{result.totalTransferred.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Combined Value</p>
                        <p className="text-2xl font-bold text-gray-900">₹{result.totalValue.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default STPCalculator;
