export type LayoutType = 'title' | 'split' | 'single' | 'quote' | 'metrics';

export interface SlideData {
  id: string;
  title: string;
  content: string | string[];
  speaker: string;
  layoutType: LayoutType;
  stats?: { label: string; value: string }[];
}

export const slideData: SlideData[] = [
  {
    id: "slide-1",
    title: "FinFlow",
    content: "Seamless Borderless Treasury Management.",
    speaker: "Alex Rivera, CEO",
    layoutType: "title"
  },
  {
    id: "slide-2",
    title: "The Core Problem",
    content: [
      "Traditional multi-currency accounts are opaque.",
      "Settlement takes 2-5 days globally.",
      "Hidden FX layers erode 3-5% of margins."
    ],
    speaker: "Sarah Chen, COO",
    layoutType: "split"
  },
  {
    id: "slide-3",
    title: "Our Solution",
    content: "A unified API-first treasury platform that settles trades instantly and transparently, routing via the lowest-cost liquidity pools.",
    speaker: "Sarah Chen, COO",
    layoutType: "single"
  },
  {
    id: "slide-4",
    title: "Market Opportunity",
    content: "$4.2 Trillion idle in corporate treasuries waiting for yield optimization.",
    speaker: "Julian Thorne, Head of Strategy",
    layoutType: "single"
  },
  {
    id: "slide-5",
    title: "Key Metrics & Growth",
    content: "Our beta program demonstrated significant uplift in capital efficiency.",
    speaker: "Alex Rivera, CEO",
    layoutType: "metrics",
    stats: [
      { label: "Volume Processed", value: "$120M" },
      { label: "Avg Cost Reduction", value: "65%" },
      { label: "Active Clients", value: "42" }
    ]
  },
  {
    id: "slide-6",
    title: "Product Demo",
    content: [
      "Live API endpoint demonstration.",
      "Automated hedging execution.",
      "Real-time liquidity dashboard."
    ],
    speaker: "Maya Patel, CTO",
    layoutType: "split"
  },
  {
    id: "slide-7",
    title: "The Technology",
    content: "Built on Rust and Postgres. Event-driven architecture capable of processing 10,000 TPS with sub-millisecond latency. Zero legacy cruft.",
    speaker: "Maya Patel, CTO",
    layoutType: "single"
  },
  {
    id: "slide-8",
    title: "Competitive Landscape",
    content: "Unlike legacy banks or standard payment processors, FinFlow provides programmatically embedded compliance + direct liquidity access.",
    speaker: "Julian Thorne, Head of Strategy",
    layoutType: "quote"
  },
  {
    id: "slide-9",
    title: "Go-to-Market Strategy",
    content: [
      "Phase 1: B2B Marketplaces (Current)",
      "Phase 2: SaaS Platforms (Q3 2026)",
      "Phase 3: Direct API access to enterprise treasuries (Q1 2027)"
    ],
    speaker: "Sarah Chen, COO",
    layoutType: "split"
  },
  {
    id: "slide-10",
    title: "Regulatory & Compliance",
    content: "SOC2 Type II Certified. Licensed as an MSB in 42 states, expanding to UK FCA by Q4. Bank-grade KMS architecture.",
    speaker: "Maya Patel, CTO",
    layoutType: "single"
  },
  {
    id: "slide-11",
    title: "Financial Projections",
    content: "Targeting $5M ARR by Year 2 with a 85% gross margin profile based on SaaS subscription + fractional API usage fees.",
    speaker: "Alex Rivera, CEO",
    layoutType: "metrics",
    stats: [
      { label: "Year 1 Target", value: "$1M ARR" },
      { label: "Year 2 Target", value: "$5M ARR" },
      { label: "Breakeven", value: "Month 18" }
    ]
  },
  {
    id: "slide-12",
    title: "The Ask",
    content: "Raising $3.5M Seed to scale GTM operations, deepen the team, and finalize international licenses.",
    speaker: "Alex Rivera, CEO",
    layoutType: "title"
  }
];
