import { m } from "framer-motion";

export type LayoutType = 'title' | 'split' | 'single' | 'quote' | 'metrics' | 'table';

export interface SlideData {
  id: string;
  title: string;
  content: string | string[];
  speaker: string;
  layoutType: LayoutType;
  stats?: { label: string; value: string }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export const slideData: SlideData[] = [
  {
    id: "slide-1",
    title: "Startup Funding Decision",
    content: "",
    speaker: "Jay Singh",
    layoutType: "table",
    tableData: {
      headers: ["Students Name", "Admission Number"],
      rows: [
        ["Eshaan Saha", "25SCSE1010357"],
        ["Harshit Pandey", "24SCSE1011227"],
        ["Jay Singh", "24SCSE1011199"],
        ["Kartik Kumar", "24SCSE1010453"],
        ["Kashish Gupta", "24SCSE1010904"],
        ["Kirti Raj", "24SCSE1010280"]
      ]
    }
  },
  {
    id: "slide-2",
    title: "Introduction",
    content: [
      "Startup require funding to grow and scale",
      "Investors provide capital in exchange for returns",
      "Choosing the right investor is critical",
      "Decision impacts long-term success",
      "Case: Educational app startup with 2 offers"
    ],
    speaker: "Jay Singh",
    layoutType: "split"
  },
  {
    id: "slide-3",
    title: "Objectives/Agenda",
    content: [
      "Understand startup funding basics",
      "Compare two investors offers",
      "Analyze pros and cons",
      "Recommend best investor",
      "Justify decision logically"
    ],
    speaker: "Jay Singh",
    layoutType: "split"
  },
  {
    id: "slide-4",
    title: "About the startup",
    content: [
      "Developing an educational mobile app",
      "Target users: Students & Learners",
      "Focus: Affordable and accessible learning",
      "Revenue model: Subscription-based",
      "Goal: Rapid growth and market expansion"
    ],
    speaker: "Kashish Gupta",
    layoutType: "split"
  },
  {
    id: "slide-5",
    title: "Investor Offer 1",
    content: [
      "High funding amount",
      "Demands higher equity (ownership)",
      "Active involvement in decision-making",
      "Focus on fast growth",
      "High pressure for returns"
    ],
    speaker: "Kashish Gupta",
    layoutType: "split"
  },
  {
    id: "slide-6",
    title: "Investor Offer 2",
    content: [
      "Moderate funding amount",
      "Lower equity requirement",
      "Limited involvement in decisions",
      "Long-term growth focus",
      "Flexible expactations"
    ],
    speaker: "Kirti Raj",
    layoutType: "split"
  },
  {
    id: "slide-7",
    title: "Comparison of offers",
    content: [
      "Funding: Offer 1 > Offer 2",
      "Equity: Offer 1 higher dilution",
      "Control: Offer 2 gives more control",
      "Risk: Offer 1 higher pressure",
      "Flexibility: Offer 2 more startup-friendly"
    ],
    speaker: "Kirti Raj",
    layoutType: "split"
  },
  {
    id: "slide-8",
    title: "Key factors to consider",
    content: [
      "Ownership and control",
      "Growth expectations",
      "Risk tolerance",
      "Strategic guidance",
      "Long-term vision alignment"
    ],
    speaker: "Kartik Kumar",
    layoutType: "split"
  },
  {
    id: "slide-9",
    title: "Pros & Cons - Offer 1",
    content: [
      "Pros: More capital for expansion",
      "Pros: Strong investor support",
      "Pros: Faster scaling opportunities",
      "Cons: Loss of control",
      "Cons: High pressure"
    ],
    speaker: "Kartik Kumar",
    layoutType: "split"
  },
  {
    id: "slide-10",
    title: "Pros & Cons - Offer 2",
    content: [
      "Pros: Founder retains control",
      "Pros: Lower pressure",
      "Pros: Long-term stability",
      "Cons: Limited funding",
      "Cons: Slower growth"
    ],
    speaker: "Harshit Pandey",
    layoutType: "split",
  },
  {
    id: "slide-11",
    title: "Recommendation",
    content: [
      "Choose Investor Offer 2",
      "Maintains startup independence",
      "Lower risk and pressure",
      "Better for sustainable growth",
      "Aligns with long-term vision"
    ],
    speaker: "Harshit Pandey",
    layoutType: "split"
  },
  {
    id: "slide-12",
    title: "Justification",
    content: [
      "Control is critical in early stages",
      "Education startups need time to grow",
      "Avoid high-pressure decisions",
      "Flexibility allows innovations",
      "Balanced growth is safer"
    ],
    speaker: "Eshaan Saha",
    layoutType: "split"
  },
  {
    id: "slide-13",
    title: "Conclusion",
    content: [
      "Choosing the right investor is crucial",
      "Not just money, but control matters",
      "Long-term vision should guide decisions",
      "Offer 2 is more suitable for this startup"
    ],
    speaker: "Eshaan Saha",
    layoutType: "split"
  },
  {
    id: "slide-14",
    title: "Thank you!",
    content: "Any questions?",
    speaker: "Speaker",
    layoutType: "title"
  }
];
