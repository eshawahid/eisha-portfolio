// All content on this site is sourced directly from Eisha Wahid's resume.
// Update this single file to update the whole site.

export const profile = {
  name: "Eisha Wahid",
  roles: [
    "Artificial Intelligence Engineer",
    "Machine Learning Engineer",
    "Computer Vision Enthusiast",
    "Generative AI Developer",
    "Problem Solver",
  ],
  typingWords: [
    "Artificial Intelligence",
    "Computer Vision",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "LLMs",
    "Data Analytics",
    "Automation",
    "RAG",
    "FastAPI",
  ],
  summary:
    "Final-year BS Artificial Intelligence student with real-world industry experience delivering AI-powered applications for international clients. Built and deployed production-grade systems including facial recognition, anti-phishing ML tools, RAG chatbots, and full-stack AI platforms using Python, OpenAI APIs, TensorFlow, PyTorch, and Scikit-learn. Proven ability to develop, test, and optimize AI models end-to-end — from data pipelines to deployed REST APIs and React frontends. Passionate about Generative AI, LLMs, prompt engineering, and emerging AI technologies.",
  email: "eishawahid25@gmail.com",
  linkedin: "https://www.linkedin.com/in/eisha-wahid/",
  github: "https://github.com/eshawahid",
  githubUsername: "eshawahid",
};

export const education = {
  school: "Air University, Islamabad",
  degree: "BS Artificial Intelligence",
  period: "2022 – 2026",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "AI Systems",
    "Data Structures & Algorithms",
    "Cloud Computing",
    "Database Systems",
    "Data Analytics",
  ],
};

export const experience = [
  {
    title: "AI & Automation Intern",
    org: "NexGen Guards",
    location: "Islamabad",
    period: "2024 (4 Months)",
    bullets: [
      "Delivered 2 production AI systems for Siberkoza, collaborating in cross-functional teams to meet enterprise-grade requirements.",
      "Engineered and tested 5–8 Python-based AI automation workflows, reducing manual operational effort by approximately 40% and improving overall system efficiency across live enterprise operations.",
      "Built real-time AI task execution scripts and automated workflow monitoring tools, enabling intelligent decision pipelines with reduced human intervention.",
      "Optimized data pipelines for reliability and throughput, cutting processing latency and enabling faster ML model inference in real-time production environments.",
      "Performed end-to-end model testing, debugging, and deployment of AI-powered applications, ensuring performance consistency across production systems.",
    ],
    tech: ["Python", "Automation", "ML Ops"],
  },
  {
    title: "Facial Recognition Authentication System",
    org: "Siberkoza",
    location: "Islamabad (On-site)",
    period: "2024",
    bullets: [
      "Developed and tested a real-time ArcFace-based deep learning facial recognition system for enterprise identity verification, delivering a production-ready, enterprise-grade solution.",
      "Engineered secure backend APIs and access control workflows, integrating the recognition system into live infrastructure with robust authentication logic.",
      "Optimized model inference speed and accuracy through iterative testing and tuning, ensuring the system met enterprise-grade reliability standards for deployment.",
    ],
    tech: ["ArcFace", "Deep Learning", "REST APIs"],
  },
  {
    title: "Anti-Phishing URL Detection System",
    org: "Siberkoza",
    location: "Islamabad (On-site)",
    period: "2024",
    bullets: [
      "Built and optimized ML classification models (Scikit-learn, XGBoost) for malicious URL detection, achieving approximately 93–95% accuracy through systematic feature engineering on domain and lexical attributes.",
      "Designed and deployed the model as a REST API with Flask and developed an interactive frontend testing interface, delivering a complete end-to-end AI-powered cybersecurity application.",
      "Performed rigorous model evaluation, data analysis, and optimization cycles to maximize detection precision and minimize false positives for real-world phishing threat scenarios.",
    ],
    tech: ["Scikit-learn", "XGBoost", "Flask"],
  },
];

