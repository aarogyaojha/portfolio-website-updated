"use client";

import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [isSelectActive, setIsSelectActive] = useState(false);

  const categories = ["All", "Web design", "Applications", "Web development"];

  const projects = [
    {
      title: "E-Commerce",
      category: "Applications",
      image: "/assets/images/project-1.jpg",
    },
    {
      title: "AI ChatBot",
      category: "Applications",
      image: "/assets/images/ai_chatbot_project.png",
    },
    {
      title: "Todoey",
      category: "Applications",
      image: "/assets/images/project-3.jpg",
    },
    {
      title: "Flash Chat",
      category: "Applications",
      image: "/assets/images/project-4.png",
    },
    {
      title: "DSM.",
      category: "Web design",
      image: "/assets/images/project-5.png",
    },
    {
      title: "MetaSpark",
      category: "Web design",
      image: "/assets/images/project-6.png",
    },
    {
      title: "Summary",
      category: "Web development",
      image: "/assets/images/project-7.png",
    },
    {
      title: "Arrival",
      category: "Web development",
      image: "/assets/images/project-9.png",
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
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              key={index}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
