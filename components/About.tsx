"use client";

import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      title: "Full-Stack Architecture",
      description: "Designing end-to-end systems that scale. From robust NestJS/Prisma backends to high-performance Next.js frontends.",
      iconName: "layers-outline"
    },
    {
      title: "API Design & Integration",
      description: "Crafting clean, documented REST and GraphQL APIs that serve as the backbone for web and mobile platforms.",
      iconName: "code-slash-outline"
    },
    {
      title: "Database Performance",
      description: "Optimizing PostgreSQL and MongoDB schemas for speed and reliability, ensuring your data is always safe and accessible.",
      iconName: "cube-outline"
    },
    {
      title: "DevOps & Deployment",
      description: "Automating the path from code to production with Docker, GitHub Actions, and scalable AWS infrastructure.",
      iconName: "rocket-outline"
    }
  ];

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a <strong>Full Stack Engineer</strong> and <strong>CS Graduate Engineer</strong> dedicated to building 
          high-performance digital solutions that solve real-world business challenges. Based in Lalitpur, Nepal, I bridge 
          the gap between complex technical requirements and seamless user experiences.
        </p>

        <p>
          My expertise lies in the <strong>modern JavaScript ecosystem</strong>, utilizing <strong>Next.js</strong>, <strong>NestJS</strong>, 
          and <strong>Prisma</strong> to build applications that are not just functional, but <em>production-ready</em>. I don't 
          just write code; I architect systems that are scalable, maintainable, and built with industry best practices in mind.
        </p>

        <p>
          Whether you are a startup looking to launch your MVP or an established business needing a robust internal tool, 
          I bring a disciplined, engineering-first approach to every project. My goal is to deliver technical excellence 
          that provides a clear competitive advantage.
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
