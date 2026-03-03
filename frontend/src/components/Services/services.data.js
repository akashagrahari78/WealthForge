// src/components/Services/services.data.js
export const services = [
  {
    // --- Data for ServiceCard on HomePage ---
    slug: "mutual-funds",
    title: "Mutual Funds",
    outcome: "Build long-term wealth with diversified portfolios matched to your risk and goals.",
    highlights: [
      "Goal-based SIPs",
      "Direct-plan selection",
      "Periodic rebalancing",
    ],
    badge: "Long-term • Diversified",
    badgeTone: "yellow",
    ctaText: "Explore plan",

    // --- Additional data for the full ServicePage ---
    overview: "Invest systematically with goal-based SIPs, direct-plan selection, and periodic rebalancing. Transparent, low-cost funds from top AMCs to maximize returns and minimize expenses.",
    fullHighlights: [
      'Goal-based SIPs',
      'Direct-plan selection',
      'Periodic rebalancing',
      'Tax-efficient fund switches',
      'Performance tracking & reports'
    ],
    types: [
      { title: 'Equity Funds', desc: 'Growth-oriented funds investing primarily in stocks.' },
      { title: 'Debt Funds', desc: 'Conservative funds focusing on fixed income securities.' },
      { title: 'Hybrid Funds', desc: 'Combination of equity and debt for balanced growth.' },
      { title: 'Index Funds', desc: 'Funds tracking stock market indices passively.' }
    ],
    goals: [
      {
        goal: 'Child Education',
        solution: 'Invest systematically in child education funds to beat inflation and secure your child’s future.',
        img: 'https://images.unsplash.com/photo-1503944583220-79dSlice-6322b?auto=format&fit=crop&w=800&q=80'
      },
      {
        goal: 'Retirement Planning',
        solution: 'Build a diversified mutual fund portfolio that grows steadily to support your post-retirement lifestyle.',
        img: 'https://images.unsplash.com/photo-1554493399-6351d654135d?auto=format&fit=crop&w=800&q=80'
      },
    ]
    ,
    chartData: {
    type: 'LineChart',  
    title: 'Illustrative Growth of ₹1,00,000 Investment',
    data: {
      // Data representing the value of the investment over 10 years
      series: [
        { 
          data: [100000, 112000, 125000, 140000, 158000, 178000, 200000, 225000, 253000, 285000, 320000],
          label: 'Mutual Fund (12% avg. return)',
          area: true, // This will create a filled area chart
          showMark: false,
        },
        // Optional: Compare against another investment type
        {
          data: [100000, 105000, 110250, 115762, 121550, 127628, 134009, 140710, 147745, 155132, 162889],
          label: 'Fixed Deposit (5% avg. return)',
          area: true,
          showMark: false,
        }
      ],
      // Labels for the X-axis (the years)
      xAxis: [{ 
        scaleType: 'point', 
        data: ['Start', 'Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5', 'Yr 6', 'Yr 7', 'Yr 8', 'Yr 9', 'Yr 10'] 
      }],
    },
    // Define colors for the lines/areas
    colors: ['#3182CE', '#A0AEC0'] // Blue for Mutual Fund, Gray for FD
  }
  },
  {
    // --- Data for ServiceCard ---
    slug: "insurance",
    title: "Insurance (Term & Health)",
    outcome: "Protect family and wealth from life and medical risks.",
    highlights: [
      "Sum-assured planning",
      "Premium optimization",
      "Claim assistance",
    ],
    badge: "Protection • Essential",
    badgeTone: "blue",
    ctaText: "Get a free assessment",

    // --- Additional data for ServicePage ---
    overview: 'Our insurance offerings provide financial protection through a variety of plans including health, life, and property coverage. We simplify the process and help you choose what fits your life best.',
    fullHighlights: [
      'Comprehensive Health Plans',
      'Term & Whole Life Policies',
      'Property & Casualty Coverage',
      'Personalized Premium Options',
      'Dedicated Claim Assistance'
    ],
    types: [
      { title: 'Health Insurance', desc: 'Cover medical expenses and stay prepared for emergencies.' },
      { title: 'Life Insurance', desc: 'Ensure financial security for your family’s future.' },
      { title: 'Auto Insurance', desc: 'Protect your vehicle against accidents and theft.' },
    ],
    goals: [
      {
        goal: 'Family Protection',
        solution: 'Ensure your family’s financial stability during unforeseen events with tailored life and health insurance.',
        img: 'https://images.unsplash.com/photo-1559032771-f735d4d54137?auto=format&fit=crop&w=800&q=80'
      },
      {
        goal: 'Health Security',
        solution: 'Access quality healthcare without financial strain through our comprehensive medical insurance packages.',
        img: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
      },
    ],
    chartData : null
  },
 {
  // --- Data for ServiceCard ---
  slug: "bonds-fixed-income",
  title: "Bonds & Fixed Income",
  outcome: "Build a predictable income stream while protecting your invested capital.",
  highlights: [
    "Sovereign/AAA-rated bonds",
    "T+1 liquidity",
    "Laddered maturity structure"
  ],
  badge: "Capital protection • Income",
  badgeTone: "green",
  ctaText: "Explore options",
  // --- Additional data for ServicePage ---
  overview:
    "Our Bonds & Fixed Income services provide stability and reliable returns through a carefully diversified portfolio of sovereign and AAA-rated bonds. Designed for investors seeking capital protection and predictable cashflows, our approach emphasizes credit quality, liquidity, and interest rate management.",
  fullHighlights: [
    "Sovereign and AAA-rated focus",
    "Laddering approach for consistent income",
    "T+1 liquidity options",
    "Active credit risk management",
    "Interest rate hedging for stability"
  ],
  types: [
    { title: "Government Bonds", desc: "Backed by the government, ensuring safety and regular interest income." },
    { title: "Corporate Bonds", desc: "High-grade corporate debt instruments offering superior yields." },
    { title: "Fixed Maturity Plans", desc: "Structured investments with defined tenure and predictable returns." }
  ],
  goals: [
    {
      goal: "Capital Protection",
      solution: "Preserve your wealth with top-rated bonds offering safety and steady returns.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      goal: "Regular Income",
      solution: "Earn consistent income through a diversified ladder of fixed-income instruments.",
      img: "https://images.unsplash.com/photo-1565514020179-026b92a7c6b4?auto=format&fit=crop&w=800&q=80"
    }
  ]
}
,{
  // --- Data for ServiceCard ---
  slug: "goal-planning",
  title: "Goal Planning",
  outcome: "Achieve life goals like education, home, and retirement with a structured, inflation-adjusted roadmap.",
  highlights: [
    "Inflation-adjusted targets",
    "SIP automation",
    "Progress tracking"
  ],
  badge: "Goal-first",
  badgeTone: "purple",
  ctaText: "Plan my goals",

  // --- Additional data for ServicePage ---
  overview:
    "Our Goal Planning service helps you map out financial milestones such as child education, home purchase, and retirement. Using inflation-adjusted projections and disciplined investments, we ensure your savings stay aligned with your life goals.",
  fullHighlights: [
    "Inflation-adjusted and data-backed targets",
    "SIP setups for automated investing",
    "Regular review checkpoints",
    "Goal segmentation for clarity",
    "Detailed progress tracking dashboard"
  ],
  types: [
    { title: "Education Planning", desc: "Secure your child’s education expenses with systematic, inflation-proof planning." },
    { title: "Retirement Planning", desc: "Create a post-retirement income flow that sustains your lifestyle comfortably." },
    { title: "Home & Asset Goals", desc: "Build funds for major life purchases with timeline-based investments." }
  ],
  goals: [
    {
      goal: "Child’s Future",
      solution: "Plan ahead to fund your child’s education or marriage without financial stress.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80"
    },
    {
      goal: "Retirement Security",
      solution: "Ensure a worry-free retirement through long-term disciplined investments and reviews.",
      img: "https://images.unsplash.com/photo-1508387025472-cbb66b4f1b83?auto=format&fit=crop&w=800&q=80"
    }
  ]
}
]; 

