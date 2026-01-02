import Link from "next/link";
import { SITE, CALCULATORS, GI_BILL_2026, formatCurrency } from "./site-config";
import { ArrowRight, GraduationCap, DollarSign, Award, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-500" />
            <span className="text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
            {SITE.year}
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-900 to-blue-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300">Free {SITE.year} Calculator</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GI Bill
            <span className="text-emerald-400"> Calculator</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Calculate your VA education benefits. Estimate Post-9/11, Montgomery GI Bill,
            and Yellow Ribbon program benefits.
          </p>

          <Link
            href="/gi-bill-calculator"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Calculate Your Benefits
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Rate Banner */}
          <div className="mt-8 bg-emerald-900/30 border border-emerald-700/50 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-300 text-sm">
              <DollarSign className="w-4 h-4" />
              <span>Post-9/11 Max: <strong>{formatCurrency(GI_BILL_2026.post911.privateTuition)}/yr</strong> + Housing + Books</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-400">
                {(GI_BILL_2026.statistics.beneficiaries / 1000).toFixed(0)}K+
              </p>
              <p className="text-sm text-slate-400 mt-1">Veterans Using</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">
                {formatCurrency(GI_BILL_2026.post911.privateTuition)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Max Tuition/Yr</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-teal-400">
                {formatCurrency(GI_BILL_2026.post911.housingAllowance)}
              </p>
              <p className="text-sm text-slate-400 mt-1">Avg Housing/Mo</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">36</p>
              <p className="text-sm text-slate-400 mt-1">Months Max</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Free GI Bill Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {CALCULATORS.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link
                key={calc.id}
                href={`/${calc.id}`}
                className="group bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all hover:bg-slate-800/80"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {calc.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-3 group-hover:gap-2 transition-all">
                      Start Now <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* GI Bill Types */}
      <section className="bg-slate-800/30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Types of GI Bill
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-900/20 border border-emerald-500/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Post-9/11 GI Bill</h3>
              <p className="text-sm text-slate-300 mb-3">
                Most generous. Covers tuition, housing allowance, and books.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Up to {formatCurrency(GI_BILL_2026.post911.privateTuition)}/yr tuition</li>
                <li>• Monthly housing (E-5 BAH rate)</li>
                <li>• {formatCurrency(GI_BILL_2026.post911.booksStipend)}/yr books stipend</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Montgomery GI Bill</h3>
              <p className="text-sm text-slate-300 mb-3">
                Fixed monthly payment. Good for apprenticeships.
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• {formatCurrency(GI_BILL_2026.montgomery.fullTime)}/mo full-time</li>
                <li>• No housing allowance</li>
                <li>• 36 months total</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Post-9/11 Eligibility Tiers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GI_BILL_2026.eligibilityTiers.slice(0, 4).map((tier, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-emerald-400">{tier.percent}%</p>
              <p className="text-xs text-slate-400 mt-1">{tier.minService}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Calculate Your Benefits
        </h2>
        <p className="text-slate-400 mb-8">
          Free, instant calculation based on {SITE.year} VA rates.
        </p>
        <Link
          href="/gi-bill-calculator"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Start Free Calculator
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              <span className="font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-400 text-center">
              For informational purposes only. Visit VA.gov for official info.
            </p>
            <p className="text-sm text-slate-500">
              © {SITE.year} {SITE.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
