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
        const yearsToRetire = retireAge - age;
        const retirementYears = lifeExpectancy - retireAge;

        const futureMonthlyExpense = monthlyExpense * (1 + inflation / 100) ** yearsToRetire;
        const futureAnnualExpense = futureMonthlyExpense * 12;

        const realPostReturn = ((1 + postReturnRate / 100) / (1 + inflation / 100)) - 1;
        let corpusNeeded;
        if (realPostReturn <= 0) {
            corpusNeeded = futureAnnualExpense * retirementYears;
        } else {
            corpusNeeded = futureAnnualExpense * ((1 - (1 + realPostReturn) ** -retirementYears) / realPostReturn);
        }

        const r = preReturnRate / 100 / 12;
        const n = yearsToRetire * 12;
        const sipNeeded = corpusNeeded / ((((1 + r) ** n - 1) / r) * (1 + r));

        return {
            futureMonthlyExpense: Math.round(futureMonthlyExpense),
            corpusNeeded: Math.round(corpusNeeded),
            monthlySIP: Math.round(sipNeeded),
        };
    }, [age, retireAge, monthlyExpense, inflation, preReturnRate, postReturnRate, lifeExpectancy]);

    return (
        <div className="space-y-5">
            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Current Age</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{age} Yrs</span>
                </div>
                <input type="range" min="18" max="55" step="1" value={age}
                    onChange={(e) => setAge(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>18</span><span>55</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Retirement Age</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{retireAge} Yrs</span>
                </div>
                <input type="range" min={age + 1} max="70" step="1" value={retireAge}
                    onChange={(e) => setRetireAge(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>{age + 1}</span><span>70</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Current Monthly Expenses</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">
                        ₹{monthlyExpense.toLocaleString("en-IN")}
                    </span>
                </div>
                <input type="range" min="5000" max="300000" step="5000" value={monthlyExpense}
                    onChange={(e) => setMonthlyExpense(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹5,000</span><span>₹3,00,000</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Expected Inflation (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{inflation}%</span>
                </div>
                <input type="range" min="2" max="12" step="0.5" value={inflation}
                    onChange={(e) => setInflation(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>2%</span><span>12%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Pre-Retirement Returns (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{preReturnRate}%</span>
                </div>
                <input type="range" min="5" max="20" step="0.5" value={preReturnRate}
                    onChange={(e) => setPreReturnRate(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5%</span><span>20%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Post-Retirement Returns (p.a.)</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{postReturnRate}%</span>
                </div>
                <input type="range" min="3" max="15" step="0.5" value={postReturnRate}
                    onChange={(e) => setPostReturnRate(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>3%</span><span>15%</span></div>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Life Expectancy</label>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-0.5 rounded-full">{lifeExpectancy} Yrs</span>
                </div>
                <input type="range" min={retireAge + 1} max="100" step="1" value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(+e.target.value)}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500 bg-gray-200" />
                <div className="flex justify-between text-xs text-gray-400 mt-1"><span>{retireAge + 1}</span><span>100</span></div>
            </div>

            <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100">
                <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Expenses at Retirement</p>
                        <p className="text-base font-bold text-gray-900">₹{result.futureMonthlyExpense.toLocaleString("en-IN")}/mo</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Corpus Needed</p>
                        <p className="text-lg font-bold text-blue-600">₹{result.corpusNeeded.toLocaleString("en-IN")}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Monthly SIP Needed</p>
                        <p className="text-base font-bold text-gray-900">₹{result.monthlySIP.toLocaleString("en-IN")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetirementCalculator;
