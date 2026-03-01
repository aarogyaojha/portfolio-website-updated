"use client";

import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      title: "Applied Machine Learning",
      description: "Designing and evaluating end-to-end ML pipelines — from raw data preprocessing and feature engineering to model training, error analysis, and performance validation on real-world datasets.",
      iconName: "hardware-chip-outline"
    },
    {
      title: "Natural Language Processing",
      description: "Building text classification and sentiment analysis systems using TF-IDF vectorization, logistic regression, and preprocessing pipelines. Experienced with large-scale datasets (1.6M+ records).",
      iconName: "chatbubbles-outline"
    },
    {
      title: "Scalable Backend & Data Systems",
      description: "Architecting production-grade APIs and data retrieval pipelines using NestJS, Prisma, PostgreSQL, and Elasticsearch — with a focus on reliability, maintainability, and performance at scale.",
      iconName: "server-outline"
    },
    {
      title: "Research & Problem Solving",
      description: "Applying rigorous experimental methodology — hypothesis formation, controlled evaluation, comparative analysis — to optimize algorithms and derive actionable insights from complex datasets.",
      iconName: "analytics-outline"
    }
  ];

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a <strong>Full Stack Engineer</strong>. Based in Kathmandu, Nepal, I build production-grade systems at the intersection of software engineering and data-driven intelligence.
        </p>

        <p>
          My engineering work spans scalable backend architectures, search and retrieval pipelines, and end-to-end ML systems trained on real-world datasets. At <strong>Ryyft</strong>, I design and maintain data pipelines using <strong>Elasticsearch</strong> and <strong>PostgreSQL</strong> that power live product features. My applied ML projects include a sentiment classification pipeline trained on 1.6 million tweets, a clinical prediction system for diabetes diagnosis, and a voice-enabled recommendation engine — each built with rigorous model evaluation and error analysis.
        </p>

        <p>
          I am actively seeking <strong>graduate research and teaching opportunities</strong> to advance my work in machine learning, explainable AI, and intelligent systems. If you are a researcher or faculty member working in these areas, I would welcome the opportunity to connect.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Expertise & Solutions</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <motion.li 
              className="service-item cursor-pointer" 
              key={index}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(0, 255, 234, 0.2)",
                borderColor: "var(--orange-yellow-crayola)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="service-icon-box">
                <ion-icon name={service.iconName} style={{ fontSize: "40px", color: "var(--orange-yellow-crayola)" }}></ion-icon>
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
