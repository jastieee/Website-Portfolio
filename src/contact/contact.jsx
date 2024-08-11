import React from "react";
import { getImageUrl } from "../utilities";
import styles from './contact.module.css'; // Correctly importing with 'styles'

export const Contacts = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cruzjastie@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("email.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/jhustie-cruz/">
            <img src={getImageUrl("linkedin.png")} alt="LinkedIn icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/jastieee">
            <img src={getImageUrl("github.png")} alt="Github icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.facebook.com/skwangur27">
            <img src={getImageUrl("fb.png")} alt="Facebook icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