export const projects = [
  {
    slug: "fitlens",
    name: "FitLens",
    subtitle: "AI-Powered Virtual Fashion Platform",
    status: "FYP — Deployed",
    tech: ["React", "OpenCV", "Flask", "REST APIs"],
    hero: "A full-stack computer-vision fashion platform that lets people try on outfits virtually, live in the browser.",
    problem:
      "Online shoppers can't tell how clothes will actually look on their body before buying, leading to high return rates and low purchase confidence.",
    solution:
      "A computer vision-based virtual try-on system with body-shape detection and garment alignment, built on curated fashion datasets and served live via a React frontend.",
    features: [
      "Interactive React UI for real-time outfit mix-and-match previews",
      "Low-latency Flask backend APIs powering live model responses",
      "AI-driven styling recommendation engine trained on body type, skin tone, and preference data",
      "Reverse image search and garment alignment using Generative AI techniques",
    ],
    architecture:
      "React frontend communicates with a Flask REST API layer, which orchestrates OpenCV-based body-shape detection and garment alignment models, and returns personalized styling recommendations in real time.",
    challenges:
      "Aligning garments accurately across varied body shapes and lighting conditions while keeping inference latency low enough for a responsive, live preview experience.",
    results:
      "Deployed as a working final year project delivering personalized outfit suggestions to live users, end-to-end from computer vision model to production frontend.",
    github: "https://github.com/eshawahid",
    demo: null,
    featured: true,
  },
  {
    slug: "mental-health-chatbot",
    name: "Mental Health Support Chatbot",
    subtitle: "Generative AI · RAG · OpenAI API · FAISS",
    status: "Deployed",
    tech: ["OpenAI API", "RAG", "FAISS", "Prompt Engineering"],
    hero: "A context-aware Generative AI companion built for sensitive, multi-turn mental health conversations.",
    problem:
      "Generic LLM chatbots hallucinate and lose context in emotionally sensitive, multi-turn conversations — a serious risk in mental health support settings.",
    solution:
      "A Generative AI conversational chatbot using the OpenAI API and a RAG pipeline with FAISS vector search, achieving context-aware, semantically accurate responses across multi-turn conversations.",
    features: [
      "RAG pipeline with FAISS vector search for grounded, relevant responses",
      "Advanced prompt engineering to reduce hallucinations",
      "Adaptive AI agent-style backend conversation logic",
      "Personalized, context-retaining dialogue flows",
    ],
    architecture:
      "User messages are embedded and matched against a FAISS vector index of curated support content, with retrieved context injected into carefully engineered prompts sent to the OpenAI API for grounded responses.",
    challenges:
      "Optimizing LLM output quality to reduce hallucinations and improve response relevance for sensitive, high-stakes conversations.",
    results:
      "Delivered a working Generative AI system demonstrating applied development from research to deployment, with measurably more relevant, context-aware responses.",
    github: "https://github.com/eshawahid",
    demo: null,
    featured: true,
  },
  {
    slug: "weather-prediction",
    name: "Weather Prediction System",
    subtitle: "IoT · Arduino · ML · Streamlit",
    status: "Deployed",
    tech: ["Arduino", "Machine Learning", "Streamlit", "Real-time Analytics"],
    hero: "An end-to-end IoT pipeline turning live Arduino sensor data into real-time weather predictions.",
    problem:
      "Raw environmental sensor data is noisy and disconnected from any user-facing prediction tool, making it hard to act on in real time.",
    solution:
      "Real-time environmental sensor datasets collected and preprocessed via Arduino, with engineered features feeding trained ML prediction models — full pipeline ownership from raw data collection to deployment.",
    features: [
      "Real-time sensor data collection via Arduino",
      "Feature engineering on live environmental data",
      "Trained ML prediction models",
      "Interactive Streamlit dashboard for live analytics and predictions",
    ],
    architecture:
      "Arduino sensors stream environmental data that is preprocessed and fed into trained ML models, with predictions surfaced through an interactive Streamlit dashboard.",
    challenges:
      "Handling noisy real-time sensor input and engineering it into features reliable enough for consistent prediction accuracy.",
    results:
      "A deployed interactive dashboard making model outputs accessible through a user-facing interface, demonstrating full pipeline ownership.",
    github: "https://github.com/eshawahid",
    demo: null,
    featured: false,
  },
  {
    slug: "carvo",
    name: "Carvo",
    subtitle: "AI Automotive Platform · Co-Founder",
    status: "Ongoing",
    tech: ["AI Agents", "Recommendation Systems", "Automotive Diagnostics"],
    hero: "An AI-powered platform for predictive vehicle maintenance, diagnostics, and mechanic matching.",
    problem:
      "Vehicle owners struggle to predict maintenance needs early and find verified mechanics they can trust.",
    solution:
      "Leading technical development of an AI-powered application for predictive vehicle maintenance and diagnostics, designing backend AI agent workflows and recommendation systems connecting users with verified mechanics.",
    features: [
      "Predictive maintenance and diagnostics engine",
      "AI agent workflows for automotive troubleshooting",
      "Recommendation system connecting users with verified mechanics",
    ],
    architecture:
      "Backend AI agent workflows evaluate vehicle diagnostic signals and route recommendations through a matching system that connects users with verified mechanics.",
    challenges:
      "Researching and applying emerging AI technologies for automotive diagnostics while driving continuous product iteration and real-world validation.",
    results:
      "An ongoing, innovation-first AI product in active technical development as Co-Founder.",
    github: "https://github.com/eshawahid",
    demo: null,
    featured: false,
  },
];

