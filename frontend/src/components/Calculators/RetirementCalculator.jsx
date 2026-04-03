import React, { useState, useMemo } from "react";

const RetirementCalculator = () => {
    const [age, setAge] = useState(25);
    const [retireAge, setRetireAge] = useState(60);
    const [monthlyExpense, setMonthlyExpense] = useState(30000);
    const [inflation, setInflation] = useState(6);
    const [preReturnRate, setPreReturnRate] = useState(12);
    const [postReturnRate, setPostReturnRate] = useState(8);
    const [lifeExpectancy, setLifeExpectancy] = useState(85);

    const result = useMemo(() => {
        const currentAge = Number(age);
        const targetRetireAge = Number(retireAge);
        const expenses = Number(monthlyExpense);
        const currentInfl = Number(inflation);
        const preReturn = Number(preReturnRate);
        const postReturn = Number(postReturnRate);
        const lifeExp = Number(lifeExpectancy);

        const yearsToRetire = Math.max(0, targetRetireAge - currentAge);
        const retirementYears = Math.max(0, lifeExp - targetRetireAge);

        const futureMonthlyExpense = expenses * (1 + currentInfl / 100) ** yearsToRetire;
        const futureAnnualExpense = futureMonthlyExpense * 12;

        const realPostReturn = ((1 + postReturn / 100) / (1 + currentInfl / 100)) - 1;
        let corpusNeeded = 0;

        if (retirementYears > 0) {
            if (realPostReturn <= 0) {
                corpusNeeded = futureAnnualExpense * retirementYears;
            } else {
                corpusNeeded = futureAnnualExpense * ((1 - (1 + realPostReturn) ** -retirementYears) / realPostReturn);
            }
        }

        const r = preReturn / 100 / 12;
        const n = yearsToRetire * 12;
        let sipNeeded = 0;

        if (n > 0 && corpusNeeded > 0) {
            if (r === 0) {
                sipNeeded = corpusNeeded / n;
            } else {
                sipNeeded = corpusNeeded / ((((1 + r) ** n - 1) / r) * (1 + r));
            }
        }

        return {
            futureMonthlyExpense: Math.round(futureMonthlyExpense) || 0,
            corpusNeeded: Math.round(corpusNeeded) || 0,
            monthlySIP: Math.max(0, Math.round(sipNeeded)) || 0,
        };
    }, [age, retireAge, monthlyExpense, inflation, preReturnRate, postReturnRate, lifeExpectancy]);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Current Age</label>
                    <div className="relative">
                        <input
                            type="number" min="0" max="100"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Yrs</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Retirement Age</label>
                    <div className="relative">
                        <input
                            type="number" min="0" max="100"
                            value={retireAge}
                            onChange={(e) => setRetireAge(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Yrs</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Life Expectancy</label>
                    <div className="relative">
                        <input
                            type="number" min="0" max="120"
                            value={lifeExpectancy}
                            onChange={(e) => setLifeExpectancy(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Yrs</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Expected Inflation (p.a.)</label>
                    <div className="relative">
                        <input
                            type="number" min="0" max="100" step="0.1"
                            value={inflation}
                            onChange={(e) => setInflation(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                </div>
            </div>

            <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Current Monthly Expenses (₹)</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                        type="number"
                        min="0"
                        value={monthlyExpense}
                        onChange={(e) => setMonthlyExpense(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-8 pr-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Pre-Retire Return (p.a.)</label>
                    <div className="relative">
                        <input
                            type="number" min="0" max="100" step="0.1"
                            value={preReturnRate}
                            onChange={(e) => setPreReturnRate(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Post-Retire Return (p.a.)</label>
                    <div className="relative">
                        <input
                            type="number" min="0" max="100" step="0.1"
                            value={postReturnRate}
                            onChange={(e) => setPostReturnRate(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all font-medium"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Est. Expenses</p>
                        <p className="text-lg font-bold text-gray-900">₹{result.futureMonthlyExpense.toLocaleString("en-IN")}<span className="text-sm font-medium text-gray-500">/mo</span></p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Corpus Needed</p>
                        <p className="text-xl font-bold text-gray-900">₹{result.corpusNeeded.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1.5">Monthly SIP</p>
                        <p className="text-2xl font-bold text-gray-900">₹{result.monthlySIP.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetirementCalculator;
