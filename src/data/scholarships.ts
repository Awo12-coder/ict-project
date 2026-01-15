export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  providerType: 'university' | 'government' | 'private' | 'international';
  description: string;
  fullDescription: string;
  eligibility: {
    level: 'undergraduate' | 'postgraduate' | 'both';
    fields: string[];
    requirements: string[];
  };
  amount: number;
  amountType: 'full' | 'partial';
  currency: string;
  deadline: string;
  location: 'local' | 'international';
  applicationProcess: string[];
  requiredDocuments: string[];
  contactEmail: string;
  externalLink: string;
  featured: boolean;
  tags: string[];
}

export const scholarships: Scholarship[] = [
  {
    id: "1",
    title: "Bells University Academic Excellence Award",
    provider: "Bells University of Technology",
    providerType: "university",
    description: "Full tuition scholarship for outstanding students maintaining a CGPA of 4.5 and above.",
    fullDescription: "The Academic Excellence Award is Bells University's flagship scholarship program designed to reward and support students who demonstrate exceptional academic performance. This prestigious award covers full tuition fees and provides additional support for academic materials. Recipients are expected to maintain their academic standing and contribute positively to the university community through mentorship and academic leadership.",
    eligibility: {
      level: "both",
      fields: ["All Fields"],
      requirements: [
        "Minimum CGPA of 4.5",
        "No disciplinary record",
        "Active participation in academic activities",
        "Nigerian citizenship"
      ]
    },
    amount: 2500000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-03-15",
    location: "local",
    applicationProcess: [
      "Complete online application form",
      "Submit academic transcripts",
      "Provide two academic references",
      "Write a 500-word personal statement",
      "Attend interview if shortlisted"
    ],
    requiredDocuments: [
      "Academic transcripts",
      "Letter of recommendation from HOD",
      "Personal statement",
      "Valid student ID",
      "Passport photographs"
    ],
    contactEmail: "scholarships@bellsuniversity.edu.ng",
    externalLink: "https://bellsuniversity.edu.ng/scholarships",
    featured: true,
    tags: ["merit-based", "full-funding", "academic"]
  },
  {
    id: "2",
    title: "STEM Innovation Scholarship",
    provider: "Nigerian Government - TETFund",
    providerType: "government",
    description: "Supporting future innovators in Science, Technology, Engineering, and Mathematics fields.",
    fullDescription: "The STEM Innovation Scholarship is a government initiative under TETFund to promote excellence in science and technology education. This scholarship aims to produce the next generation of Nigerian scientists, engineers, and technologists who will drive national development. Recipients receive comprehensive financial support and access to research facilities and mentorship programs.",
    eligibility: {
      level: "undergraduate",
      fields: ["Computer Science", "Engineering", "Physics", "Mathematics", "Chemistry"],
      requirements: [
        "Minimum CGPA of 4.0",
        "Nigerian citizen",
        "Currently enrolled in a STEM program",
        "Demonstrated interest in research"
      ]
    },
    amount: 1500000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-04-30",
    location: "local",
    applicationProcess: [
      "Register on TETFund scholarship portal",
      "Complete application form",
      "Submit required documents",
      "Take aptitude test",
      "Interview with selection committee"
    ],
    requiredDocuments: [
      "Birth certificate or age declaration",
      "Academic transcripts",
      "JAMB result",
      "State of origin certificate",
      "Research proposal (optional)"
    ],
    contactEmail: "stemscholarship@tetfund.gov.ng",
    externalLink: "https://tetfund.gov.ng/scholarships",
    featured: true,
    tags: ["STEM", "government", "research"]
  },
  {
    id: "3",
    title: "Women in Technology Scholarship",
    provider: "Microsoft Nigeria",
    providerType: "private",
    description: "Empowering female students pursuing careers in technology and computer science.",
    fullDescription: "Microsoft Nigeria's Women in Technology Scholarship is designed to address the gender gap in the tech industry by supporting talented female students. This comprehensive program provides financial assistance, mentorship from industry professionals, internship opportunities, and access to Microsoft's global network of technology leaders.",
    eligibility: {
      level: "undergraduate",
      fields: ["Computer Science", "Software Engineering", "Information Technology", "Cybersecurity"],
      requirements: [
        "Female students only",
        "Minimum CGPA of 3.5",
        "Passion for technology",
        "Leadership potential"
      ]
    },
    amount: 1000000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-02-28",
    location: "local",
    applicationProcess: [
      "Apply through Microsoft Scholarship Portal",
      "Submit video introduction",
      "Complete technical assessment",
      "Virtual interview"
    ],
    requiredDocuments: [
      "Academic transcripts",
      "CV/Resume",
      "Personal statement on tech goals",
      "Portfolio of projects (if any)"
    ],
    contactEmail: "scholarships@microsoft.com.ng",
    externalLink: "https://microsoft.com/scholarships",
    featured: true,
    tags: ["women", "technology", "diversity"]
  },
  {
    id: "4",
    title: "Commonwealth Shared Scholarship",
    provider: "Commonwealth Scholarship Commission",
    providerType: "international",
    description: "Full funding for postgraduate study at UK universities for developing country students.",
    fullDescription: "The Commonwealth Shared Scholarship is jointly funded by the UK Foreign, Commonwealth and Development Office and UK universities. It provides full financial support for students from developing Commonwealth countries to pursue Master's degrees in the UK, contributing to sustainable development goals and building global partnerships.",
    eligibility: {
      level: "postgraduate",
      fields: ["All Fields"],
      requirements: [
        "Citizen of eligible Commonwealth country",
        "Bachelor's degree (Upper Second Class minimum)",
        "Unable to afford UK study without scholarship",
        "Not previously studied in developed country"
      ]
    },
    amount: 15000000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-01-10",
    location: "international",
    applicationProcess: [
      "Apply through university's online system",
      "Select Commonwealth Shared Scholarship",
      "Submit all required documents",
      "Await university nomination"
    ],
    requiredDocuments: [
      "Degree certificates and transcripts",
      "Two academic references",
      "Personal statement",
      "English language qualification",
      "Passport copy"
    ],
    contactEmail: "info@cscuk.org.uk",
    externalLink: "https://cscuk.fcdo.gov.uk",
    featured: true,
    tags: ["international", "UK", "masters"]
  },
  {
    id: "5",
    title: "Dangote Foundation Scholarship",
    provider: "Dangote Foundation",
    providerType: "private",
    description: "Supporting exceptional Nigerian students in engineering and business management.",
    fullDescription: "The Dangote Foundation Scholarship Program is one of Nigeria's most prestigious private scholarships, aimed at developing future leaders in engineering and business. This program reflects the foundation's commitment to education as a driver of national development and provides comprehensive support including tuition, living expenses, and industry exposure.",
    eligibility: {
      level: "undergraduate",
      fields: ["Engineering", "Business Administration", "Economics", "Accounting"],
      requirements: [
        "Nigerian citizen",
        "Minimum CGPA of 4.0",
        "Demonstrated financial need",
        "Community involvement"
      ]
    },
    amount: 2000000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-05-31",
    location: "local",
    applicationProcess: [
      "Apply online through Dangote Foundation portal",
      "Complete financial needs assessment",
      "Submit academic records",
      "Community service documentation",
      "Final interview"
    ],
    requiredDocuments: [
      "Academic transcripts",
      "Proof of family income",
      "Community service certificates",
      "Personal statement",
      "Recommendation letters"
    ],
    contactEmail: "scholarships@dangote.com",
    externalLink: "https://dangote.com/foundation",
    featured: false,
    tags: ["engineering", "business", "need-based"]
  },
  {
    id: "6",
    title: "Agbami Medical Scholarship",
    provider: "Agbami Parties",
    providerType: "private",
    description: "Comprehensive scholarship for medical and health sciences students.",
    fullDescription: "The Agbami Medical and Engineering Scholarship is a CSR initiative by the Agbami Parties aimed at developing human capital in critical sectors. The medical track supports students pursuing various health-related disciplines, providing full tuition coverage and additional allowances for books and equipment.",
    eligibility: {
      level: "undergraduate",
      fields: ["Medicine", "Nursing", "Pharmacy", "Medical Laboratory Science", "Public Health"],
      requirements: [
        "Nigerian citizen from oil-producing states",
        "Minimum CGPA of 3.5",
        "Currently in 200 level or above",
        "Financial need"
      ]
    },
    amount: 1800000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-06-15",
    location: "local",
    applicationProcess: [
      "Online application submission",
      "Aptitude test",
      "Document verification",
      "Interview"
    ],
    requiredDocuments: [
      "Academic transcripts",
      "State of origin certificate",
      "Admission letter",
      "Passport photographs",
      "Bank statement"
    ],
    contactEmail: "agbamischolarship@staroilandgas.com",
    externalLink: "https://agbamischolarship.com",
    featured: false,
    tags: ["medical", "health", "oil-and-gas"]
  },
  {
    id: "7",
    title: "Fulbright Foreign Student Program",
    provider: "U.S. Department of State",
    providerType: "international",
    description: "Prestigious scholarship for graduate study in the United States.",
    fullDescription: "The Fulbright Program is the flagship international educational exchange program sponsored by the U.S. government. It offers full funding for graduate study at U.S. universities, including tuition, living expenses, health insurance, and round-trip airfare. The program aims to increase mutual understanding between Americans and people of other countries.",
    eligibility: {
      level: "postgraduate",
      fields: ["All Fields"],
      requirements: [
        "Bachelor's degree",
        "Strong academic record",
        "English proficiency",
        "Leadership potential",
        "Commitment to return to home country"
      ]
    },
    amount: 25000000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-02-15",
    location: "international",
    applicationProcess: [
      "Apply through Fulbright Nigeria website",
      "Submit application essays",
      "Take English proficiency test",
      "Interview with Fulbright Commission"
    ],
    requiredDocuments: [
      "Transcripts and degree certificates",
      "Three letters of recommendation",
      "Statement of purpose",
      "CV/Resume",
      "TOEFL/IELTS scores"
    ],
    contactEmail: "nigeria@fulbright.edu",
    externalLink: "https://ng.usembassy.gov/fulbright",
    featured: true,
    tags: ["USA", "graduate", "prestigious"]
  },
  {
    id: "8",
    title: "MTN Foundation Scholarship",
    provider: "MTN Nigeria Foundation",
    providerType: "private",
    description: "Annual scholarship supporting Nigerian students across all disciplines.",
    fullDescription: "The MTN Foundation Scholarship Scheme is one of Nigeria's largest corporate scholarship programs, supporting thousands of students annually. The scheme is open to students in Nigerian tertiary institutions and aims to reduce the financial burden of education while encouraging academic excellence.",
    eligibility: {
      level: "undergraduate",
      fields: ["All Fields"],
      requirements: [
        "Nigerian citizen",
        "Minimum CGPA of 3.0",
        "100 level to penultimate year",
        "Not receiving any other scholarship"
      ]
    },
    amount: 200000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-04-15",
    location: "local",
    applicationProcess: [
      "Register on MTN Foundation portal",
      "Complete scholarship application",
      "Upload required documents",
      "Await selection results"
    ],
    requiredDocuments: [
      "Admission letter",
      "Academic transcripts",
      "Local government identification",
      "Passport photograph"
    ],
    contactEmail: "foundation@mtn.com.ng",
    externalLink: "https://mtn.ng/foundation",
    featured: false,
    tags: ["corporate", "all-fields", "annual"]
  },
  {
    id: "9",
    title: "African Leadership University Scholarship",
    provider: "African Leadership University",
    providerType: "international",
    description: "Need-based scholarship for study at ALU campuses in Rwanda or Mauritius.",
    fullDescription: "The African Leadership University offers need-blind admissions and provides scholarships to ensure talented African students can access world-class education regardless of their financial situation. The scholarship covers tuition and can include accommodation and living expenses based on demonstrated need.",
    eligibility: {
      level: "undergraduate",
      fields: ["Business", "Computer Science", "Engineering", "Global Challenges"],
      requirements: [
        "African citizen",
        "Completed secondary education",
        "Strong academic record",
        "Leadership experience"
      ]
    },
    amount: 8000000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-03-01",
    location: "international",
    applicationProcess: [
      "Apply through ALU website",
      "Complete application essays",
      "Submit video interview",
      "Virtual assessment day"
    ],
    requiredDocuments: [
      "Secondary school transcripts",
      "School leaving certificate",
      "Personal statement",
      "Recommendation letter"
    ],
    contactEmail: "admissions@alueducation.com",
    externalLink: "https://alueducation.com",
    featured: false,
    tags: ["Africa", "leadership", "innovation"]
  },
  {
    id: "10",
    title: "Shell Nigeria University Scholarship",
    provider: "Shell Petroleum Development Company",
    providerType: "private",
    description: "Scholarship for students in engineering and geosciences from Niger Delta states.",
    fullDescription: "Shell Nigeria's University Scholarship is part of the company's commitment to developing local talent in the oil and gas sector. The scholarship supports students from the Niger Delta region pursuing studies in disciplines relevant to the energy industry, providing full tuition coverage and industry mentorship.",
    eligibility: {
      level: "undergraduate",
      fields: ["Petroleum Engineering", "Geology", "Geophysics", "Chemical Engineering", "Mechanical Engineering"],
      requirements: [
        "From Niger Delta state",
        "Minimum CGPA of 3.5",
        "Studying relevant discipline",
        "Not receiving another scholarship"
      ]
    },
    amount: 1500000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-05-01",
    location: "local",
    applicationProcess: [
      "Apply through Shell LiveWIRE portal",
      "Complete online assessment",
      "Document verification",
      "Interview"
    ],
    requiredDocuments: [
      "Proof of Niger Delta origin",
      "Academic transcripts",
      "Admission letter",
      "Essay on career goals"
    ],
    contactEmail: "scholarships@shell.com.ng",
    externalLink: "https://shell.com.ng/scholarships",
    featured: false,
    tags: ["oil-gas", "engineering", "niger-delta"]
  },
  {
    id: "11",
    title: "NNPC/Total Scholarship Award",
    provider: "NNPC/Total E&P Nigeria",
    providerType: "private",
    description: "Joint scholarship for students in oil and gas related disciplines.",
    fullDescription: "The NNPC/Total National Merit Scholarship is awarded to high-achieving Nigerian students studying disciplines relevant to the oil and gas industry. This prestigious award recognizes academic excellence and aims to develop a pipeline of skilled professionals for Nigeria's energy sector.",
    eligibility: {
      level: "undergraduate",
      fields: ["Engineering", "Geosciences", "Environmental Science", "Chemistry"],
      requirements: [
        "Nigerian citizen",
        "Minimum CGPA of 4.0",
        "200 level and above",
        "Demonstrated excellence"
      ]
    },
    amount: 1200000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-07-31",
    location: "local",
    applicationProcess: [
      "Apply online during application window",
      "Take online aptitude test",
      "Submit academic records",
      "Await selection"
    ],
    requiredDocuments: [
      "Academic transcripts",
      "Admission letter",
      "Valid ID",
      "Passport photograph"
    ],
    contactEmail: "scholarship@total.com.ng",
    externalLink: "https://scholarship.total.com.ng",
    featured: false,
    tags: ["NNPC", "oil-gas", "merit"]
  },
  {
    id: "12",
    title: "Bells University Sports Excellence Scholarship",
    provider: "Bells University of Technology",
    providerType: "university",
    description: "Scholarship for student athletes who excel in sports while maintaining academic standards.",
    fullDescription: "The Sports Excellence Scholarship recognizes and supports student athletes who represent Bells University in various sporting competitions. This scholarship encourages the development of sporting talents while ensuring academic progress, embodying the university's commitment to holistic student development.",
    eligibility: {
      level: "undergraduate",
      fields: ["All Fields"],
      requirements: [
        "Active member of university sports team",
        "Represented university in competitions",
        "Minimum CGPA of 2.5",
        "Good conduct record"
      ]
    },
    amount: 800000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-08-15",
    location: "local",
    applicationProcess: [
      "Nomination by Sports Director",
      "Submit application form",
      "Performance evaluation",
      "Committee review"
    ],
    requiredDocuments: [
      "Sports participation certificates",
      "Academic transcripts",
      "Recommendation from coach",
      "Medical fitness certificate"
    ],
    contactEmail: "sports@bellsuniversity.edu.ng",
    externalLink: "https://bellsuniversity.edu.ng/sports-scholarship",
    featured: false,
    tags: ["sports", "athletics", "talent"]
  },
  {
    id: "13",
    title: "Chevening Scholarship",
    provider: "UK Government",
    providerType: "international",
    description: "UK government's flagship scholarship for future leaders to study Master's in the UK.",
    fullDescription: "Chevening Scholarships are the UK government's global scholarship programme, funded by the Foreign, Commonwealth and Development Office. These prestigious awards support outstanding emerging leaders from around the world to pursue one-year Master's degrees in the UK. The scholarship includes full tuition, living expenses, flights, and various exclusive events.",
    eligibility: {
      level: "postgraduate",
      fields: ["All Fields"],
      requirements: [
        "Bachelor's degree",
        "At least 2 years work experience",
        "Return to home country for 2 years after study",
        "Apply to 3 eligible UK universities"
      ]
    },
    amount: 20000000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-11-05",
    location: "international",
    applicationProcess: [
      "Apply online during application window",
      "Submit references and documents",
      "Interview with British High Commission",
      "Accept offer and choose university"
    ],
    requiredDocuments: [
      "Degree certificates",
      "Two references",
      "Proof of work experience",
      "English language test",
      "Passport"
    ],
    contactEmail: "nigeria@chevening.org",
    externalLink: "https://chevening.org",
    featured: true,
    tags: ["UK", "leadership", "prestigious"]
  },
  {
    id: "14",
    title: "First Bank Endowment Scholarship",
    provider: "First Bank of Nigeria",
    providerType: "private",
    description: "Supporting bright students in banking, finance, and economics studies.",
    fullDescription: "The First Bank Endowment Scholarship is a corporate social responsibility initiative aimed at nurturing the next generation of Nigerian financial professionals. The scholarship supports students in banking and finance-related disciplines, providing financial assistance and exposure to the banking industry through internship opportunities.",
    eligibility: {
      level: "undergraduate",
      fields: ["Banking & Finance", "Economics", "Accounting", "Business Administration"],
      requirements: [
        "Nigerian citizen",
        "Minimum CGPA of 3.5",
        "300 level and above",
        "Interest in banking career"
      ]
    },
    amount: 500000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-09-30",
    location: "local",
    applicationProcess: [
      "Apply through FirstBank website",
      "Complete application form",
      "Submit required documents",
      "Assessment and interview"
    ],
    requiredDocuments: [
      "Academic transcripts",
      "Admission letter",
      "Essay on banking industry",
      "Reference letter"
    ],
    contactEmail: "scholarship@firstbanknigeria.com",
    externalLink: "https://firstbanknigeria.com/scholarships",
    featured: false,
    tags: ["banking", "finance", "corporate"]
  },
  {
    id: "15",
    title: "PTDF Overseas Scholarship",
    provider: "Petroleum Technology Development Fund",
    providerType: "government",
    description: "Government scholarship for postgraduate study abroad in petroleum-related fields.",
    fullDescription: "The PTDF Overseas Scholarship Scheme (OSS) is designed to develop Nigerian human capacity in the oil and gas sector by sponsoring qualified Nigerians for postgraduate studies in top universities around the world. The scholarship covers tuition, living allowance, and other approved costs for the duration of the programme.",
    eligibility: {
      level: "postgraduate",
      fields: ["Petroleum Engineering", "Geology", "Geophysics", "Chemical Engineering", "Project Management"],
      requirements: [
        "Nigerian citizen",
        "First degree with minimum Second Class Upper",
        "Under 35 years of age",
        "Work experience in oil and gas preferred"
      ]
    },
    amount: 18000000,
    amountType: "full",
    currency: "NGN",
    deadline: "2025-04-01",
    location: "international",
    applicationProcess: [
      "Apply on PTDF website during window",
      "Take aptitude screening test",
      "Submit documents for verification",
      "Oral interview"
    ],
    requiredDocuments: [
      "Degree certificate and transcript",
      "NYSC certificate",
      "Birth certificate",
      "Local government certificate",
      "Passport"
    ],
    contactEmail: "scholarship@ptdf.gov.ng",
    externalLink: "https://ptdf.gov.ng/scholarship",
    featured: false,
    tags: ["petroleum", "overseas", "government"]
  },
  {
    id: "16",
    title: "Bells University Need-Based Grant",
    provider: "Bells University of Technology",
    providerType: "university",
    description: "Financial assistance for students facing economic hardship.",
    fullDescription: "The Need-Based Grant program at Bells University provides essential financial support to students who demonstrate significant financial need. This program ensures that capable students are not denied educational opportunities due to economic circumstances, reflecting the university's commitment to accessible education.",
    eligibility: {
      level: "both",
      fields: ["All Fields"],
      requirements: [
        "Demonstrated financial need",
        "Minimum CGPA of 2.5",
        "Good academic standing",
        "Submitted financial aid application"
      ]
    },
    amount: 600000,
    amountType: "partial",
    currency: "NGN",
    deadline: "2025-10-15",
    location: "local",
    applicationProcess: [
      "Submit financial aid application",
      "Provide proof of financial need",
      "Interview with financial aid office",
      "Committee review and decision"
    ],
    requiredDocuments: [
      "Parents' income statements",
      "Bank statements",
      "Letter explaining financial situation",
      "Academic transcripts"
    ],
    contactEmail: "financialaid@bellsuniversity.edu.ng",
    externalLink: "https://bellsuniversity.edu.ng/financial-aid",
    featured: false,
    tags: ["need-based", "financial-aid", "university"]
  }
];

export const fieldsOfStudy = [
  "All Fields",
  "Computer Science",
  "Engineering",
  "Business Administration",
  "Medicine",
  "Law",
  "Economics",
  "Accounting",
  "Pharmacy",
  "Nursing",
  "Physics",
  "Mathematics",
  "Chemistry"
];

export const providerTypes = [
  { value: "university", label: "University" },
  { value: "government", label: "Government" },
  { value: "private", label: "Private Organization" },
  { value: "international", label: "International" }
];