export const leadership = [
  {
    role: "Event Manager & Host",
    org: "Air University, Islamabad",
    period: "2022 – 2024",
    bullets: [
      "Organized and led national hackathons, AI competitions, and technical seminars.",
      "Coordinated multidisciplinary teams of developers and stakeholders to deliver high-impact events.",
      "Demonstrated strong communication and collaboration skills essential in cross-functional AI project environments.",
    ],
  },
  {
    role: "Decor Head & Event Coordinator",
    org: "University Societies",
    period: "2022 – 2024",
    bullets: [
      "Led decor and event coordination for university society events, managing planning, logistics, and on-the-day execution.",
      "Helped organize and run a university podcast initiative, coordinating guests, scheduling, and production logistics.",
      "Took on informal teaching and mentoring within student circles, breaking down technical AI concepts for peers.",
    ],
  },
];

export const achievements = [
  { title: "BizzTech 2025", detail: "3rd Position Nationwide" },
  { title: "Hult Prize 2025", detail: "Top 50 Nationwide" },
  {
    title: "AI Wrapper Competition",
    detail: "Top 10 Nationwide — hosted by NIC (National Incubation Center Islamabad) ",
  },
  { title: "Speed Programming Competition", detail: "3rd Position" },
  { title: "Sofec-Fast University", detail: "Data Visualization" },
];

export const volunteering = [
  {
    title: "Volunteer — DataFest",
    org: "Pakistan Bureau of Statistics (PBS)",
    description:
      "Supported event operations and public engagement at DataFest, contributing to a national data-literacy initiative run by PBS.",
  },
  {
    title: "Core Member — AUDAS Society",
    org: "Air University, Islamabad",
    description:
      "Supported society events, coordination, and student engagement activities within AUDAS Society.",
  },
  {
    title: "Member — Animal Welfare Society",
    org: "Air University, Islamabad",
    description:
      "Contributed to volunteer initiatives focused on animal welfare awareness, outreach, and campus community support.",
  },
];

