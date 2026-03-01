"use client";

import { motion } from "framer-motion";

const Resume = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter", "Flask", "Streamlit", "Supervised Learning", "NLP", "TF-IDF", "Sentiment Analysis", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Full Stack Development",
      skills: ["Next.js", "NestJS", "React", "Node.js", "ExpressJS", "TypeScript", "JavaScript", "GraphQL", "REST API", "Prisma"]
    },
    {
      title: "Databases & Infrastructure",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Docker", "AWS (S3/EC2/Lambda)", "GitHub Actions", "Linux"]
    },
    {
      title: "Mathematics & CS Fundamentals",
      skills: ["Linear Algebra", "Probability & Statistics", "Data Structures & Algorithms", "Operating Systems", "Computer Networks"]
    }
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
            <h4 className="h4 timeline-item-title">CMR Institute of Technology — Bachelor of Engineering, Computer Science</h4>
            <span>2021 – 2025 | CGPA: 8.5 / 10</span>
            <p className="timeline-text">
              <strong>Relevant Coursework:</strong> Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Object-Oriented Programming
            </p>
            <p className="timeline-text" style={{ marginTop: "10px" }}>
              <strong>Activities:</strong> Secretary, Rise Technical Club — organized AI/ML workshops and mentored 20+ junior members in technical projects.
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
            <h4 className="h4 timeline-item-title">Junior Full Stack Engineer</h4>
            <h5 className="timeline-item-subtitle">Ryyft · Kathmandu, Nepal</h5>
            <span>November 2025 – Present</span>
            <p className="timeline-text">
              Building scalable backend services and data pipelines for production systems. Key contributions include designing RESTful APIs using NestJS and Prisma, integrating Elasticsearch for semantic search and large-scale data retrieval, and applying supervised ML techniques to support predictive product features.
            </p>
          </motion.li>
          <motion.li 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="h4 timeline-item-title">Full Stack Developer Intern</h4>
            <h5 className="timeline-item-subtitle">Abblor Tech · Bengaluru, India (Remote)</h5>
            <span>July 2024 – March 2025</span>
            <p className="timeline-text">
              Developed data-centric administrative tools using Angular and REST APIs. Analyzed backend data to identify usage trends and performance bottlenecks, with findings directly informing product decisions. Built modular backend integrations that improved system maintainability.
            </p>
          </motion.li>
        </ol>
      </section>

      <section className="skill">
        <div className="title-wrapper" style={{ marginBottom: "25px" }}>
          <h3 className="h3 skills-title">Technical Skills</h3>
        </div>
        
        <div className="skills-content" style={{ display: "grid", gap: "25px" }}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="h4" style={{ marginBottom: "12px", color: "var(--orange-yellow-crayola)" }}>{category.title}</h4>
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
                      display: "inline-block"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "var(--orange-yellow-crayola)",
                      color: "var(--white-2)"
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

      <div className="download-resumes" style={{
        textAlign: "center",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}>
        <motion.div 
          className="download-resume"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/assets/resumes/full_stack_developer_resume.pdf" download className="form-btn">
            <ion-icon name="download-outline"></ion-icon>
            <span>Download Full Stack CV</span>
          </a>
        </motion.div>
      </div>
    </article>
  );
};

export default Resume;
