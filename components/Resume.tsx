"use client";

import { motion } from "framer-motion";

const Resume = () => {
  const skills = [
    { name: "NestJS", value: 85 },
    { name: "Next.js", value: 90 },
    { name: "Prisma", value: 88 },
    { name: "PostgreSQL", value: 80 },
    { name: "MongoDB", value: 75 },
    { name: "Redis", value: 70 },
    { name: "React", value: 90 },
    { name: "Tailwind CSS", value: 95 },
    { name: "ExpressJS", value: 85 },
    { name: "Node.js", value: 85 },
    { name: "TypeScript", value: 90 },
    { name: "JavaScript", value: 95 },
    { name: "GraphQL", value: 75 },
    { name: "Docker", value: 70 },
    { name: "AWS (S3/EC2/Lambda)", value: 65 },
    { name: "REST API", value: 90 },
    { name: "Unit Testing (Jest)", value: 75 },
    { name: "CI/CD (GitHub Actions)", value: 80 }
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
            <h4 className="h4 timeline-item-title">CMR Institute of Technology</h4>
            <span>2021 — 2025</span>
            <p className="timeline-text">
              CS Graduate Engineer with a CGPA of 8.5/10. Developed a strong
              foundation in full-stack development, distributed systems, and modern
              web architecture.
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
            <h4 className="h4 timeline-item-title">Full Stack Developer</h4>
            <h5 className="timeline-item-subtitle">Ryyft</h5>
            <span>Nov 2025 — Present</span>
            <p className="timeline-text">
              Leading the development of scalable web solutions, focusing on 
              seamless frontend experiences and robust backend performance.
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
            <h5 className="timeline-item-subtitle">Abblor Tech (Remote)</h5>
            <span>June 2024 — Feb 2025</span>
            <p className="timeline-text">
              Contributed to building a responsive, API-integrated web platform
              using Angular and TypeScript. Collaborated remotely to enhance UI/UX.
            </p>
          </motion.li>
        </ol>
      </section>

      <section className="skill">
        <div className="title-wrapper" style={{ marginBottom: "20px" }}>
          <h3 className="h3 skills-title" style={{ marginBottom: "5px" }}>My skills</h3>
          <p style={{ color: "var(--light-gray-70)", fontSize: "var(--fs-8)", fontWeight: "var(--fw-300)" }}>Self-reported proficiency in modern Full Stack ecosystem</p>
        </div>
        
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <motion.li 
              className="skills-item" 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <motion.div
                  className="skill-progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
            </motion.li>
          ))}
        </ul>
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
