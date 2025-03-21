import React from "react";
import styles from "./footer.module.css";
import { useState } from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <a
            href="https://github.com/tomidr21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tomasdirisio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
