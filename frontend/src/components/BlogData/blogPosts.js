// src/data/blogPosts.js
export const POSTS = [
  {
    slug: "sip-disciplined-wealth",
    date: "2025-09-12",
    category: { en: "Investment", hi: "निवेश" },
    title: {
      en: "SIP: The Disciplined Path to Long‑Term Wealth",
      hi: "एसआईपी: दीर्घकालिक धन का अनुशासित मार्ग",
    },
    summary: {
      en: "How small, regular investments compound into meaningful outcomes over time.",
      hi: "कैसे छोटे, नियमित निवेश समय के साथ बड़े परिणामों में बदलते हैं।",
    },
  },
  {
    slug: "mutual-fund-direct-vs-regular",
    date: "2025-08-22",
    category: { en: "Mutual Fund", hi: "म्यूचुअल फंड" },
    title: {
      en: "Direct vs Regular Plans: What Should You Choose?",
      hi: "डायरेक्ट बनाम रेगुलर प्लान: आपको क्या चुनना चाहिए?",
    },
    summary: {
      en: "Comparing costs, transparency, and advisory value in mutual fund investing.",
      hi: "लागत, पारदर्शिता और सलाहकार मूल्य की तुलना।",
    },
  },
  {
    slug: "goal-based-planning",
    date: "2025-07-10",
    category: { en: "Planning", hi: "योजना" },
    title: {
      en: "Goal‑Based Planning: Start With Why",
      hi: "लक्ष्य आधारित योजना: ‘क्यों’ से शुरुआत करें",
    },
    summary: {
      en: "Map each investment to a purpose to stay consistent through cycles.",
      hi: "हर निवेश को उद्देश्य से जोड़ें ताकि चक्रों में भी अनुशासन बना रहे।",
    },
  },
  {
    slug: "market-noise-vs-signal",
    date: "2025-06-05",
    category: { en: "Market Insight", hi: "बाज़ार अंतर्दृष्टि" },
    title: {
      en: "Noise vs Signal: Focus on What Matters",
      hi: "शोर बनाम संकेत: जरूरी बातों पर ध्यान दें",
    },
    summary: {
      en: "Cut through daily headlines and track the few levers that drive outcomes.",
      hi: "दैनिक सुर्खियों से अलग होकर उन कारकों पर ध्यान दें जो परिणाम तय करते हैं।",
    },
  },
  {
    slug: "rebalancing-rules",
    date: "2025-05-18",
    category: { en: "Strategy", hi: "रणनीति" },
    title: {
      en: "Rebalancing Rules for Calm Investing",
      hi: "संतुलित निवेश के लिए रीबैलेंसिंग नियम",
    },
    summary: {
      en: "Simple thresholds to manage risk without reacting emotionally.",
      hi: "जोखिम नियंत्रित करने के लिए सरल सीमाएँ, बिना भावनात्मक प्रतिक्रियाओं के।",
    },
  },
];

// Utility: simple lookup by slug
export const findPost = (slug) => POSTS.find((p) => p.slug === slug);
