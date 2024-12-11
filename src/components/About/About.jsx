import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const aboutData = [
  {
    icon: "about/cursorIcon.png",
    title: "Frontend Developer",
    description: "I'm a frontend developer with experience in building responsive and optimized sites",
  },
  {
    icon: "about/serverIcon.png",
    title: "Backend Developer",
    description: "I have experience developing fast and optimised back-end systems and APIs",
  },
  {
    icon: "about/uiIcon.png",
    title: "UI Designer",
    description: "I have designed multiple landing pages and have created design systems as well",
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="A person sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {aboutData.map((item, index) => (
            <li className={styles.aboutItem} key={index}>
              <img src={getImageUrl(item.icon)} alt={`${item.title} icon`} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
