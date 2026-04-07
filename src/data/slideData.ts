import { m } from "framer-motion";

export type LayoutType = 'title' | 'split' | 'single' | 'quote' | 'metrics' | 'table';

export type SplitContent = { header: string; description: string };

export interface SlideData {
  id: string;
  title: string;
  content: string | string[] | SplitContent[];
  speaker: string;
  layoutType: LayoutType;
  stats?: { label: string; value: string }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  imageTop?: string;
  imageTopClassName?: string;
  imageBottom?: string;
  imageBottomClassName?: string;
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
      { header: "Startup require funding to grow and scale", description: "Capital accelerates growth, enabling product development, marketing, and talent acquisition." },
      { header: "Investors provide capital in exchange for returns", description: "In exchange for risk, investors take equity stakes expecting value appreciation." },
      { header: "Choosing the right investor is critical", description: "It goes beyond money; cultural fit, industry network, and long-term vision matter." },
      { header: "Decision impacts long-term success", description: "A misaligned investor can force premature exits or slow down necessary pivots." },
      { header: "Case: Educational app startup with 2 offers", description: "We will evaluate two distinct funding paths for our rapidly expanding ed-tech platform." }
    ],
    speaker: "Jay Singh",
    layoutType: "split",
    imageTop: "https://img.freepik.com/free-vector/stylish-welcome-lettering-banner-join-with-joy-happiness_1017-57675.jpg?semt=ais_incoming&w=740&q=80",
    imageTopClassName: "absolute -top-10 -left-15 -rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden",
    imageBottom: "https://image.cnbcfm.com/api/v1/image/101317308-show-thumb-sharktank-1600x900.1910x1000.jpg",
    imageBottomClassName: "absolute -bottom-10 -right-15 rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden"
  },
  {
    id: "slide-3",
    title: "Objectives/Agenda",
    content: [
      { header: "Understand startup funding basics", description: "A quick primer on equity, valuation, and what investors typically expect in return." },
      { header: "Compare two investors offers", description: "Side-by-side analysis of terms, valuation, and post-investment control conditions." },
      { header: "Analyze pros and cons", description: "Evaluating the benefits and trade-offs of each proposed investment scenario." },
      { header: "Recommend best investor", description: "Providing a clear path forward based on empirical data and strategic alignment." },
      { header: "Justify decision logically", description: "Walking through the key metrics and qualitative factors that informed the final choice." }
    ],
    speaker: "Jay Singh",
    layoutType: "split",
    imageTop: "https://t3.ftcdn.net/jpg/02/91/42/42/360_F_291424294_mhrkp94UIU8c0pKSSmrCCIY2LEXppZRR.jpg",
    imageTopClassName: "absolute -top-10 left-15 rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden",
    imageBottom: "https://media.licdn.com/dms/image/v2/D4E12AQGUF14946PPiQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1694069444501?e=2147483647&v=beta&t=qvbtpP2kTH_INQi4-3bsNT-uAaGF64Kc6VNA-61H2IM",
    imageBottomClassName: "absolute -bottom-10 right-15 -rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden"
  },
  {
    id: "slide-4",
    title: "About the startup",
    content: [
      { header: "Developing an educational mobile app", description: "An interactive platform bridging the gap between theoretical learning and practical application." },
      { header: "Target users: Students & Learners", description: "Focusing primarily on high school and early college students looking for supplemental education." },
      { header: "Focus: Affordable and accessible learning", description: "Ensuring quality education reaches underserved demographics via a freemium model." },
      { header: "Revenue model: Subscription-based", description: "Tiered monthly subscriptions providing premium content, tutoring, and analytics." },
      { header: "Goal: Rapid growth and market expansion", description: "Targeting 1 million active users within the next 18 months." }
    ],
    speaker: "Kashish Gupta",
    layoutType: "split",
    imageTop: "https://i0.wp.com/www.meritstore.in/wp-content/uploads/2017/12/The-importance-of-focus-for-Academiuc-Success.png?fit=750%2C332&ssl=1",
    imageTopClassName: "absolute -top-10 left-15 rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden",
    imageBottom: "https://www.speexx.com/wp-content/uploads/Speexx_Blog_Goal_Setting.jpg",
    imageBottomClassName: "absolute -bottom-10 right-15 -rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden"
  },
  {
    id: "slide-5",
    title: "Investor Offer 1",
    content: [
      { header: "High funding amount", description: "Provides substantial runway for aggressive marketing and comprehensive product scaling." },
      { header: "Demands higher equity (ownership)", description: "Requires conceding a significant portion of company equity, leading to higher founder dilution." },
      { header: "Active involvement in decision-making", description: "Investor wants a board seat and veto rights on key executive hires and strategic pivots." },
      { header: "Focus on fast growth", description: "Expects rapid customer acquisition prioritizing market share over immediate profitability." },
      { header: "High pressure for returns", description: "Demands aggressive milestones and an eventual exit or IPO within a 3-5 year window." }
    ],
    speaker: "Kashish Gupta",
    layoutType: "split"
  },
  {
    id: "slide-6",
    title: "Investor Offer 2",
    content: [
      { header: "Moderate funding amount", description: "Provides adequate runway to hit the next major milestone without excess capital." },
      { header: "Lower equity requirement", description: "Founders retain more ownership and control over the company's future direction." },
      { header: "Limited involvement in decisions", description: "Investor takes an advisory role, trusting the founding team to manage daily operations." },
      { header: "Long-term growth focus", description: "Prioritizes building a sustainable, profitable business over short-term vanity metrics." },
      { header: "Flexible expectations", description: "Understands the nonlinear nature of startup growth and allows room for pivot and experimentation." }
    ],
    speaker: "Kirti Raj",
    layoutType: "split"
  },
  {
    id: "slide-7",
    title: "Comparison of offers",
    content: [
      { header: "Funding: Offer 1 > Offer 2", description: "Offer 1 injects more cash, enabling faster but riskier deployment." },
      { header: "Equity: Offer 1 higher dilution", description: "Offer 1 takes a significantly larger slice of the pie compared to Offer 2." },
      { header: "Control: Offer 2 gives more control", description: "Offer 2 allows founders to retain board majority and strategic independence." },
      { header: "Risk: Offer 1 higher pressure", description: "The aggressive goals set by Offer 1 increase the risk of burnout or premature scaling failure." },
      { header: "Flexibility: Offer 2 more startup-friendly", description: "Offer 2's terms leave room for organic growth and adapting to market feedback." }
    ],
    speaker: "Kirti Raj",
    layoutType: "split",
    imageTop: "https://www.shutterstock.com/image-illustration/option-1-2-outline-signpost-260nw-2235181277.jpg",
    imageTopClassName: "absolute -top-10 -left-15 -rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden",
    imageBottom: "https://rtgpkg.com/wp-content/uploads/2014/01/which-one.png",
    imageBottomClassName: "absolute -bottom-10 -right-15 rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden"
  },
  {
    id: "slide-8",
    title: "Key factors to consider",
    content: [
      { header: "Ownership and control", description: "Balancing the need for capital with the desire to steer the company's vision." },
      { header: "Growth expectations", description: "Aligning on whether to pursue a 'growth at all costs' or a 'sustainable profitability' model." },
      { header: "Risk tolerance", description: "Evaluating the team's capacity to handle the intense pressure associated with rapid scaling." },
      { header: "Strategic guidance", description: "Assessing if the investor brings valuable mentorship, industry connections, or operational expertise." },
      { header: "Long-term vision alignment", description: "Ensuring both parties agree on what the ultimate success scenario looks like." }
    ],
    speaker: "Kartik Kumar",
    layoutType: "split"
  },
  {
    id: "slide-9",
    title: "Pros & Cons - Offer 1",
    content: [
      { header: "Pros: More capital for expansion", description: "Allows for a massive marketing push and faster product iteration cycles." },
      { header: "Pros: Strong investor support", description: "Access to a top-tier network for hiring, partnerships, and subsequent funding rounds." },
      { header: "Pros: Faster scaling opportunities", description: "Enables immediate expansion into new geographical markets and product verticals." },
      { header: "Cons: Loss of control", description: "Significant founder dilution and potential loss of strategic decision-making power." },
      { header: "Cons: High pressure", description: "Intense scrutiny on meeting aggressive monthly and quarterly growth targets." }
    ],
    speaker: "Kartik Kumar",
    layoutType: "split"
  },
  {
    id: "slide-10",
    title: "Pros & Cons - Offer 2",
    content: [
      { header: "Pros: Founder retains control", description: "Preserves the original vision and allows for more agile decision-making." },
      { header: "Pros: Lower pressure", description: "Focus remains on product quality and healthy unit economics rather than hyper-growth." },
      { header: "Pros: Long-term stability", description: "Builds a more resilient business structure that can weather market downturns." },
      { header: "Cons: Limited funding", description: "May require more bootstrapped marketing and slower hiring." },
      { header: "Cons: Slower growth", description: "Competitors with more capital might capture market share more quickly." }
    ],
    speaker: "Harshit Pandey",
    layoutType: "split",
  },
  {
    id: "slide-11",
    title: "Recommendation",
    content: [
      { header: "Choose Investor Offer 2", description: "The strategic benefits of control and sustainability outweigh the sheer amount of capital in Offer 1." },
      { header: "Maintains startup independence", description: "Empowers the founding team to execute their full vision without external micromanagement." },
      { header: "Lower risk and pressure", description: "Fosters a healthier company culture focused on steady, qualitative improvements." },
      { header: "Better for sustainable growth", description: "Allows the company to reach profitability sooner rather than relying on endless funding rounds." },
      { header: "Aligns with long-term vision", description: "Supports the mission of accessible education over purely maximizing short-term financial returns." }
    ],
    speaker: "Harshit Pandey",
    layoutType: "split"
  },
  {
    id: "slide-12",
    title: "Justification",
    content: [
      { header: "Control is critical in early stages", description: "Founders need the agility to pivot without navigating a complex board bureaucracy." },
      { header: "Education startups need time to grow", description: "Ed-tech often requires longer sales cycles and community building that can't be purely bought with ads." },
      { header: "Avoid high-pressure decisions", description: "Forced hyper-growth can lead to compromised product quality and customer churn." },
      { header: "Flexibility allows innovations", description: "Maintaining independence allows the team to experiment with novel educational tools." },
      { header: "Balanced growth is safer", description: "A steady ascent ensures core infrastructure keeps pace with user acquisition." }
    ],
    speaker: "Eshaan Saha",
    layoutType: "split",
    imageTop: "https://d1eipm3vz40hy0.cloudfront.net/images/blog/sales-cycle-visual.png",
    imageTopClassName: "absolute -top-10 -left-15 -rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden",
    imageBottom: "https://odblogs.zohowebstatic.com/sites/qntrl-blog/files/qntrl-blog/balancing-growth,-no-compromise-in-quality,-and-stability.jpg",
    imageBottomClassName: "absolute -bottom-10 -right-15 rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden"
  },
  {
    id: "slide-13",
    title: "Conclusion",
    content: [
      { header: "Choosing the right investor is crucial", description: "It's a marriage that will define the trajectory of the company for years to come." },
      { header: "Not just money, but control matters", description: "The terms attached to funding are often more impactful than the dollar amount itself." },
      { header: "Long-term vision should guide decisions", description: "Ensure the investor shares your fundamental definition of success." },
      { header: "Offer 2 is more suitable for this startup", description: "It provides the necessary resources while protecting the founders' operational autonomy." }
    ],
    speaker: "Eshaan Saha",
    layoutType: "split",
    imageTop: "https://thumbs.dreamstime.com/b/long-term-vision-d-illustration-pushpin-pinned-front-text-business-financial-investment-duration-concept-85501800.jpg",
    imageTopClassName: "absolute -top-10 left-15 rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden",
    imageBottom: "https://lindamarkowitz.com/wp-content/uploads/2023/09/0927-IG-Twitter-Post.jpg",
    imageBottomClassName: "absolute -bottom-10 right-15 -rotate-5 w-full max-w-md h-32 md:h-48 bg-white/50 backdrop-blur-sm shadow-xl rounded-2xl border border-white/50 overflow-hidden"
  },
  {
    id: "slide-14",
    title: "Thank you!",
    content: "Any questions?",
    speaker: "Team",
    layoutType: "title"
  }
];
