import React from "react";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Tomás Di Risio</h1>
        <hr></hr>
        <h2>Your next employee</h2>
        <p>
          The person behind this text (Tomás Di Risio, a{" "}
          <strong> human being</strong>) has finally decided to go all-in on the
          self-taught journey and will get a<strong> Full-Stack</strong>{" "}
          developer job.
        </p>
      </header>
    </>
  );
};
export default Header;
