"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Calculator, Info, DollarSign } from "lucide-react";
import {
    SITE,
    GI_BILL_2026,
    calculateGIBill,
    formatCurrency,
    GIBillResult
} from "../site-config";

export default function GIBillCalculatorPage() {
    const [billType, setBillType] = useState("post911");
    const [eligibility, setEligibility] = useState(100);
    const [isPrivate, setIsPrivate] = useState(false);
    const [result, setResult] = useState<GIBillResult | null>(null);

    const handleCalculate = () => {
        setResult(calculateGIBill(billType, eligibility, "fullTime", isPrivate));
    };

    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">GI Bill Calculator</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-8">
                {/* Calculator Card */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h1 className="text-xl font-bold text-white mb-2">
                        {SITE.year} GI Bill Calculator
                    </h1>
                    <p className="text-sm text-slate-400 mb-6">
                        Estimate your VA education benefits
                    </p>

                    {/* Inputs */}
                    <div className="space-y-5 mb-6">
                        {/* Bill Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                GI Bill Type
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setBillType("post911")}
                                    className={`py-3 rounded-lg border transition ${billType === "post911"
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Post-9/11
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setBillType("montgomery")}
                                    className={`py-3 rounded-lg border transition ${billType === "montgomery"
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-slate-700 text-slate-300 border-slate-600"
                                        }`}
                                >
                                    Montgomery
                                </button>
                            </div>
                        </div>

                        {/* Eligibility (Post-9/11 only) */}
                        {billType === "post911" && (
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Eligibility: <span className="text-emerald-400 font-bold">{eligibility}%</span>
                                </label>
                                <input
                                    type="range"
                                    min="40"
                                    max="100"
                                    step="10"
                                    value={eligibility}
                                    onChange={(e) => setEligibility(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>40%</span>
                                    <span>70%</span>
                                    <span>100%</span>
                                </div>
                            </div>
                        )}

                        {/* School Type */}
                        {billType === "post911" && (
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    School Type
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsPrivate(false)}
                                        className={`py-3 rounded-lg border transition ${!isPrivate
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        Public School
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsPrivate(true)}
                                        className={`py-3 rounded-lg border transition ${isPrivate
                                            ? "bg-emerald-600 text-white border-emerald-600"
                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                            }`}
                                    >
                                        Private School
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Calculate Button */}
                    <button
                        onClick={handleCalculate}
                        className="w-full py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Benefits
                    </button>
                </div>

                {/* Results */}
                {result && (
                    <div className="mt-6 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
                            <p className="text-sm text-emerald-100 mb-1">Estimated Annual Benefits</p>
                            <p className="text-4xl font-bold">{formatCurrency(result.totalAnnual)}</p>
                            <p className="text-sm text-emerald-100 mt-2">
                                {result.billType} • {result.eligibilityPercent}% eligibility
                            </p>
                        </div>

                        {/* Breakdown */}
                        <div className="p-6">
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                Benefit Breakdown
                            </h3>

                            <div className="space-y-3 text-sm">
                                {billType === "post911" && (
                                    <>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Annual Tuition (Max)</span>
                                            <span className="font-medium text-white">{formatCurrency(result.annualTuition)}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Monthly Housing (E-5 BAH)</span>
                                            <span className="font-medium text-white">{formatCurrency(result.monthlyHousing)}/mo</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-slate-700">
                                            <span className="text-slate-300">Books Stipend</span>
                                            <span className="font-medium text-white">{formatCurrency(result.booksStipend)}/yr</span>
                                        </div>
                                    </>
                                )}
                                <div className="flex justify-between pt-4 text-lg">
                                    <span className="text-white font-bold">Est. 4-Year Total</span>
                                    <span className="font-bold text-emerald-400">{formatCurrency(result.total36Months)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="p-4 bg-blue-900/20 border-t border-blue-700/50">
                            <div className="flex items-start gap-2 text-sm">
                                <DollarSign className="w-4 h-4 text-blue-400 mt-0.5" />
                                <p className="text-blue-200">
                                    Housing allowance varies by school location. Check VA.gov for your school.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* FAQ Section */}
                <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-emerald-500" />
                        GI Bill FAQ
                    </h2>

                    <div className="space-y-4 text-sm">
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                Which GI Bill should I use?
                            </h3>
                            <p className="text-slate-400">
                                Post-9/11 is usually better—it pays tuition directly plus housing.
                                Montgomery gives a flat payment but no housing allowance.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-1">
                                What is Yellow Ribbon?
                            </h3>
                            <p className="text-slate-400">
                                Yellow Ribbon helps cover private school costs above the Post-9/11 cap.
                                Schools contribute, VA matches.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    This is an estimate. Visit VA.gov for your official benefits.
                </p>
            </main>

            {/* Schema.org FAQPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Which GI Bill should I use?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Post-9/11 GI Bill is usually better as it pays tuition directly plus housing allowance.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
