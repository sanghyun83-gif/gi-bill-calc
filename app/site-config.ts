// ============================================
// GI BILL CALCULATOR - SITE CONFIG
// 2026 Data - Post-9/11, Montgomery, Yellow Ribbon
// ============================================

import { Calculator, DollarSign, FileText, GraduationCap } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "GI Bill Calculator",
    tagline: "Free VA Education Benefits Estimator",
    description: "Calculate GI Bill benefits for veterans. Free 2026 Post-9/11, Montgomery, and Yellow Ribbon calculator.",
    year: 2026,
    baseUrl: "https://gi-bill.mysmartcalculators.com",
};

// ============================================
// 2026 GI BILL CONSTANTS
// Source: VA.gov
// ============================================
export const GI_BILL_2026 = {
    // Post-9/11 GI Bill (Ch. 33) - 2026 rates
    post911: {
        privateTuition: 28937.94,  // Max per year for private schools
        housingAllowance: 2100,    // E-5 BAH average (varies by location)
        booksStipend: 1000,        // Annual books/supplies
        maxMonths: 36,             // Maximum months of benefits
    },

    // Montgomery GI Bill (Ch. 30)
    montgomery: {
        fullTime: 2195,      // Monthly for full-time
        threeQuarter: 1646,  // 3/4 time
        halfTime: 1098,      // 1/2 time
        lessThanHalf: 549,   // Less than 1/2
        maxMonths: 36,
    },

    // Eligibility tiers (Post-9/11)
    eligibilityTiers: [
        { percent: 100, minService: "36+ months" },
        { percent: 90, minService: "30 months" },
        { percent: 80, minService: "24 months" },
        { percent: 70, minService: "18 months" },
        { percent: 60, minService: "12 months" },
        { percent: 50, minService: "6 months" },
        { percent: 40, minService: "90 days" },
    ],

    // Yellow Ribbon Program
    yellowRibbon: {
        description: "Covers tuition beyond Post-9/11 cap",
        requirement: "100% Post-9/11 eligibility",
        vaMatch: "VA matches school contribution",
    },

    // Statistics
    statistics: {
        beneficiaries: 700000,
        avgAnnualBenefit: 25000,
        totalPaid2025: 12500000000,  // $12.5B
        percentUsing: 85,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "gi-bill-calculator",
        name: "GI Bill Calculator",
        shortName: "Calculator",
        description: "Estimate your VA education benefits",
        longDescription: "Free 2026 GI Bill calculator. Calculate Post-9/11, Montgomery, and Yellow Ribbon benefits.",
        icon: Calculator,
        category: "finance",
        keywords: ["gi bill calculator", "post 9/11 gi bill calculator", "va education benefits"],
        featured: true,
    },
    {
        id: "benefits-guide",
        name: "GI Bill Guide",
        shortName: "Guide",
        description: "Understanding your education benefits",
        longDescription: "Learn about Post-9/11, Montgomery GI Bill, and Yellow Ribbon program.",
        icon: FileText,
        category: "finance",
        keywords: ["gi bill explained", "post 9/11 gi bill", "montgomery gi bill"],
        featured: true,
    },
] as const;

// ============================================
// GI BILL CALCULATION
// ============================================
export interface GIBillResult {
    billType: string;
    eligibilityPercent: number;
    monthlyHousing: number;
    annualTuition: number;
    booksStipend: number;
    totalAnnual: number;
    total36Months: number;
}

export function calculateGIBill(
    billType: string = "post911",
    eligibilityPercent: number = 100,
    enrollmentStatus: string = "fullTime",
    isPrivateSchool: boolean = false
): GIBillResult {
    const percent = eligibilityPercent / 100;

    if (billType === "post911") {
        const tuition = isPrivateSchool
            ? GI_BILL_2026.post911.privateTuition * percent
            : GI_BILL_2026.post911.privateTuition * percent;  // Public = actual costs (capped)

        const housing = GI_BILL_2026.post911.housingAllowance * percent;
        const books = GI_BILL_2026.post911.booksStipend * percent;

        const annualHousing = housing * 9;  // 9 months academic year
        const totalAnnual = tuition + annualHousing + books;

        return {
            billType: "Post-9/11 GI Bill",
            eligibilityPercent,
            monthlyHousing: Math.round(housing),
            annualTuition: Math.round(tuition),
            booksStipend: Math.round(books),
            totalAnnual: Math.round(totalAnnual),
            total36Months: Math.round(totalAnnual * 4),  // ~4 years
        };
    } else {
        // Montgomery GI Bill
        let monthly: number = GI_BILL_2026.montgomery.fullTime;
        if (enrollmentStatus === "threeQuarter") monthly = GI_BILL_2026.montgomery.threeQuarter;
        if (enrollmentStatus === "halfTime") monthly = GI_BILL_2026.montgomery.halfTime;

        const annual = monthly * 9;

        return {
            billType: "Montgomery GI Bill",
            eligibilityPercent: 100,
            monthlyHousing: 0,
            annualTuition: 0,
            booksStipend: 0,
            totalAnnual: Math.round(annual),
            total36Months: Math.round(monthly * 36),
        };
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
