"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ["All", "Web development", "Machine learning", "Mobile applications"];

  const projects = [
    {
      title: "Aura",
      category: "Web development",
      image: "/assets/images/aura.png",
      url: "https://github.com/aarogyaojha/Aura",
      description: "A modern, next-generation anonymous social platform featuring threaded discussions, real-time interactions, and AI-powered content moderation. Built with the MERN stack."
    },
    {
      title: "Aero UI",
      category: "Web development",
      image: "/assets/images/aero-ui.png",
      url: "https://github.com/aarogyaojha/component-library",
      description: "A high-performance, accessible, and premium UI component library built with Next.js 15+, TypeScript, and Tailwind CSS v4. Designed for speed, aesthetics, and seamless developer experience."
    },
    {
      title: "AuthProject",
      category: "Web development",
      image: "/assets/images/auth-project-thumbnail.png",
      url: "https://github.com/aarogyaojha/AuthProject",
      description: "A production-ready, highly scalable authentication and authorization system. Implements a modern monorepo architecture with a NestJS backend and a Next.js frontend. Features modular domain design, centralized truth innovation for documentation, and comprehensive forensic logging."
    },
    {
      title: "Stock Portfolio App",
      category: "Web development",
      image: "/assets/images/project-7.png",
      url: "https://github.com/aarogyaojha/stock-portfolio-app",
      description: "A modern React-based stock portfolio management application built with TypeScript, Zustand, and Recharts. Features interactive charts, real-time calculations (gains/losses), portfolio management (CRUD), and local storage persistence for a seamless user experience."
    },
    {
      title: "Diabetes Prediction",
      category: "Machine learning",
      image: "/assets/images/diabetes-prediction.png",
      url: "https://github.com/aarogyaojha/diabetes-prediction",
      description: "Diabetes prediction system using the Pima Indians Diabetes Dataset. Features comprehensive Exploratory Data Analysis (EDA), data visualization, and K-Nearest Neighbors (KNN) classification to predict diabetes based on diagnostic measurements."
    },
    {
      title: "X Sentiment Analyzer",
      category: "Machine learning",
      image: "/assets/images/sentiment-analyzer.png",
      url: "https://github.com/aarogyaojha/x-sentiment-analyzer",
      description: "End-to-end Twitter sentiment analysis using NLP and Logistic Regression on the Sentiment140 dataset. Includes text preprocessing (regex, stemming), TF-IDF vectorization, model training, and persistence."
    },
    {
      title: "Car Price Predictor",
      category: "Machine learning",
      image: "/assets/images/car-price-predictor.png",
      url: "https://github.com/aarogyaojha/Car-Price-Predictor",
      description: "A machine learning web application that predicts used car prices using a Linear Regression model. Features a complete preprocessing pipeline and an interactive Streamlit dashboard for real-time inference."
    },
    {
      title: "SMS Spam Classifier",
      category: "Machine learning",
      image: "/assets/images/sms-spam-classifier.png",
      url: "https://github.com/aarogyaojha/sms-spam-classifier",
      description: "Robust Machine Learning based SMS Spam detection system. Classifies messages as 'Ham' or 'Spam' using NLP techniques and Naive Bayes, achieving 100% precision on the test set."
    },
    {
      title: "Movie Recommender System",
      category: "Machine learning",
      image: "/assets/images/movie-recommender.png",
      url: "https://github.com/aarogyaojha/movie-recommender-system",
      description: "A content-based movie recommender system that analyzes metadata like genres, cast, and crew. Uses CountVectorizer and Cosine Similarity to recommend the top 5 most similar movies."
    },
    {
      title: "AI Chatbot",
      category: "Mobile applications",
      image: "/assets/images/ai_chatbot_project.png",
      url: "https://github.com/aarogyaojha/ai_chatbot",
      description: "A cross-platform AI chatbot application built with Flutter. It serves as a foundational template for developing intelligent conversational agents that run seamlessly on Android, iOS, Web, and Desktop platforms."
    },
    {
      title: "Todoey",
      category: "Mobile applications",
      image: "/assets/images/todoey.png",
      url: "https://github.com/aarogyaojha/todoey",
      description: "A simple, clean, and customizable To-Do list app built with Flutter and Provider. Features task management with long-press deletion, dynamic task counting, and a clean Material Design interface."
    },
    {
      title: "BMI Calculator",
      category: "Mobile applications",
      image: "/assets/images/bmi-calc.png",
      url: "https://github.com/aarogyaojha/bmi_calculator_flutter",
      description: "A visually engaging health tool built with Flutter. It allows users to calculate BMI with an interactive UI featuring custom sliders, gender selection cards, and real-time health interpretations."
    },
    {
      title: "Quizzler",
      category: "Mobile applications",
      image: "/assets/images/quizzler.png",
      url: "https://github.com/aarogyaojha/quizzler_flutter",
      description: "A trivia application built with Flutter that tests your knowledge with true/false questions. Includes instant visual feedback, progress tracking, and adaptive dialog alerts upon completion."
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

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
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="cursor-pointer" 
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ 
                    boxShadow: isML 
                      ? "0 20px 40px -15px rgba(168, 85, 247, 0.4)" // Purple glow for ML
                      : "0 20px 40px -15px rgba(0, 255, 234, 0.25)", // Cyan glow for others
                    borderColor: isML ? "#a855f7" : "var(--orange-yellow-crayola)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    background: 'var(--border-gradient-onyx)',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid var(--jet)',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  {/* ML Specific Badge */}
                  {isML && (
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                      color: 'white',
                      fontSize: '9px',
                      fontWeight: '800',
                      padding: '2px 8px',
                      borderRadius: '20px',
                      zIndex: 10,
                      boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                      letterSpacing: '0.5px'
                    }}>
                      ML MODEL
                    </div>
                  )}

                  <div style={{
                    position: 'absolute',
                    inset: '1px',
                    background: 'var(--bg-gradient-jet)',
                    borderRadius: 'inherit',
                    zIndex: -1
                  }}></div>

                  <figure className="project-img" style={{ margin: 0, marginBottom: '15px' }}>
                    <div className="project-item-icon-box" style={{ background: isML ? '#a855f7' : '' }}>
                      <ion-icon name={isML ? "sparkles-outline" : "eye-outline"}></ion-icon>
                    </div>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </figure>
                  <h3 className="project-title" style={{ margin: '0 0 5px 0' }}>{project.title}</h3>
                  <p className="project-category" style={{ margin: 0, color: isML ? '#a855f7' : '' }}>{project.category}</p>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-container active" style={{ pointerEvents: 'all', visibility: 'visible' }}>
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
                maxWidth: '600px', 
                width: '90%', 
                maxHeight: '90vh', 
                overflowY: 'auto',
                display: 'block',
                zIndex: 30
              }}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="modal-content" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <figure style={{ borderRadius: '12px', overflow: 'hidden', width: '100%', aspectRatio: '16/9' }}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </figure>

                <div>
                  <h3 className="h3 modal-title">{selectedProject.title}</h3>
                  <p className="contact-title" style={{ color: 'var(--orange-yellow-crayola)', marginBottom: '15px', textTransform: 'uppercase', fontSize: '11px', fontWeight: '600' }}>
                    {selectedProject.category}
                  </p>
                  <p style={{ color: 'var(--light-gray)', lineHeight: '1.6', fontSize: '15px' }}>
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.url !== "#" && (
                  <div style={{ marginTop: '10px' }}>
                    <a 
                      href={selectedProject.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="form-btn"
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        padding: '12px 24px',
                        width: 'max-content'
                      }}
                    >
                      <ion-icon name="logo-github"></ion-icon>
                      <span>View Project Source</span>
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
