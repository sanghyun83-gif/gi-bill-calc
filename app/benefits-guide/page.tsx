"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, FileText, CheckCircle, Award } from "lucide-react";
import { SITE, GI_BILL_2026, formatCurrency } from "../site-config";

export default function BenefitsGuidePage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-emerald-500" />
                        <span className="text-lg font-bold text-white">GI Bill Guide</span>
                    </div>
                    <span className="ml-auto text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {SITE.year}
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        GI Bill Benefits Guide
                    </h1>
                    <p className="text-slate-400">
                        Everything you need to know about VA education benefits
                    </p>
                </div>

                {/* Post-9/11 GI Bill */}
                <div className="bg-emerald-900/30 border border-emerald-500/50 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-500" />
                        Post-9/11 GI Bill (Chapter 33)
                    </h2>
                    <p className="text-slate-300 mb-4">
                        The most comprehensive VA education benefit. Includes tuition, housing, and books.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-emerald-400 font-semibold">Tuition</p>
                            <p className="text-white font-bold">{formatCurrency(GI_BILL_2026.post911.privateTuition)}/yr</p>
                            <p className="text-xs text-slate-400">Max for private schools</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-emerald-400 font-semibold">Housing</p>
                            <p className="text-white font-bold">~{formatCurrency(GI_BILL_2026.post911.housingAllowance)}/mo</p>
                            <p className="text-xs text-slate-400">E-5 BAH (by location)</p>
                        </div>
                        <div className="bg-slate-800/80 rounded-lg p-4">
                            <p className="text-sm text-emerald-400 font-semibold">Books</p>
                            <p className="text-white font-bold">{formatCurrency(GI_BILL_2026.post911.booksStipend)}/yr</p>
                            <p className="text-xs text-slate-400">Supplies stipend</p>
                        </div>
                    </div>
                </div>

                {/* Eligibility */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Post-9/11 Eligibility Tiers
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Your benefit percentage depends on active duty service after 9/10/2001.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-slate-400 border-b border-slate-700">
                                    <th className="py-2">Service Time</th>
                                    <th className="py-2">Benefit %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {GI_BILL_2026.eligibilityTiers.map((tier, i) => (
                                    <tr key={i} className="border-b border-slate-700/50">
                                        <td className="py-2 text-white">{tier.minService}</td>
                                        <td className="py-2 text-emerald-400 font-bold">{tier.percent}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Montgomery GI Bill */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Montgomery GI Bill (Chapter 30)
                    </h2>
                    <p className="text-slate-300 mb-4">
                        Fixed monthly payment. Good for apprenticeships and on-the-job training.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Full-Time</p>
                            <p className="text-emerald-400 font-bold">{formatCurrency(GI_BILL_2026.montgomery.fullTime)}/mo</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">3/4 Time</p>
                            <p className="text-white">{formatCurrency(GI_BILL_2026.montgomery.threeQuarter)}/mo</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">1/2 Time</p>
                            <p className="text-white">{formatCurrency(GI_BILL_2026.montgomery.halfTime)}/mo</p>
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4">
                            <p className="font-bold text-white">Max Months</p>
                            <p className="text-white">36 months</p>
                        </div>
                    </div>
                </div>

                {/* Yellow Ribbon */}
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4">
                        Yellow Ribbon Program
                    </h2>
                    <p className="text-slate-300 mb-3">
                        Covers tuition costs <strong>above</strong> the Post-9/11 cap. Great for expensive private schools.
                    </p>
                    <ul className="text-sm text-yellow-200 space-y-2">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mt-1" />
                            <span>Requires 100% Post-9/11 eligibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mt-1" />
                            <span>School contributes, VA matches</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mt-1" />
                            <span>Not all schools participate</span>
                        </li>
                    </ul>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/gi-bill-calculator"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Calculate Your Benefits
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Visit VA.gov for official information and to apply for benefits.
                </p>
            </main>
        </div>
    );
}
