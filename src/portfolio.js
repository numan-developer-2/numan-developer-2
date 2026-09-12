/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Nouman",
  title: "Hi, I'm Nouman",
  subTitle: emoji(
    "Global-Scale AI/ML Full Stack Engineer building agentic AI systems, RAG pipelines, and production LLM applications for international clients 🚀"
  ),
  resumeLink: "resume.pdf", // Served from src/containers/greeting/resume.pdf (Noman_Rauf_AIDeveloper.pdf)
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/numan-developer-2",
  linkedin: "https://www.linkedin.com/in/numan-rauf-5ba9593a2",
  gmail: "numanrauf08@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "AI/ML Full Stack Engineer",
  subTitle:
    "AGENTIC AI & MULTI-AGENT SYSTEMS · RAG PIPELINES · LLM APPLICATIONS · CLOUD AI/ML · FULL-STACK AUTOMATION",
  skills: [
    emoji(
      "⚡ Agentic AI & Multi-Agent Systems — I design tool-using agents with memory, custom execution loops, and multi-agent orchestration using LangChain, LangGraph, and AutoGen/CrewAI basics for real client workflows."
    ),
    emoji(
      "⚡ Prompt Engineering & LLMs — I ship Claude, GPT-4, Gemini, and DeepSeek flows with system prompt design, function calling, structured outputs, complex prompt graphs, and versioned evaluation."
    ),
    emoji(
      "⚡ RAG & Vector Search — I build hybrid retrieval (FAISS + ChromaDB + BM25, Pinecone basics) with embeddings, chunking, re-ranking, and hallucination-guards for source-cited answers at scale."
    ),
    emoji(
      "⚡ Backend & APIs — I deliver FastAPI/Flask REST APIs, webhooks, Dockerized services, CI/CD, and data stores on PostgreSQL, MongoDB, and MySQL."
    ),
    emoji(
      "⚡ ML & Deep Learning — I train and deploy Scikit-learn, TensorFlow, PyTorch, XGBoost, CNNs, LSTMs, Transformers, YOLOv8, and OpenCV pipelines from data prep to production."
    ),
    emoji(
      "⚡ Cloud & MLOps — I deploy and monitor on AWS (EC2, S3, SageMaker) and GCP (Vertex AI, BigQuery ML), with MLflow for experiment tracking."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "LangGraph",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "OpenAI",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Claude",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Agentic AI & Multi-Agent Systems",
      progressPercentage: "95%"
    },
    {
      Stack: "RAG, LLMs & Prompt Engineering",
      progressPercentage: "92%"
    },
    {
      Stack: "Backend, Cloud & MLOps",
      progressPercentage: "85%"
    },
    {
      Stack: "ML / DL / Computer Vision",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Prompt Engineer",
      company: "DigitalFlux",
      companylogo: require("./assets/images/digitalfluxLogo.png"),
      date: "Jul 2025 – Present",
      desc: "Remote — Design and deploy autonomous AI agents and multi-agent workflows for international clients.",
      descBullets: [
        "Build tool-using agents with memory systems, custom execution loops, and complex prompt flows using Claude, OpenAI, LangChain, and LangGraph.",
        "Integrate agents with external APIs, vector stores (ChromaDB, FAISS), and custom toolsets — powering RAG pipelines and agentic automation that act, reason, and execute with minimal human intervention.",
        "Maintain agent skill libraries and system prompts — version-controlled, evaluation-tested, and optimized for accuracy and cost in production."
      ]
    },
    {
      role: "Generative AI Intern",
      company: "NETSOL Technologies (NIAI)",
      companylogo: require("./assets/images/netsolLogo.png"),
      date: "Jan 2026 – Jun 2026",
      desc: "Lahore — Enterprise agentic RAG and LLM agent applications for international automation.",
      descBullets: [
        "Engineered an enterprise agentic RAG system with LangChain, LangGraph, FAISS, and ChromaDB — hybrid retrieval over 35,000+ chunks with autonomous query analysis, re-ranking, and hallucination-guard stages; FastAPI backend on AWS.",
        "Built LLM-powered agent apps with OpenAI GPT-4 and Gemini — multi-step workflows with function calling, tool integration, and structured JSON outputs.",
        "Implemented multi-layer LSTM and CNN computer-vision pipelines — full data pipeline, evaluation, and AWS deployment with performance monitoring."
      ]
    },
    {
      role: "Python Developer Intern",
      company: "Unisoftware Company",
      companylogo: require("./assets/images/unisoftwareLogo.png"),
      date: "Aug 2025 – Nov 2025",
      desc: "Lahore — Backend APIs, ML models, and AI modules with full documentation.",
      descBullets: [
        "Built Python backend applications and REST APIs with FastAPI; trained 5+ ML models (Scikit-learn, XGBoost).",
        "Implemented NLP pipelines and OpenCV computer vision modules across 3+ AI use cases with full technical documentation."
      ]
    },
    {
      role: "Freelance AI Developer",
      company: "International & Local Clients",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "2024 – 2025",
      desc: "Remote — Autonomous AI agents end-to-end for international and Pakistani clients.",
      descBullets: [
        "Shipped tool-using agents with memory and API integrations: restaurant ordering, medical report assistant, gym member-management, and customer service agents.",
        "Owned the full lifecycle: requirements, agent/prompt design, NLP pipelines, deployment, and client handover."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set "true" after adding a GitHub PAT + USE_GITHUB_DATA=true
  display: false // Hidden until GitHub pinned repos load; bigProjects covers featured work
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "PRODUCTION AGENTIC AI SYSTEMS AND PRODUCTS FOR ENTERPRISE AND CLIENT WORK",
  projects: [
    {
      image: require("./assets/images/systematicSalesLogo.png"),
      projectName: "Systematic AI Sales Agent — Systematic IT Solutions",
      projectDesc:
        "Built the Python backend for an AI sales assistant that answers from company website knowledge, recommends services, qualifies leads, and supports meeting scheduling. RAG over 316 curated knowledge chunks (Gemini + Supabase PostgreSQL/pgvector), with persistent conversation memory, progressive lead capture, explainable lead scoring, and Google Calendar availability + booking confirmation. Includes validated action workflows, duplicate-action protection, and automated tests (102 backend/scraper tests passed). Full public website / chat widget still in development. Stack: Python · Google Gemini · Supabase · PostgreSQL · pgvector · Google Calendar API · OAuth 2.0 · BeautifulSoup · Playwright · Pydantic · pytest",
      footerLink: [
        {
          name: "Demo on request",
          url: "mailto:numanrauf08@gmail.com"
        }
      ]
    },
    {
      image: require("./assets/images/ragProjectLogo.png"),
      projectName: "Multi-Agent RAG System — NETSOL",
      projectDesc:
        "Production multi-agent RAG orchestrated via LangGraph: query-analysis, hybrid retrieval (FAISS + BM25 over 35,000+ chunks), re-ranking, hallucination-guard, and response-synthesis agents. FastAPI on AWS for source-cited enterprise Q&A. Stack: Python · LangGraph · LangChain · FAISS · ChromaDB · BM25 · OpenAI · FastAPI · AWS",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/numan-developer-2"
        }
      ]
    },
    {
      image: require("./assets/images/invigilioLogo.png"),
      projectName: "Invigilio AI — Computer Vision SaaS",
      projectDesc:
        "Co-founded and shipped real-time object detection & tracking for live industrial feeds — YOLOv8 (mAP50: 0.921) + DeepSORT with agentic alert/reporting automation. Full pipeline: training → FastAPI → live dashboard, WhatsApp alerts, PDF reporting. Stack: Python · YOLOv8 · OpenCV · DeepSORT · FastAPI · Supabase · Next.js · Docker · AWS",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/numan-developer-2"
        }
      ]
    },
    {
      image: require("./assets/images/mediReportLogo.png"),
      projectName: "MediReport AI — Agentic Healthcare Platform",
      projectDesc:
        "Agentic healthcare pipeline: OCR-parsing, LLM summarization, and multilingual classification agents (Urdu, Hindi, Arabic, English) for lab report intelligence. B2B API for global clients on Railway + Vercel. Stack: Python · FastAPI · OCR · Hugging Face · LangChain · Multilingual NLP · MongoDB",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/numan-developer-2"
        }
      ]
    },
    {
      image: require("./assets/images/agentSuiteLogo.png"),
      projectName: "AI Automation Agent Suite — Freelance",
      projectDesc:
        "Autonomous, tool-using agents with memory and API integrations for 4+ clients: restaurant ordering, medical report assistant, gym member-management, and shop customer-service — with WhatsApp automation throughout. Stack: Python · LangChain · Claude · OpenAI · FastAPI · PostgreSQL · WhatsApp API",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/numan-developer-2"
        }
      ]
    },
    {
      image: require("./assets/images/businessAutoLogo.png"),
      projectName: "Business Automation for Local Clients",
      projectDesc:
        "Client repos are private due to proprietary business logic — happy to walk through code / demo on request. Sales Agent System (lead qualification), Installment Management System (inventory + billing), Gym Software Automation (membership/attendance/billing), Restaurant Ordering Website (in progress).",
      footerLink: [
        {
          name: "Demo on request",
          url: "mailto:numanrauf08@gmail.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and coursework that back my agentic AI, LLM, and full-stack work",

  achievementsCards: [
    {
      title: "Prompt Engineering — High Tech",
      subtitle: "Completed Prompt Engineering certification (2024).",
      image: require("./assets/images/certPromptLogo.png"),
      imageAlt: "Prompt Engineering Certificate",
      footerLink: []
    },
    {
      title: "Generative AI with LLMs",
      subtitle:
        "DeepLearning.AI / Coursera — Generative AI with Large Language Models.",
      image: require("./assets/images/certDlaiLogo.png"),
      imageAlt: "DeepLearning.AI Logo",
      footerLink: [
        {
          name: "Coursera",
          url: "https://www.coursera.org/"
        }
      ]
    },
    {
      title: "AI/ML Engineering — Unisoftware",
      subtitle: "AI/ML Engineering certification from Unisoftware (2025).",
      image: require("./assets/images/certUniLogo.png"),
      imageAlt: "AI/ML Engineering Certificate",
      footerLink: []
    },
    {
      title: "Python for Data Science — Google",
      subtitle: "Google — Python for Data Science (2024).",
      image: require("./assets/images/certGoogleLogo.png"),
      imageAlt: "Google Certificate",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's build something 🚀"),
  subtitle:
    "Open to AI development, automation, and full-stack projects — production LLM apps, RAG knowledge bases, or custom business automation. Available onsite in Lahore (3PM–12AM shift) or remote.",
  number: "+92 326-4466626",
  email_address: "numanrauf08@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
