/**
 * All website content lives here. Edit this file to change text, add testimonials,
 * add articles or paste social profile links. No other file needs to change.
 */

export const SITE = {
  name: "Athar Ramzan",
  title: "Athar Ramzan | Senior Banking Professional | Banking Trainer & Mentor",
  description:
    "Athar Ramzan is a senior banking professional with 20+ years of experience in corporate and commercial banking, credit, trade finance, relationship management and branch management. He provides professional banking training, mentoring and speaking services.",
  keywords: [
    "Athar Ramzan",
    "Banking Trainer Pakistan",
    "Credit Training Pakistan",
    "Trade Finance Trainer Pakistan",
    "Banking Mentor Pakistan",
    "Banking Speaker Pakistan",
    "SBP Prudential Regulations Training",
    "SME Banking Training",
    "Corporate Banking Training",
  ],
  email: "athar.ramzanbhatti@gmail.com",
  phone: "+92-300-845-1763",
  phoneHref: "tel:+923008451763",
  location: "Lahore, Pakistan",
  roles: [
    "Senior Banking Professional",
    "Banking Trainer",
    "Credit & Trade Finance Expert",
    "Mentor",
    "Motivational Speaker",
  ],
  intro:
    "With more than 20 years of professional experience across Corporate & Commercial Banking, Credit, Trade Finance, Relationship Management, Branch Management and Business Development, I help banking professionals, businesses and organizations turn complex banking concepts into practical knowledge and better decisions.",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Career", href: "#career" },
  { label: "Training", href: "#training" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Speaking", href: "#speaking" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: { count?: number; suffix?: string; value?: string; label: string }[] = [
  { count: 20, suffix: "+ years", label: "Experience" },
  { value: "Corporate & Commercial", label: "Banking" },
  { value: "Credit & Trade", label: "Finance" },
  { value: "Training & Mentoring", label: "Banking" },
  { value: "SBP", label: "Regulatory knowledge" },
];

export const ABOUT = [
  "Athar Ramzan is a senior banking professional with more than two decades of experience spanning Corporate & Commercial Banking, Credit, Trade Finance, Foreign Trade, Branch Management, Relationship Management, Sales and Business Development.",
  "His work has covered credit analysis and proposal structuring, trade transactions, portfolio management, branch leadership, regulatory compliance and corporate relationship management. That experience connects banking theory with the realities of day-to-day banking.",
  "Today his vision extends beyond banking operations: sharing practical knowledge with banking professionals, students, entrepreneurs, businesses and organizations through training, mentoring, speaking and professional education.",
];

export const WHY_EXPERIENCE = [
  "20+ years of banking experience",
  "Hands-on corporate and commercial banking exposure",
  "Credit and risk experience",
  "Trade finance expertise",
  "Branch and relationship management experience",
  "Practical understanding of banking documentation",
  "Experience with regulatory requirements",
  "Experience coaching and supporting banking professionals",
  "Experience working with corporate clients",
];

export const EXPERTISE: [string, string][] = [
  ["Corporate & Commercial Banking", "Serving corporate and commercial clients across the banking relationship."],
  ["Credit Analysis & Proposal Structuring", "Assessing borrowers and structuring sound credit proposals."],
  ["Funded & Non-Funded Facilities", "How working capital, guarantees and LCs fit a client's needs."],
  ["Trade Finance & Foreign Trade", "Import and export transactions from documents to settlement."],
  ["Relationship Management", "Building and sustaining long-term corporate relationships."],
  ["Business Development", "Winning and growing client business responsibly."],
  ["Credit Documentation & Securities", "Getting documentation and security arrangements right."],
  ["Portfolio Monitoring & Recovery", "Watching exposures early and managing recovery."],
  ["Branch Management", "Leading branch teams, income and controls."],
  ["KYC / AML / Internal Controls", "Practical compliance in everyday banking."],
  ["SBP Regulatory Compliance", "Working within State Bank of Pakistan requirements."],
  ["UCP & Trade Documentation", "Examining documents against UCP standards."],
  ["Team Leadership", "Guiding teams toward consistent performance."],
  ["Professional Coaching & Training", "Turning experience into learning others can apply."],
];

export const CAREER: { role: string; org: string; period: string; text: string }[] = [
  { role: "Relationship Manager – Corporate / C&SME", org: "The Bank of Khyber", period: "April 2021 – Present", text: "Corporate and C&SME relationship management and credit portfolio development." },
  { role: "Branch Manager", org: "The Bank of Khyber", period: "May 2020 – April 2021", text: "Branch leadership, corporate client induction and regulatory compliance." },
  { role: "Manager – Credits & Foreign Trade", org: "The Bank of Khyber", period: "January 2008 – October 2014", text: "Credit and foreign trade, including establishing Foreign Trade Departments at multiple branches." },
  { role: "Foreign Trade Officer", org: "My Bank Limited", period: "March 2007 – January 2008", text: "Foreign trade operations." },
  { role: "Director – Sales & Marketing", org: "Globbez Electronics", period: "August 2003 – March 2007", text: "Sales and marketing leadership." },
  { role: "Assistant Manager – Sales", org: "Dewan Farooque Motors Ltd.", period: "July 2002 – August 2003", text: "Sales." },
  { role: "Assistant Manager – Marketing", org: "Dewan Farooque Motors Ltd.", period: "September 1999 – June 2002", text: "Marketing." },
];

export const ACHIEVEMENTS: {
  prefix?: string; to?: number; decimals?: number; suffix?: string; text?: string; label: string;
}[] = [
  { prefix: "Rs. ", to: 8.6, decimals: 2, suffix: " bn", label: "Credit portfolio developed, growth of Rs. 8.20 billion." },
  { prefix: "Rs. ", to: 92, suffix: " mn", label: "Approximate branch income, through induction of corporate clients." },
  { to: 5, suffix: " SBP audits", label: "Concluded without penalties during the stated career period." },
  { text: "Foreign Trade", label: "Departments established at multiple Bank of Khyber branches." },
  { text: "Recognition", label: "Letters of appreciation, multiple increments and cash awards." },
];

export const CREDENTIALS: [string, string, string][] = [
  ["Associate Chartered Banker", "Chartered Banker Institute, United Kingdom", "2019"],
  ["AIBP", "Associate of Institute of Bankers Pakistan", "2019"],
  ["FTCP – Foreign Trade Certified Professional", "National Institute of Banking & Finance", "2019"],
  ["JAIBP – Certified Professional Banker", "Institute of Bankers Pakistan", "2015"],
  ["Certified Credit Analyst", "Pakistan Credit Rating Agency (PACRA)", "2011"],
  ["High Value Certificate – Effective Branch Management", "Institute of Bankers Pakistan", "2010"],
  ["MBA – Management Information Systems", "Bahauddin Zakariya University", "1999"],
  ["Bachelor of Commerce (B.Com)", "Punjab University", "1996"],
];

export const PD_TOPICS = [
  "UCP-600 & International Standard Banking Practices",
  "Finance of Foreign Trade & Foreign Exchange",
  "Trade Sales",
  "Managing Trade in Turbulent Times",
  "SME Finance",
  "Credit Risk Analysis",
  "Branchless Banking",
  "Foreign Exchange Services",
  "Credit Documentation",
  "Advanced Credit Risk",
  "Collateral Monitoring & Pledge Management",
  "SBP Mandatory Requirements & Reporting",
  "Foreign Trade Certification",
  "Handling Discrepant Documents",
];

export const TRAINING: [string, string][] = [
  ["Credit Analysis & Credit Proposal Structuring", "Assess borrowers and build credible proposals."],
  ["Corporate & Commercial Banking", "How corporate banking works in practice."],
  ["Trade Finance & Foreign Trade", "Import, export and trade instruments explained practically."],
  ["UCP-600 & Trade Documentation", "Document examination and handling discrepancies."],
  ["Credit Documentation & Securities", "Documentation and security requirements done right."],
  ["SBP Prudential Regulations", "Understanding and applying key regulatory requirements."],
  ["KYC / AML / TBML & Internal Controls", "Controls and red flags in daily banking and trade."],
  ["Relationship Management & Business Development", "Building client relationships and business."],
  ["Branch Management", "Running a branch: people, income and controls."],
  ["SME & Commercial Banking", "Financing and serving small and mid-sized businesses."],
  ["Portfolio Management & Recovery", "Monitoring, early warning and recovery."],
  ["Banking Career Development", "Skills and planning for a banking career."],
];

export const TRAINING_FOR = [
  "Young bankers", "Relationship managers", "Credit officers", "Trade officers", "Branch managers",
  "Operations professionals", "SME and corporate bankers", "Banking students",
];

export const CORPORATE_FOR =
  "Commercial banks, microfinance banks, financial institutions, corporate organizations, SMEs, universities, business schools, training institutes, banking academies and young banking professionals.";

export const BUSINESS_TOPICS = [
  "How banks evaluate businesses", "Credit proposal preparation", "Funded and non-funded facilities",
  "Working capital finance", "Trade finance", "Bank documentation", "Banking relationships",
  "Credit risk", "Financial discipline", "SME financing", "Business banking strategy",
];

export const MENTORING_TOPICS = [
  "Career planning", "Banking interview preparation", "Relationship management", "Credit skills",
  "Trade finance", "Professional communication", "Business development", "Banking documentation",
  "Leadership development", "Transition into senior banking roles",
];

export const SPEAKING_TOPICS = [
  "From Experience to Excellence",
  "Building a Successful Banking Career",
  "Professional Discipline & Continuous Learning",
  "Turning Challenges into Opportunities",
  "Leadership & Responsibility",
  "Developing Confidence in Professional Life",
  "Learning from Failure",
  "Building a Growth Mindset",
  "Professional Ethics & Integrity",
];

export const POST_CATEGORIES = [
  "All", "Banking Insights", "Credit & Risk", "Trade Finance", "SME Banking", "SBP Regulations",
  "Leadership", "Career Development", "Motivation", "Business & Entrepreneurship",
];

/** [category, title, optional link]. Add a link when the article is published. */
export const POSTS: [string, string, string?][] = [
  ["Banking Insights", "Why Continuous Learning Matters in Banking"],
  ["Credit & Risk", "How Banks Evaluate a Credit Proposal"],
  ["Credit & Risk", "Common Mistakes in Credit Documentation"],
  ["SME Banking", "Understanding Funded vs Non-Funded Facilities"],
  ["Trade Finance", "Understanding Trade Finance in Practical Terms"],
  ["Leadership", "How Relationship Managers Can Build Stronger Corporate Relationships"],
  ["Career Development", "Career Development for Young Bankers"],
];

/** Paste profile URLs. Empty ones stay hidden until filled. */
export const SOCIAL: { name: "LinkedIn" | "YouTube" | "Facebook" | "Instagram"; url: string }[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/YOUR-USERNAME" },
  { name: "YouTube", url: "https://www.youtube.com/@YOUR-CHANNEL" },
  { name: "Facebook", url: "https://www.facebook.com/YOUR-PAGE" },
  { name: "Instagram", url: "https://www.instagram.com/YOUR-HANDLE" },
];

/** Add real feedback here: { quote, name, role }. The section shows a placeholder while empty. */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

export const SERVICES: { title: string; text: string }[] = [
  { title: "Book a training session", text: "Practical banking training for individuals and teams." },
  { title: "Request corporate training", text: "A custom program for your bank, institution or organization." },
  { title: "Invite me as a speaker", text: "Experience-based talks for banks, universities and gatherings." },
  { title: "Book a mentoring session", text: "One-to-one guidance for your banking career." },
  { title: "Business / banking consultation", text: "Understand how banks evaluate and serve businesses." },
  { title: "Partner with me", text: "Collaborations in banking education and professional growth." },
];
export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Request training (specific topic)"];
