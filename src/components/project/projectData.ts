export const projects = [
  {
    title: "AutoEDA",
    why: "Data scientists spend 80% of their time on repetitive data profiling and cleaning.",
    what: "Automated exploratory analysis platform generating insights and recommendations.",
    how: "LangGraph orchestrated multi-agent workflow with local LLMs and SHAP explainability.",
    tradeoff: "Sacrificed cloud LLM speed to guarantee 100% data privacy using local Mistral models.",
    image: "/projects/autoeda.png",
    technologies: ["LangGraph", "RAG", "Mistral", "Python", "SHAP"],
    github: "#",
    demo: "#",
  },
  {
    title: "CA Aspirant RAG",
    why: "Chartered Accountancy students struggle to pinpoint exact clauses in massive tax PDFs.",
    what: "A highly accurate, citation-backed legal retrieval and reasoning assistant.",
    how: "Hybrid retrieval pipeline combining dense FAISS embeddings with sparse BM25 search.",
    tradeoff: "Increased initial ingestion time for section-aware chunking to drastically improve retrieval precision.",
    image: "/projects/ca-rag.png",
    technologies: ["Hybrid Search", "FAISS", "RAG", "Embeddings"],
    github: "#",
    demo: "#",
  },
];