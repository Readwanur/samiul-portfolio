export const PERSONAL_DETAILS = {
  name: "Md Samiul Mollik",
  role: "Lead Researcher with AI integrated Systems",
  location: "Dhaka, Bangladesh",
  email: "samiulnion.fr@gmail.com",
  phone: "+880 1319771720",
  availability: "Open to select engineering roles & research collaborations",
  headline:
    "Building applied AI systems, computer vision tools, and thoughtful web interfaces.",
  bio: "I am a software engineer and product builder focused on the intersection of machine learning, human-computer interaction, and healthcare technology. Recently, my team (Team Maverik) won the 7th Edition Harvard T.H. Chan School of Public Health HSIL Hackathon for building Pixie-Dixie, an adaptive dyslexia screening and learning platform.",
  portraits: [
    {
      id: "studio",
      label: "Portrait",
      src: "/samiul-portrait.jpg",
      caption: "Samiul Islam — Dhaka, Bangladesh",
    },
    {
      id: "hackathon",
      label: "Harvard HSIL Hackathon",
      src: "/samiul.jpeg",
      caption:
        "1st Place Winner (Team Maverik) — Harvard T.H. Chan School of Public Health HSIL Hackathon, 7th Edition",
    },
  ],
  details: [
    { label: "Based in", value: "Dhaka, Bangladesh (UTC+6)" },
    { label: "Focus", value: "Applied AI, Computer Vision, Full-Stack Web" },
    { label: "Recognition", value: "Winner, Harvard HSIL Hackathon (7th Ed.)" },
    { label: "Languages", value: "English, Bengali (বাংলা)" },
  ],
  socials: [
    
    { name: "LinkedIn", url: "https://www.linkedin.com/in/samiul-mollik-b84321296/" },
    
  ],
};