export const certifications = [
  { title: "Power BI for Data Analytics", issuer: "DataCamp" },
  { title: "Machine Learning", issuer: "DataCamp" },
  { title: "Generative AI Overview for Project Managers", issuer: "PMI" },
  { title: "PMI Essentials: Seven AI Project Patterns", issuer: "PMI" },
  { title: "Talking to AI: Prompt Engineering for Project Managers", issuer: "PMI" },
];

export const stats = [
  { label: "AI Projects Shipped", value: 4 },
  { label: "Internship Months", value: 4 },
  { label: "Production Systems Delivered", value: 2 },
  { label: "Detection Accuracy", value: 95, suffix: "%" },
  { label: "Manual Effort Reduced", value: 40, suffix: "%" },
  { label: "Nationwide Awards", value: 2 },
];

export const skills = {
  Programming: [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "C++", level: 70 },
    { name: "SQL", level: 75 },
    { name: "TypeScript", level: 65 },
  ],
  "AI & Machine Learning": [
    { name: "Machine Learning", level: 92 },
    { name: "Deep Learning", level: 88 },
    { name: "Computer Vision", level: 88 },
    { name: "NLP", level: 82 },
    { name: "Model Optimization", level: 85 },
    { name: "Predictive Modeling", level: 85 },
  ],
  "Generative AI & LLMs": [
    { name: "OpenAI APIs", level: 90 },
    { name: "RAG", level: 88 },
    { name: "Prompt Engineering", level: 90 },
    { name: "AI Agents", level: 80 },
    { name: "Vector Databases (FAISS)", level: 82 },
  ],
  Frameworks: [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 90 },
    { name: "XGBoost", level: 80 },
    { name: "OpenCV", level: 85 },
    { name: "Hugging Face", level: 75 },
  ],
  "Backend & Frontend": [
    { name: "Flask", level: 85 },
    { name: "REST APIs", level: 88 },
    { name: "React", level: 78 },
    { name: "Docker", level: 70 },
  ],
  "Data & Tools": [
    { name: "Power BI", level: 80 },
    { name: "Pandas / NumPy", level: 88 },
    { name: "Git & GitHub", level: 88 },
    { name: "AWS / GCP", level: 65 },
    { name: "Streamlit", level: 82 },
  ],
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Turkish", level: "Basic" },
];

export const timeline = [
  {
    period: "2022",
    title: "Started BS Artificial Intelligence",
    org: "Air University, Islamabad",
    description:
      "Began the AI degree, building foundations in programming, data structures, and algorithms.",
  },
  {
    period: "2022 – 2024",
    title: "Event Manager & Host",
    org: "Air University",
    description:
      "Led national hackathons, AI competitions, and technical seminars, coordinating cross-functional teams.",
  },
  {
    period: "2024",
    title: "AI & Automation Intern",
    org: "NexGen Guards",
    description:
      "Delivered production AI systems and automation workflows, cutting manual effort by ~40%.",
  },
  {
    period: "2024",
    title: "Facial Recognition & Anti-Phishing Systems",
    org: "Siberkoza",
    description:
      "Shipped an ArcFace-based facial recognition system and a 93–95% accurate phishing URL detector.",
  },
  {
    period: "2024 – 2025",
    title: "FitLens & Mental Health Chatbot",
    org: "Final Year Project / Independent",
    description:
      "Built and deployed a virtual try-on fashion platform and a RAG-powered mental health support chatbot.",
  },
  {
    period: "2025",
    title: "BizzTech & Hult Prize",
    org: "National Competitions",
    description: "Placed 3rd Nationwide at BizzTech and Top 50 Nationwide at Hult Prize.",
  },
  {
    period: "Ongoing",
    title: "Co-Founder, Carvo",
    org: "AI Automotive Platform",
    description:
      "Leading technical development of an AI-powered predictive maintenance and diagnostics platform.",
  },
  {
    period: "2026",
    title: "Graduating",
    org: "Air University, Islamabad",
    description: "Completing BS Artificial Intelligence, seeking full-time AI engineering roles.",
  },
];
