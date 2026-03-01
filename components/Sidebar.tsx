"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box p-0 overflow-hidden">
          <motion.img
            src="/assets/images/my-avatar.jpg"
            alt="Aarogya Ojha"
            width="80"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="cursor-pointer"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Aarogya Ojha">Aarogya Ojha</h1>
          <motion.p 
            className="title cursor-default"
            whileHover={{ color: "var(--orange-yellow-crayola)", scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Junior Full Stack Engineer
          </motion.p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>{isActive ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:arogyaojha251@gmail.com" className="contact-link">
                arogyaojha251@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+9779815929233" className="contact-link">
                +977 9815929233
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-07-25">July 25, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Kathmandu, Nepal</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>


      </div>
    </aside>
  );
};

export default Sidebar;
