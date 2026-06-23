"use client";

import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      title: "Backend APIs & System Design",
      description:
        "Building production-grade REST APIs and backend systems using NestJS, Prisma, and PostgreSQL — with deliberate attention to auth security, role-based access, and API design that doesn't require rewrites six months later.",
      iconName: "server-outline",
    },
    {
      title: "Full-Stack Web Applications",
      description:
        "End-to-end delivery from database schema to deployed frontend. Next.js 15, React, TypeScript, Tailwind CSS — building complete products, not just the backend or just the UI.",
      iconName: "code-slash-outline",
    },
    {
      title: "ML Integration & NLP Research",
      description:
        "Integrating trained ML models into backend workflows as real product features. Active NLP researcher — currently studying how transformer models behave under domain shift compared to classical baselines.",
      iconName: "hardware-chip-outline",
    },
    {
      title: "Auth & Security Infrastructure",
      description:
        "JWT with refresh token rotation, cryptographic OTP, HttpOnly cookies, role-based field-level access control, and forensic audit logging. Auth that holds up under scrutiny, not just tutorial-level implementation.",
      iconName: "shield-checkmark-outline",
    },
  ];

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Aarogya — a Full Stack Engineer based in Kathmandu 
          who works across TypeScript, PHP, and Python depending 
          on what the problem needs.
        </p>

        <p>
          I build production backend systems by day and do NLP 
          research on the side. This is where I write about both.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a
            href="/assets/resumes/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="form-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              width: "max-content",
              textDecoration: "none"
            }}
          >
            <ion-icon name="download-outline"></ion-icon>
            <span>Download Resume</span>
          </a>
        </div>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I can build for you</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <motion.li
              className="service-item cursor-pointer"
              key={index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(0, 255, 234, 0.2)",
                borderColor: "var(--orange-yellow-crayola)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="service-icon-box">
                <ion-icon
                  name={service.iconName}
                  style={{
                    fontSize: "40px",
                    color: "var(--orange-yellow-crayola)",
                  }}
                ></ion-icon>
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
