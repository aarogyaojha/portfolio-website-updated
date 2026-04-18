"use client";

import { motion } from "framer-motion";

const Resume = () => {
  const skillCategories = [
    {
      title: "Backend & APIs",
      skills: [
        "NestJS",
        "Node.js",
        "PHP",
        "Laravel",
        "REST API",
        "Prisma ORM",
        "Passport.js",
        "Swagger / OpenAPI",
        "ExpressJS",
        "GraphQL",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "Next.js 15",
        "React",
        "TypeScript",
        "JavaScript",
        "Angular",
        "Tailwind CSS",
        "Shadcn/UI",
        "Framer Motion",
      ],
    },
    {
      title: "Auth & Security",
      skills: [
        "JWT",
        "Refresh Token Rotation",
        "Cryptographic OTP",
        "HttpOnly Cookies",
        "RBAC",
      ],
    },
    {
      title: "Databases & Infrastructure",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "AWS",
        "Linux",
      ],
    },
    {
      title: "Machine Learning & Data",
      skills: [
        "Python",
        "PyTorch",
        "DistilBERT",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Flask",
        "Streamlit",
        "TF-IDF",
        "NLP",
      ],
    },
  ];

  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <motion.li
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="h4 timeline-item-title">
              CMR Institute of Technology — B.E. Computer Science
            </h4>
            <span>2021 – 2025 | CGPA: 8.5 / 10</span>
            <p className="timeline-text">
              Relevant coursework: Machine Learning, Artificial Intelligence,
              Data Structures & Algorithms, Operating Systems, Computer
              Networks, DBMS, OOP.
            </p>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              Secretary, Rise Technical Club — organized AI/ML workshops,
              mentored 20+ junior members. Hackathon finalist, Shristi 2024
              (Bengaluru) — awarded ₹50,000 for ML-powered solution.
            </p>
          </motion.li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <motion.li
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="h4 timeline-item-title">
              Associate Software Developer (Full Stack)
            </h4>
            <h5 className="timeline-item-subtitle">
              Conceptual Frame · Kathmandu, Nepal
            </h5>
            <span>April 2026 – Present</span>
            <p className="timeline-text">
              Building and maintaining client-facing web applications using PHP
              and Laravel. Leading technical design decisions, designing system
              architecture, and developing RESTful APIs from requirements
              through to deployment.
            </p>
          </motion.li>
          <motion.li
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="h4 timeline-item-title">
              Junior Full Stack Engineer
            </h4>
            <h5 className="timeline-item-subtitle">Ryyft · Kathmandu, Nepal</h5>
            <span>November 2025 – April 2026</span>
            <p className="timeline-text">
              Designed and shipped production-grade RESTful APIs using NestJS,
              Prisma, and PostgreSQL serving real user traffic. Reduced API
              latency through performance profiling and query optimization.
              Integrated supervised ML models into backend workflows to support
              predictive product features.
            </p>
          </motion.li>
          <motion.li
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="h4 timeline-item-title">
              Full Stack Developer Intern
            </h4>
            <h5 className="timeline-item-subtitle">
              Abblor Tech · Bengaluru, India
            </h5>
            <span>July 2024 – March 2025</span>
            <p className="timeline-text">
              Built data-centric admin tools using Angular and REST APIs.
              Developed modular backend integrations that improved system
              maintainability and reduced coupling between services.
            </p>
          </motion.li>
        </ol>
      </section>

      <section className="skill">
        <div className="title-wrapper" style={{ marginBottom: "25px" }}>
          <h3 className="h3 skills-title">Technical Skills</h3>
        </div>

        <div
          className="skills-content"
          style={{ display: "grid", gap: "25px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4
                className="h4"
                style={{
                  marginBottom: "12px",
                  color: "var(--orange-yellow-crayola)",
                }}
              >
                {category.title}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    style={{
                      background: "var(--border-gradient-onyx)",
                      padding: "5px 15px",
                      borderRadius: "8px",
                      fontSize: "var(--fs-7)",
                      color: "var(--light-gray)",
                      border: "1px solid var(--jet)",
                      display: "inline-block",
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "var(--orange-yellow-crayola)",
                      color: "var(--white-2)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div
        className="download-resumes"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <motion.div
          className="download-resume"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/assets/resumes/Full_Stack_Engineer.pdf"
            download
            className="form-btn"
          >
            <ion-icon name="download-outline"></ion-icon>
            <span>Resume</span>
          </a>
        </motion.div>
      </div>
    </article>
  );
};

export default Resume;