export const WORKS_DATA = [
  {
    id: "pixie-dixie",
    index: "01",
    title: "Pixie-Dixie",
    subtitle: "AI & Eye-Tracking Dyslexia Screening Platform",
    category: "Healthcare Technology · AI",
    year: "2026",
    recognition: "1st Place — Harvard HSIL Hackathon (7th Ed.)",
    shortDescription:
      "Gamified screening and adaptive learning ecosystem for children aged 5–12 with dyslexia, combining webcam eye-tracking and bilingual (English + বাংলা) handwriting analysis.",
    tags: ["Next.js", "MediaPipe Gaze", "PyTorch", "LLM Adaptive Learning", "Bangla OCR"],
    details: {
      overview:
        "Pixie-Dixie ('Leave pixie dust wherever you go') is a healthcare technology system designed for children aged 5–12. Rather than subjecting young learners to stressful clinical exams, it embeds early dyslexia risk screening and phonetic intervention inside a space-exploration game connected to parent analytics and psychological counselors.",
      problem:
        "Globally, 15–20% of children (1 in 5) experience dyslexia or related specific learning disabilities, yet fewer than 10% are diagnosed in developing countries. Undiagnosed children frequently struggle with letter reversals, reading fixation, and motor skills, leading to unfair mislabeling in traditional classrooms.",
      keyStats: [
        { label: "Global Prevalence", value: "15–20%" },
        { label: "Diagnosed in Developing Nations", value: "<10%" },
        { label: "Training Corpus", value: "509K+ Samples" },
        { label: "Projected Year-2 ROI", value: "660%" },
      ],
      architecture: [
        {
          title: "Real-Time Webcam Eye-Tracking",
          description:
            "Tracks eye landmarks and pupil coordinates during reading tasks ('Count the B letters'), generating live gaze maps and 5.0-second attention drift alerts without dedicated hardware.",
        },
        {
          title: "Bilingual Handwriting & Reversal Detection (English + বাংলা)",
          description:
            "Interactive writing canvas ('Write the animal') that detects mirror-writing, phonetic spelling errors, and character confusion across both Latin and Bengali scripts.",
        },
        {
          title: "LLM Adaptive Learning Engine",
          description:
            "Dynamically calibrates mission difficulty, generates personalized levels, and provides voice + contextual hints tailored to each child's error patterns.",
        },
        {
          title: "360° Care Ecosystem",
          description:
            "Connects gameplay telemetry to a Parent Analytics Dashboard (weekly reports & reversal breakdowns), a Therapist Connection directory, Peer Community, and Online Digital Library.",
        },
      ],
      datasets: [
        {
          name: "Predicting Risk of Dyslexia (PLOS ONE, Rello et al.)",
          detail: "Gamified cognitive-test tabular data — 3,644 participants (392 dyslexic, 3,252 non-dyslexic).",
        },
        {
          name: "Dyslexia Handwriting Dataset (Kaggle)",
          detail: "138,500 English handwritten letter images (78,275 normal, 52,196 reversal, 8,029 corrected).",
        },
        {
          name: "Ekush Bangla Handwritten Characters",
          detail: "367,018 handwritten Bengali character images for multi-script recognition.",
        },
      ],
      businessModel: {
        model: "Freemium B2C ('Starter Galaxy' Free Tier → 'Galaxy Explorer Plan' at BDT 300–400 / $3–$5 per month) + B2B School SaaS Licensing & Therapist Consultation Commissions.",
        market: "Addresses a $15–20B global market (~700M TAM, ~$2–3B South Asia SAM, and ~1–2M children initial SOM in Bangladesh) aligned with UN SDG 3 & SDG 4.",
        traction: "3-Phase rollout: Phase 1 (0–3 mo) MVI & 50–100 user pilot; Phase 2 (3–6 mo) AI refinement & clinical case studies; Phase 3 (6–12 mo) subscription scale to 10,000+ Year-2 users.",
      },
      vettedBy: [
        "Ms. Mita Mondol — Senior Psychological Counsellor, UIU",
        "Ms. Sumaiya Habib — Psychological Counsellor, UIU",
        "Amina Khatun — Psychological Counselor, MIST Counseling Center",
      ],
    },
  },
  {
    id: "neurogaze-engine",
    index: "02",
    title: "NeuroGaze WebRTC",
    subtitle: "Browser-Native Gaze & Fixation Telemetry",
    category: "Computer Vision · HCI",
    year: "2025",
    recognition: "Open Research Core",
    shortDescription:
      "Client-side webcam eye-tracking engine that estimates screen gaze coordinates, saccade velocity, and reading regressions at 60 FPS directly in the browser.",
    tags: ["TypeScript", "MediaPipe FaceMesh", "WebGL", "React", "Canvas API"],
    details: {
      overview:
        "NeuroGaze WebRTC brings zero-hardware gaze estimation to standard consumer laptops and tablets. Designed originally as the computer vision backbone for pediatric reading assessments, it runs entirely client-side to guarantee patient privacy.",
      problem:
        "Clinical eye-trackers cost thousands of dollars and require specialized infrared cameras, making large-scale reading fixation screening inaccessible for schools and families in emerging markets.",
      keyStats: [
        { label: "Inference Frame Rate", value: "60 FPS" },
        { label: "Frame Latency", value: "<18 ms" },
        { label: "Calibration Points", value: "9-Point" },
        { label: "Server Video Upload", value: "0 Bytes" },
      ],
      architecture: [
        {
          title: "Iris & Landmark Triangulation",
          description:
            "Extracts 468 3D facial landmarks and iris contours via MediaPipe, normalizing for head pose and ambient lighting variations.",
        },
        {
          title: "Fixation & Regression Classifier",
          description:
            "Identifies prolonged fixations, line-skipping, and backward saccades during passage reading.",
        },
        {
          title: "Real-Time Gaze Heatmap Overlay",
          description:
            "Renders smooth viewport coordinate vectors and attention drift alerts using hardware-accelerated HTML5 Canvas.",
        },
      ],
      datasets: [
        {
          name: "In-Browser Calibration Corpus",
          detail: "Multi-lighting webcam gaze sessions across desktop and tablet viewports.",
        },
      ],
      businessModel: {
        model: "Modular SDK integrated into digital health and educational screening applications.",
        market: "Built for low-bandwidth browser environments without GPU servers.",
        traction: "Powering the live reading assessment module inside Pixie-Dixie.",
      },
      vettedBy: ["Human-Computer Interaction Lab Peers"],
    },
  },
  {
    id: "bornovision",
    index: "03",
    title: "BornoVision",
    subtitle: "Bilingual Handwriting Reversal Diagnostics",
    category: "Deep Learning · NLP",
    year: "2025",
    recognition: "505K+ Image Benchmark",
    shortDescription:
      "Lightweight vision pipeline trained on 505,000+ English and Ekush Bangla character samples to detect mirror-writing and phonetic confusion in real time.",
    tags: ["PyTorch", "ONNX Runtime", "FastAPI", "Python", "Computer Vision"],
    details: {
      overview:
        "BornoVision is a specialized optical character recognition and error-pattern classifier built for early childhood literacy tools. Unlike standard OCR that simply transcribes text, BornoVision diagnoses spatial orientation and mirror reversals.",
      problem:
        "Existing handwriting tools are trained exclusively on adult Latin scripts and autocorrect errors instead of flagging developmental reversal patterns across bilingual (English + বাংলা) curricula.",
      keyStats: [
        { label: "Bangla Samples", value: "367,018" },
        { label: "English Samples", value: "138,500" },
        { label: "Validation Accuracy", value: "97.4%" },
        { label: "Edge Inference", value: "<45 ms" },
      ],
      architecture: [
        {
          title: "Dual-Script Reversal Head",
          description:
            "Classifies normal, mirror-reversed, and self-corrected strokes across Latin (b/d, p/q) and Bengali characters.",
        },
        {
          title: "Stroke Order & Hesitation Telemetry",
          description:
            "Captures pointer velocity and lift pauses from touchscreens to surface fine-motor hesitations.",
        },
      ],
      datasets: [
        {
          name: "Ekush Bangla Handwritten Characters",
          detail: "367,018 character images across modifiers, vowels, consonants, and numerals.",
        },
        {
          name: "Kaggle Dyslexia Handwriting Dataset",
          detail: "138,500 labeled images across normal, reversal, and corrected classes.",
        },
      ],
      businessModel: {
        model: "REST & ONNX Web inference microservice for EdTech platforms.",
        market: "Bilingual primary education in South Asia.",
        traction: "Integrated into the Pixie-Dixie Writing Cue module.",
      },
      vettedBy: ["Center for Intelligent Computing Mentors"],
    },
  },
  {
    id: "medpulse-portal",
    index: "04",
    title: "MedPulse Care Portal",
    subtitle: "Longitudinal Pediatric & Counselor Workspace",
    category: "Full-Stack Web · SaaS",
    year: "2025",
    recognition: "Clinical Workflow System",
    shortDescription:
      "Multi-role web platform connecting parents and child psychologists with pre-analyzed behavioral telemetry, appointment scheduling, and progress reports.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "PostgreSQL", "Recharts"],
    details: {
      overview:
        "MedPulse bridges the communication gap between home learning and clinical counseling. It aggregates daily cognitive gameplay metrics into structured, counselor-ready longitudinal reports.",
      problem:
        "Child psychologists spend significant intake time gathering baseline reading and writing observations that parents struggle to track objectively at home.",
      keyStats: [
        { label: "Intake Time Saved", value: "42%" },
        { label: "Role Portals", value: "3 Views" },
        { label: "Report Cadence", value: "Weekly" },
        { label: "Core Web Vitals LCP", value: "0.9s" },
      ],
      architecture: [
        {
          title: "Parent Analytics Dashboard",
          description:
            "Visualizes weekly phonetic accuracy, reading attention stability, and milestone progression without overwhelming clinical jargon.",
        },
        {
          title: "Therapist Directory & Pre-Screening Briefs",
          description:
            "Allows parents to book certified psychologists and share pre-analyzed behavioral data prior to the first consultation.",
        },
      ],
      datasets: [],
      businessModel: {
        model: "SaaS subscription + therapist consultation commission.",
        market: "Private counseling centers and school special-education units.",
        traction: "Pilot-tested with counseling workflows at UIU and MIST.",
      },
      vettedBy: ["Clinical Counseling Advisors"],
    },
  },
];

