"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    "All",
    "Web development",
    "Machine learning",
    "Mobile applications",
  ];

  const projects = [
    {
      title: "AuthProject",
      category: "Web development",
      image: "/assets/images/auth-project-thumbnail.png",
      url: "https://github.com/aarogyaojha/AuthProject",
      caseStudy: {
        problem:
          "Most auth systems scatter response strings, status codes, and Swagger annotations across controllers, DTOs, and test files. When you update a message or status code, docs drift silently — and you only find out when a client integration breaks.",
        built:
          "A production auth monorepo (NestJS + Next.js 15) built around a Centralized Truth architecture: every API response message, HTTP status code, and Swagger documentation point is driven by a single constants system. Change a constant once — the controller logic, Swagger UI, and test assertions all update automatically.",
        decisions: [
          "Cryptographic OTP — time-limited, single-use, bcrypt-hashed before storage",
          "Refresh token rotation — each refresh issues a new token and invalidates the old one via HttpOnly cookies",
          "Forensic audit logging — every sensitive action (login, OTP verify, token refresh) logged with timestamp, IP, and outcome",
          "Automated DB hygiene — expired OTPs and rotated tokens cleaned up on schedule, not left to accumulate",
        ],
      },
    },
    {
      title: "Real Estate Listing Engine",
      category: "Web development",
      image: "/assets/images/project-7.png",
      url: "https://github.com/aarogyaojha/real-estate-listing",
      caseStudy: {
        problem:
          "Multi-role platforms (admin, agent, user) typically handle field visibility in the frontend — conditionally hiding sensitive fields in the UI. This doesn't actually protect data: a determined client can hit the raw API and inspect every field regardless of their role.",
        built:
          "A full-stack property search and management platform where field-level sanitization happens at the API layer in a NestJS interceptor, not in the frontend. Sensitive fields are stripped from the response before it leaves the server — no client-side filtering, no data leakage.",
        decisions: [
          "Role-based field stripping via NestJS interceptor — agents and users physically cannot receive admin-only fields",
          "Refresh token rotation via HttpOnly cookies — no tokens in localStorage, immune to XSS",
          "URL-encoded search state — active filters are bookmarkable and shareable",
          "TanStack Query for optimistic UI — search results update immediately on filter change without waiting for the API",
          "Full Swagger docs at /api-docs with seeded test data for immediate exploration",
        ],
      },
    },
    {
      title: "Cybership",
      category: "Web development",
      image: "/assets/images/aura.png",
      url: "https://github.com/aarogyaojha/cybership",
      caseStudy: {
        problem:
          "Shipping integrations almost always end up as a pile of if-carrier === 'UPS' branches. Adding FedEx means opening files that handle UPS — a recipe for regressions. Each new carrier increases the blast radius of every change.",
        built:
          "A shipping carrier integration service built around a capability-based engine. Each carrier is a self-contained plugin that declares what operations it supports. The core routing layer reads capabilities and dispatches accordingly — adding FedEx or USPS requires implementing one interface and registering it, with zero changes to existing carrier code.",
        decisions: [
          "Capability map per carrier — the core never checks carrier identity, only whether it supports the requested operation",
          "OAuth 2.0 token lifecycle management — acquire, store, refresh handled transparently in the background",
          "Strict input validation — class-validator on backend, zod on frontend; invalid payloads rejected before hitting carrier networks",
          "Typed CarrierError responses — machine-readable error codes with consistent HTTP status mapping",
          "Integration tests using stubbed carrier payloads — no live API calls required in CI",
        ],
      },
    },
    {
      title: "Aura",
      category: "Web development",
      image: "/assets/images/aura.png",
      url: "https://github.com/aarogyaojha/Aura",
      caseStudy: {
        problem:
          "Content moderation on social platforms is usually an afterthought — either manual review queues that don't scale, or a third-party service bolted onto the main backend with tight coupling that makes retraining or swapping models painful.",
        built:
          "A full-stack anonymous social platform where the ML content moderation classifier runs as an independent Docker service — isolated from the Node.js backend, independently deployable, and retrainable without touching the main application. The three services (React client, Express backend, Python classifier) are orchestrated with Docker Compose.",
        decisions: [
          "Separate classifier service — Python, Flask, and scikit-learn dependencies isolated from the Node.js runtime",
          "Context-aware auth — login verification considers IP, location, and device metadata, not just credentials",
          "GitHub Actions CI/CD — automated build and test pipeline on every push",
          "Socket.io for real-time interactions — threaded discussions with hot/new/top/rising feed sorting",
        ],
      },
    },
    {
      title: "Aero UI",
      category: "Web development",
      image: "/assets/images/aero-ui.png",
      url: "https://github.com/aarogyaojha/component-library",
      description:
        "Open-source React component library with Storybook 8, Vitest unit tests, Radix UI primitives, and a custom CLI for scaffolding components directly into any project. Built on Next.js 15, TypeScript, and Tailwind CSS v4.",
    },
    {
      title: "Stock Portfolio App",
      category: "Web development",
      image: "/assets/images/project-7.png",
      url: "https://github.com/aarogyaojha/stock-portfolio-app",
      description:
        "A modern React-based stock portfolio management application built with TypeScript, Zustand, and Recharts. Features interactive charts, real-time gain/loss calculations, portfolio CRUD, and local storage persistence.",
    },
    {
      title: "Cross-Domain Sentiment Analysis",
      category: "Machine learning",
      image: "/assets/images/sentiment-analyzer.png",
      url: "https://github.com/aarogyaojha/sentiment_analysis",
      caseStudy: {
        problem:
          "In-domain benchmark accuracy is the standard basis for choosing between ML models — but it's misleading when the deployment domain differs from the training domain. A model that wins on Twitter data may not win on product reviews or news.",
        built:
          "A rigorous cross-domain benchmark comparing TF-IDF + Logistic Regression against fine-tuned DistilBERT. Both models trained on 1.6M Twitter tweets (Sentiment140) and evaluated on Twitter (in-domain) and IMDB movie reviews (out-of-domain) without any retraining on the target domain. Statistical significance tested with McNemar's test.",
        decisions: [
          "DistilBERT outperforms TF-IDF+LR by 7.1 points in-domain (McNemar χ² = 1123.2, p < 0.001)",
          "DistilBERT degrades 2.3× faster under domain shift — 12.3 accuracy points lost vs 5.4 for TF-IDF+LR",
          "On IMDB, the gap disappears entirely — statistical parity (χ² = 1.526, p = 0.217)",
          "Precision/recall asymmetry documented: DistilBERT over-triggers on positive words in negative review setups",
          "Practical implication: the cheaper GPU-free TF-IDF pipeline is statistically indistinguishable from DistilBERT under domain shift",
        ],
      },
    },
    {
      title: "Diabetes Prediction",
      category: "Machine learning",
      image: "/assets/images/diabetes-prediction.png",
      url: "https://github.com/aarogyaojha/diabetes-prediction",
      description:
        "Clinical ML system using the Pima Indians Diabetes Dataset. Features comprehensive EDA, data visualization, and KNN classification with confusion matrix evaluation to predict diabetes from diagnostic measurements.",
    },
    {
      title: "X Sentiment Analyzer",
      category: "Machine learning",
      image: "/assets/images/sentiment-analyzer.png",
      url: "https://github.com/aarogyaojha/x-sentiment-analyzer",
      description:
        "End-to-end Twitter sentiment analysis pipeline on the Sentiment140 dataset. Covers text preprocessing (regex cleaning, stemming), TF-IDF vectorization, logistic regression training, and model persistence.",
    },
    {
      title: "Car Price Predictor",
      category: "Machine learning",
      image: "/assets/images/car-price-predictor.png",
      url: "https://github.com/aarogyaojha/Car-Price-Predictor",
      description:
        "ML web application predicting used car prices via Linear Regression. Includes a full preprocessing pipeline and an interactive Streamlit dashboard for real-time inference.",
    },
    {
      title: "SMS Spam Classifier",
      category: "Machine learning",
      image: "/assets/images/sms-spam-classifier.png",
      url: "https://github.com/aarogyaojha/sms-spam-classifier",
      description:
        "NLP-based SMS spam detection using Naive Bayes, achieving 100% precision on the test set. Built with NLTK preprocessing and deployed via Streamlit.",
    },
    {
      title: "Movie Recommender System",
      category: "Machine learning",
      image: "/assets/images/movie-recommender.png",
      url: "https://github.com/aarogyaojha/movie-recommender-system",
      description:
        "Content-based movie recommender analyzing genres, cast, and crew metadata. Uses CountVectorizer and cosine similarity to surface the top 5 most similar films.",
    },
    {
      title: "AI Chatbot",
      category: "Mobile applications",
      image: "/assets/images/ai_chatbot_project.png",
      url: "https://github.com/aarogyaojha/ai_chatbot",
      description:
        "Cross-platform AI chatbot built with Flutter. Runs on Android, iOS, Web, and Desktop — a production-ready template for intelligent conversational agents.",
    },
    {
      title: "Todoey",
      category: "Mobile applications",
      image: "/assets/images/todoey.png",
      url: "https://github.com/aarogyaojha/todoey",
      description:
        "Flutter to-do app with Provider state management, task management with long-press deletion, dynamic task counting, and clean Material Design interface.",
    },
    {
      title: "BMI Calculator",
      category: "Mobile applications",
      image: "/assets/images/bmi-calc.png",
      url: "https://github.com/aarogyaojha/bmi_calculator_flutter",
      description:
        "Flutter health tool with custom sliders, gender selection cards, and real-time BMI calculation with health interpretation.",
    },
    {
      title: "Quizzler",
      category: "Mobile applications",
      image: "/assets/images/quizzler.png",
      url: "https://github.com/aarogyaojha/quizzler_flutter",
      description:
        "Flutter trivia app with true/false questions, instant visual feedback, progress tracking, and completion dialogs.",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );

  const hasCaseStudy = (project: any) => !!project.caseStudy;

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat}>
              <button
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Select Filter */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${isSelectActive ? "active" : ""}`}
            onClick={() => setIsSelectActive(!isSelectActive)}
          >
            <div className="select-value">{filter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((cat) => (
              <li className="select-item" key={cat}>
                <button
                  onClick={() => {
                    setFilter(cat);
                    setIsSelectActive(false);
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => {
            const isML = project.category === "Machine learning";
            const isCaseStudy = hasCaseStudy(project);

            return (
              <motion.li
                className="project-item active"
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.div
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{
                    boxShadow: isML
                      ? "0 20px 40px -15px rgba(168, 85, 247, 0.4)"
                      : "0 20px 40px -15px rgba(0, 255, 234, 0.25)",
                    borderColor: isML
                      ? "#a855f7"
                      : "var(--orange-yellow-crayola)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "var(--border-gradient-onyx)",
                    padding: "20px",
                    borderRadius: "16px",
                    border: "1px solid var(--jet)",
                    position: "relative",
                    zIndex: 1,
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {/* Badge: ML MODEL or CASE STUDY */}
                  {isML && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "linear-gradient(135deg, #a855f7, #6366f1)",
                        color: "white",
                        fontSize: "9px",
                        fontWeight: "800",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        zIndex: 10,
                        boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      ML MODEL
                    </div>
                  )}
                  {isCaseStudy && !isML && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background:
                          "linear-gradient(135deg, var(--orange-yellow-crayola), #f97316)",
                        color: "#1a1a1a",
                        fontSize: "9px",
                        fontWeight: "800",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        zIndex: 10,
                        letterSpacing: "0.5px",
                      }}
                    >
                      CASE STUDY
                    </div>
                  )}

                  <div
                    style={{
                      position: "absolute",
                      inset: "1px",
                      background: "var(--bg-gradient-jet)",
                      borderRadius: "inherit",
                      zIndex: -1,
                    }}
                  ></div>

                  <figure
                    className="project-img"
                    style={{ margin: 0, marginBottom: "15px" }}
                  >
                    <div
                      className="project-item-icon-box"
                      style={{ background: isML ? "#a855f7" : "" }}
                    >
                      <ion-icon
                        name={isML ? "sparkles-outline" : "eye-outline"}
                      ></ion-icon>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title" style={{ margin: "0 0 5px 0" }}>
                    {project.title}
                  </h3>
                  <p
                    className="project-category"
                    style={{ margin: 0, color: isML ? "#a855f7" : "" }}
                  >
                    {project.category}
                  </p>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="modal-container active"
            style={{ pointerEvents: "all", visibility: "visible" }}
          >
            <motion.div
              className="overlay active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            ></motion.div>

            <motion.section
              className="testimonials-modal active"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              style={{
                maxWidth: "640px",
                width: "90%",
                maxHeight: "90vh",
                overflowY: "auto",
                display: "block",
                zIndex: 30,
              }}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div
                className="modal-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <figure
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "100%",
                    aspectRatio: "16/9",
                  }}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </figure>

                <div>
                  <h3 className="h3 modal-title">{selectedProject.title}</h3>
                  <p
                    className="contact-title"
                    style={{
                      color: "var(--orange-yellow-crayola)",
                      marginBottom: "20px",
                      textTransform: "uppercase",
                      fontSize: "11px",
                      fontWeight: "600",
                    }}
                  >
                    {selectedProject.category}
                  </p>

                  {/* Case study layout */}
                  {selectedProject.caseStudy ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--orange-yellow-crayola)",
                            marginBottom: "8px",
                          }}
                        >
                          The problem
                        </p>
                        <p
                          style={{
                            color: "var(--light-gray)",
                            lineHeight: "1.7",
                            fontSize: "14px",
                          }}
                        >
                          {selectedProject.caseStudy.problem}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--orange-yellow-crayola)",
                            marginBottom: "8px",
                          }}
                        >
                          What I built
                        </p>
                        <p
                          style={{
                            color: "var(--light-gray)",
                            lineHeight: "1.7",
                            fontSize: "14px",
                          }}
                        >
                          {selectedProject.caseStudy.built}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontSize: "10px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--orange-yellow-crayola)",
                            marginBottom: "10px",
                          }}
                        >
                          Key decisions
                        </p>
                        <ul
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            listStyle: "none",
                            padding: 0,
                          }}
                        >
                          {selectedProject.caseStudy.decisions.map(
                            (d: string, i: number) => (
                              <li
                                key={i}
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  alignItems: "flex-start",
                                  color: "var(--light-gray)",
                                  fontSize: "14px",
                                  lineHeight: "1.6",
                                }}
                              >
                                <span
                                  style={{
                                    width: "5px",
                                    height: "5px",
                                    borderRadius: "50%",
                                    background: "var(--orange-yellow-crayola)",
                                    flexShrink: 0,
                                    marginTop: "8px",
                                  }}
                                ></span>
                                {d}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    /* Regular description for non-case-study projects */
                    <p
                      style={{
                        color: "var(--light-gray)",
                        lineHeight: "1.6",
                        fontSize: "15px",
                      }}
                    >
                      {selectedProject.description}
                    </p>
                  )}
                </div>

                {selectedProject.url !== "#" && (
                  <div style={{ marginTop: "6px" }}>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="form-btn"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px 24px",
                        width: "max-content",
                      }}
                    >
                      <ion-icon name="logo-github"></ion-icon>
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Portfolio;
