import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a
            href="mailto:bhaveshnegi98@gmail.com"
            aria-label="Email Bhavesh Negi"
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="mailto:bhaveshnegi98@gmail.com">bhaveshnegi98@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/bhavesh-negi-59314224a/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bhavesh-negi-59314224a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/Bhavesh Negi
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://github.com/bhaveshnegi"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
          <a
            href="https://github.com/bhaveshnegi"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/bhaveshnegi
          </a>
        </li>
      </ul>
    </footer>
  );
};
