import React, { useState } from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      src: "/personal-page/images/minigame.png",
      link: "https://tomidr21.github.io/mini-game/",
      text: " OOP JavaScript Mini-Game",
      imgText: "View project",
    },
    {
      src: "/personal-page/images/crud.png",
      link: "https://tomidr21.github.io/to-do-list/",
      text: " ReactJS CRUD Application",
      imgText: "View project (Github Pages)",
    },
    {
      src: "/personal-page/images/comingsoon.png",
      link: "",
      text: "This is Project 2",
      imgText: "dd",
    },
    {
      src: "/personal-page/images/comingsoon.png",
      link: "",
      text: "This is Project 3",
      imgText: "Coming sooner or later...",
    },
    {
      src: "/personal-page/images/comingsoon.png",
      link: "",
      text: "This is Project 4",
      imgText: "Coming sooner or later...",
    },
    {
      src: "/personal-page/images/comingsoon.png",
      link: "",
      text: "This is Project 5",
      imgText: "Coming sooner or later...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBoxes = 4; // Always show 4 boxes

  const nextSlide = () => {
    if (currentIndex < projects.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className={styles.projects}>
      <h2>Portfolio</h2>
      <div className={styles.boxContainer}>
        <button
          className={styles.prevButton}
          onClick={prevSlide}
          disabled={currentIndex === 0} // Disable when at first item
        >
          <i className="fa-solid fa-less-than"></i>
        </button>

        <div className={styles.carouselWrapper}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(-${currentIndex * 260}px)` }} // Adjust based on item width
          >
            {projects.map((project, i) => (
              <div key={i} className={styles.boxWrapper}>
                <div className={styles.box}>
                  <img src={project.src} alt={`Project ${i + 1}`} />
                  <div className={styles.infoBox}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.imgText}
                    </a>
                  </div>
                </div>
                <p>{project.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.nextButton}
          onClick={nextSlide}
          disabled={currentIndex >= projects.length - 4} // Disable when at last possible slide
        >
          <i className="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </section>
  );
};

export default Projects;
