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
    heroImg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    goals: [
      {
        goal: 'Child Education',
        solution: 'Invest systematically in child education funds to beat inflation and secure your child\'s future.',
        img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
      },
      {
        goal: 'Retirement Planning',
        solution: 'Build a diversified mutual fund portfolio that grows steadily to support your post-retirement lifestyle.',
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'
      },
    ],
    chartData: {
      type: 'LineChart',
      title: 'Illustrative Growth of ₹1,00,000 Investment',
      data: {
        series: [
          {
            data: [100000, 112000, 125000, 140000, 158000, 178000, 200000, 225000, 253000, 285000, 320000],
            label: 'Mutual Fund (12% avg. return)',
            area: true,
            showMark: false,
          },
          {
            data: [100000, 105000, 110250, 115762, 121550, 127628, 134009, 140710, 147745, 155132, 162889],
            label: 'Fixed Deposit (5% avg. return)',
            area: true,
            showMark: false,
          }
        ],
        xAxis: [{
          scaleType: 'point',
          data: ['Start', 'Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5', 'Yr 6', 'Yr 7', 'Yr 8', 'Yr 9', 'Yr 10']
        }],
      },
      colors: ['#3182CE', '#A0AEC0']
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
    ctaText: "Explore plans",

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
      { title: 'Life Insurance', desc: 'Ensure financial security for your family\'s future.' },
      { title: 'Auto Insurance', desc: 'Protect your vehicle against accidents and theft.' },
    ],
    heroImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    goals: [
      {
        goal: 'Family Protection',
        solution: 'Ensure your family\'s financial stability during unforeseen events with tailored life and health insurance.',
        img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80'
      },
      {
        goal: 'Health Security',
        solution: 'Access quality healthcare without financial strain through our comprehensive medical insurance packages.',
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
      },
    ],
    chartData: null
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
    heroImg: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    goals: [
      {
        goal: "Capital Protection",
        solution: "Preserve your wealth with top-rated bonds offering safety and steady returns.",
        img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80"
      },
      {
        goal: "Regular Income",
        solution: "Earn consistent income through a diversified ladder of fixed-income instruments.",
        img: "https://images.unsplash.com/photo-1518458028785-8f5b0975bf63?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    // --- PMS (Portfolio Management Services) ---
    slug: "pms",
    title: "Portfolio Management (PMS)",
    outcome: "Get personalized, professionally managed equity portfolios with active stock-picking strategies for high-net-worth investors.",
    highlights: [
      "Customized stock portfolios",
      "Dedicated portfolio manager",
      "Transparent fee structure"
    ],
    badge: "HNI • Active management",
    badgeTone: "purple",
    ctaText: "Explore plan",

    // --- Additional data for ServicePage ---
    overview:
      "Portfolio Management Services (PMS) offer tailor-made investment solutions for high-net-worth individuals. With a dedicated portfolio manager and direct equity ownership, PMS provides transparency, customization, and the potential for superior returns through active stock-picking and concentrated strategies.",
    fullHighlights: [
      "Direct equity ownership in your demat account",
      "Dedicated relationship manager",
      "Customized investment strategies",
      "Regular performance reporting & analytics",
      "Tax-loss harvesting opportunities"
    ],
    types: [
      { title: "Discretionary PMS", desc: "Full portfolio management authority with the fund manager making all investment decisions on your behalf." },
      { title: "Non-Discretionary PMS", desc: "Manager provides recommendations but you retain final decision-making authority on trades." },
      { title: "Advisory PMS", desc: "Expert investment advice and model portfolios that you can follow at your own discretion." }
    ],
    heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    goals: [
      {
        goal: "Wealth Multiplication",
        solution: "Leverage concentrated, high-conviction equity portfolios managed by seasoned professionals to accelerate wealth creation.",
        img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
      },
      {
        goal: "Personalized Strategy",
        solution: "Enjoy a bespoke investment approach tailored to your risk appetite, financial goals, and time horizon.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    chartData: null
  },
  {
    // --- AIF (Alternative Investment Funds) ---
    slug: "aif",
    title: "Alternative Investment Funds (AIF)",
    outcome: "Access institutional-grade alternative strategies like long-short equity, venture capital, and private debt for diversified alpha.",
    highlights: [
      "Category I, II & III funds",
      "Institutional-grade strategies",
      "Portfolio diversification"
    ],
    badge: "Exclusive • Alpha-driven",
    badgeTone: "blue",
    ctaText: "Explore plan",

    // --- Additional data for ServicePage ---
    overview:
      "Alternative Investment Funds (AIFs) provide access to sophisticated investment strategies that go beyond traditional mutual funds and stocks. From venture capital and private equity (Category I) to diversified debt and real estate (Category II) to hedge fund-style long-short strategies (Category III), AIFs offer institutional-grade opportunities for qualified investors.",
    fullHighlights: [
      "Access to Category I, II & III AIF strategies",
      "Diversification beyond traditional asset classes",
      "Professional fund management with SEBI oversight",
      "Potential for higher risk-adjusted returns",
      "Quarterly NAV reporting & investor updates"
    ],
    types: [
      { title: "Category I AIF", desc: "Venture capital, angel funds, and infrastructure funds that invest in socially or economically desirable sectors." },
      { title: "Category II AIF", desc: "Private equity, debt funds, and fund-of-funds that don't use leverage or complex trading strategies." },
      { title: "Category III AIF", desc: "Hedge fund strategies including long-short equity, derivatives trading, and complex return-generating strategies." }
    ],
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    goals: [
      {
        goal: "Portfolio Diversification",
        solution: "Reduce correlation to public markets by investing in alternative strategies that perform differently from traditional equity and debt.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        goal: "Alpha Generation",
        solution: "Access professional fund managers who deploy sophisticated strategies to generate returns above market benchmarks.",
        img: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    chartData: null
  },
  {
    // --- Unlisted Shares ---
    slug: "unlisted-shares",
    title: "Unlisted & Pre-IPO Shares",
    outcome: "Invest early in high-growth companies before they go public and capture value from listing gains.",
    highlights: [
      "Pre-IPO opportunities",
      "Curated company selection",
      "Listing gain potential"
    ],
    badge: "Pre-IPO • High growth",
    badgeTone: "yellow",
    ctaText: "Explore plan",

    // --- Additional data for ServicePage ---
    overview:
      "Unlisted and Pre-IPO shares give you the opportunity to invest in promising companies before they list on the stock exchange. By getting in early, you can potentially benefit from substantial listing gains and long-term growth. We carefully curate opportunities, perform thorough due diligence, and guide you through the acquisition process.",
    fullHighlights: [
      "Thoroughly vetted pre-IPO opportunities",
      "Access to high-growth startups & companies",
      "Due diligence reports for every opportunity",
      "Guidance on entry price & exit strategy",
      "Transfer assistance & demat support"
    ],
    types: [
      { title: "Pre-IPO Shares", desc: "Shares of companies that have filed or are likely to file for IPO, offering near-term listing gain potential." },
      { title: "Growth-Stage Companies", desc: "Equity in high-growth companies that are scaling revenue and may IPO in 2-4 years." },
      { title: "Strategic Holdings", desc: "Long-term positions in fundamentally strong unlisted companies with solid business models and profitability." }
    ],
    heroImg: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    goals: [
      {
        goal: "Early-Stage Wealth",
        solution: "Capture value from early entry into companies poised for exponential growth and public listing.",
        img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
      },
      {
        goal: "Listing Gains",
        solution: "Benefit from the price appreciation that typically occurs when a strong unlisted company goes public on the stock exchange.",
        img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    chartData: null
  }
];
