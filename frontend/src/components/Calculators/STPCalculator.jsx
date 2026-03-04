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
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Total Investment (Source Fund)</label>
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
                    <label className="text-sm font-medium text-gray-700">Monthly Transfer</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                        ₹{transfer.toLocaleString("en-IN")}
                    </span>
                </div>
                <input type="range" min="1000" max="200000" step="1000" value={transfer}
                    onChange={(e) => setTransfer(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹1,000</span><span>₹2,00,000</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Source Fund Return (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{sourceRate}%</span>
                </div>
                <input type="range" min="1" max="15" step="0.5" value={sourceRate}
                    onChange={(e) => setSourceRate(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>15%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Target Fund Return (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{targetRate}%</span>
                </div>
                <input type="range" min="1" max="30" step="0.5" value={targetRate}
                    onChange={(e) => setTargetRate(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1%</span><span>30%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Transfer Period</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{months} Months</span>
                </div>
                <input type="range" min="1" max="60" step="1" value={months}
                    onChange={(e) => setMonths(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 Mo</span><span>60 Mo</span></div>
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Source Fund Balance</p>
                        <p className="text-base font-bold text-gray-900">₹{result.sourceBalance.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Target Fund Value</p>
                        <p className="text-base font-bold text-blue-600">₹{result.targetBalance.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Transferred</p>
                        <p className="text-base font-bold text-gray-900">₹{result.totalTransferred.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Combined Value</p>
                        <p className="text-lg font-bold text-gray-900">₹{result.totalValue.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default STPCalculator;
