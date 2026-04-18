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
      title: "ML Integration into Products",
      description:
        "Integrating trained ML models into backend workflows as real product features — not notebook demos. Experience deploying classifiers as independent services with clean APIs consumed by the main backend.",
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
          I am a <strong>Full Stack Engineer</strong> based in Kathmandu, Nepal.
          I design and ship production backend systems — REST APIs, auth
          infrastructure, real-time services — and integrate ML models into
          product workflows.
        </p>

        <p>
          I currently work as an Associate Software Developer at{" "}
          <strong>Conceptual Frame</strong>, building client-facing web
          applications with PHP and Laravel. Previously at{" "}
          <strong>Ryyft</strong>, I designed and maintained NestJS APIs and
          PostgreSQL pipelines serving real user traffic, and integrated
          supervised ML models into backend workflows for predictive product
          features.
        </p>

        <p>
          I take on freelance projects on evenings and weekends — backend APIs,
          full-stack web apps, and ML integration work. If you have a project
          that needs careful backend architecture and reliable delivery, I would
          be glad to hear about it.
        </p>
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
