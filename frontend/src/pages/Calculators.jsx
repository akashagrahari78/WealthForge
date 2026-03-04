import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Hero/Navbar";
import Footer from "../components/Footer/Footer";
import SIPCalculator from "../components/Calculators/SIPCalculator";
import SWPCalculator from "../components/Calculators/SWPCalculator";
import StepUpSIPCalculator from "../components/Calculators/StepUpSIPCalculator";
import STPCalculator from "../components/Calculators/STPCalculator";
import RetirementCalculator from "../components/Calculators/RetirementCalculator";

const calculatorTabs = [
    {
        id: "sip",
        label: "SIP",
        fullLabel: "SIP Calculator",
        description: "Calculate returns on your Systematic Investment Plan",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        component: SIPCalculator,
    },
    {
        id: "swp",
        label: "SWP",
        fullLabel: "SWP Calculator",
        description: "Plan systematic withdrawals from your investment",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        component: SWPCalculator,
    },
    {
        id: "stepup",
        label: "Step Up",
        fullLabel: "Step-Up SIP Calculator",
        description: "SIP with annual increase in investment amount",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        component: StepUpSIPCalculator,
    },
    {
        id: "stp",
        label: "STP",
        fullLabel: "STP Calculator",
        description: "Plan systematic transfers between mutual funds",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        component: STPCalculator,
    },
    {
        id: "retirement",
        label: "Retirement",
        fullLabel: "Retirement Planner",
        description: "Plan your retirement corpus and monthly SIP needed",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        component: RetirementCalculator,
    },
];

export default function Calculators() {
    const [active, setActive] = useState("sip");
    const activeTab = calculatorTabs.find((t) => t.id === active);
    const ActiveComponent = activeTab.component;

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white">
                {/* Hero Header */}
                <section className="pt-10 pb-8 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block mb-3 px-4 py-1.5 bg-blue-50 rounded-full text-xs font-medium text-blue-500 tracking-wide uppercase font-bricolage">
                                Financial Tools
                            </span>
                            <h1 className="font-bricolage text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                                Investment Calculators
                            </h1>
                            <p className="font-bricolage text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
                                Plan your investments smarter. Use our suite of financial calculators to forecast returns, withdrawals, and retirement goals.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="px-4 pb-20">
                    <div className="max-w-3xl mx-auto">
                        {/* Tab Navigation */}
                        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
                            {calculatorTabs.map((tab) => {
                                const isActive = active === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActive(tab.id)}
                                        className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap
                      transition-all duration-200 border
                      ${isActive
                                                ? "bg-blue-500 text-white border-transparent shadow-lg shadow-blue-200/50"
                                                : "bg-white text-gray-500 border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                                            }
                    `}
                                    >
                                        <span className={isActive ? "text-white/80" : "text-gray-400"}>{tab.icon}</span>
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Calculator Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25 }}
                                className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-200/80 overflow-hidden"
                            >
                                {/* Card Header */}
                                <div className="px-6 py-5 border-b border-blue-50 bg-blue-50/40">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-blue-100 text-blue-500">
                                            {activeTab.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900">{activeTab.fullLabel}</h2>
                                            <p className="text-sm text-gray-400">{activeTab.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculator Body */}
                                <div className="p-6">
                                    <ActiveComponent />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Disclaimer */}
                        <p className="text-center text-xs text-gray-300 mt-6">
                            * These calculators are for illustrative purposes only. Actual returns may vary based on market conditions.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