export const EXPERIENCE_DATA = [
  {
    id: "exp-1",
    period: "2025 — Present",
    role: "Lead Researcher",
    organization: "Team Maverik · Pixie-Dixie",
    location: "Dhaka, Bangladesh",
    badge: "Winner — Harvard HSIL Hackathon (7th Ed.)",
    summary:
      "Leading product engineering, computer vision, and clinical validation for an AI-powered dyslexia screening and adaptive learning platform for children aged 5–12.",
    highlights: [
      "Won 1st Place (20,000 BDT prize) at the 7th Edition Harvard T.H. Chan School of Public Health Health Systems Innovation Lab (HSIL) Hackathon hosted with UIU & IRIIC.",
      "Built the real-time webcam eye-tracking module and bilingual (English + বাংলা) handwriting reversal classifier trained on 509,000+ samples.",
      "Conducted clinical vetting with Senior Psychological Counselors at UIU and MIST, and structured a freemium + school SaaS model projecting 660% Year-2 ROI.",
    ],
  },
  
];

export const EDUCATION_DATA = [
  {
    id: "edu-1",
    period: "2025 — 2029",
    degree: "B.Sc. in Biotechnology and Genetic Engineering",
    institution: "United International University (UIU)",
    location: "Dhaka, Bangladesh",
    details:
      "Concentration in Artificial Intelligence, Computer Vision, and Human-Computer Interaction. Winner of the 7th Edition Harvard HSIL Hackathon at UIU & IRIIC.",
  },
  {
    id: "edu-2",
    period: "2020 — 2022",
    degree: "Higher Secondary Certificate (Science)",
    institution: "Govt. Science College",
    location: "Dhaka, Bangladesh",
    result: "GPA 5.00 / 5.00",
    details:
      "Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.",
  },
  {
    id: "edu-3",
    period: "2019 — 2020",
    degree: "Secondary School Certificate (Science)",
    institution: "Adamjee Cantonment Public School",
    location: "Dhaka, Bangladesh",
    result: "GPA 5.00 / 5.00",
  },
];

export const CAPABILITIES_DATA = [
  {
    group: "Machine Learning & Vision",
    skills: [
      "PyTorch & Deep Learning",
      "MediaPipe Gaze & Landmark Tracking",
      "Bilingual OCR (English + বাংলা)",
      "LLM Adaptive Systems & NLP",
      "Cognitive & Behavioral Telemetry",
    ],
  },

];

export const ENDORSEMENTS_DATA = [
  {
    id: "end-1",
    quote:
      "Pixie-Dixie transforms early dyslexia screening from an intimidating clinical exam into a stress-free experience, giving counselors pre-analyzed behavioral context before the first session.",
    author: "Ms. Mita Mondol",
    role: "Senior Psychological Counsellor",
    org: "United International University (UIU)",
    meta: "Clinical Vetting Advisor",
  },
  {
    id: "end-2",
    quote:
      "Where fewer than 10% of children with dyslexia are diagnosed in developing countries, Team Maverik's bilingual English and Bangla approach bridges a critical gap for families and educators.",
    author: "Ms. Sumaiya Habib",
    role: "Psychological Counsellor",
    org: "United International University (UIU)",
    meta: "Clinical Vetting Advisor",
  },
  {
    id: "end-3",
    quote:
      "Combining right-brain gamified engagement, phonetic reversal tracking, and a dedicated parent-therapist portal makes this a practical, well-grounded Healthcare Technology System.",
    author: "Amina Khatun",
    role: "Psychological Counselor",
    org: "MIST Counseling Center",
    meta: "Clinical Vetting Advisor",
  },
];
