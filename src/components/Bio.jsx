import React, { useContext } from "react";
import styles from "./Bio.module.css";
import stylesBtn from '../pages/Dashboard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";

const Bio = ({ showShortBio, handleShortBioClick, handleLongBioClick, showExploreButton}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const textClassName = isDarkMode ? styles.textDark : styles.textLight;
  const bioContent = showShortBio
    ? "Lola Russell is a Full Stack Software Engineer based in Los Angeles, CA. With a background in artistry and a passion for back-end development, Lola brings a unique blend of creativity and technical expertise to her projects. She leverages her meticulous attention to detail and problem-solving skills to create robust and efficient applications. Lola is committed to delivering seamless user experiences and building impactful solutions that drive business success."
    : "Lola Russell is a Full Stack Software Engineer based in Los Angeles, CA. With a strong background in artistry and a deep passion for back-end development, Lola approaches her work with a unique perspective that combines creativity and logic. Drawing from her experience as a salon owner and stylist, Lola understands the importance of seamless design and attention to detail in creating exceptional user experiences.\n\nHaving completed an intensive coding bootcamp and a Software Engineering Immersive Fellowship, Lola has acquired a wide range of technical skills. She is proficient in programming languages such as SQL, JavaScript, HTML, CSS, React.JS, and Python/Django. Lola is well-versed in frameworks and libraries such as Flask, Node.JS/Express, jQuery, and Mongoose, and has experience working with databases like MySQL, MongoDB, and PostgreSQL. She is also familiar with tools like Git, GitHub, RESTful APIs, and the MERN stack.\n\nLola's journey into software engineering was driven by her desire to combine her artistic creativity with her problem-solving abilities. She sees creativity and logic as partners in innovative thinking and believes in leveraging technology to build impactful and sustainable solutions. Lola's meticulous attention to detail and her commitment to delivering seamless user experiences set her apart in the field.\n\nOutside of coding, Lola enjoys spending time with her Malamute dog, exploring the great outdoors through hiking and traveling, and nurturing her collection of over 30 house plants. Her diverse interests and experiences contribute to her well-rounded approach to problem-solving and her ability to think outside the box.";

  return (
    <div className={styles.container}>
      {/* Set a fixed height for the Bio container */}
      <div className={styles.bioContainer} style={{ height: "400px" }}>
        <div className={styles.buttonGroup}>
          <button
            onClick={handleShortBioClick}
            className={`${styles.button} ${showShortBio ? styles.active : ""
              }`}
          >
            Short
          </button>
          <button
            onClick={handleLongBioClick}
            className={`${styles.button} ${!showShortBio ? styles.active : ""
              }`}
          >
            Long
          </button>
        </div>
        <div className={styles.bioContent}>
          {showShortBio ? (
            <>
              <h2>Short Bio</h2>
              <p className={`${styles.text} ${textClassName}`}>{bioContent}</p>
            </>
          ) : (
            <>
              <h2>Long Bio</h2>
              <p className={`${styles.text} ${textClassName} ${!showShortBio ? styles.longBio : ''}`}>
  {bioContent}
</p>

            </>
          )}
        </div>

        {/* Include the actions within the Bio component */}
        <div className={stylesBtn.bioActions}>
          <Link to="/projects">
            <button className={stylesBtn.exploreButton}>
              Explore Projects
            </button>
          </Link>

          <div className={stylesBtn.socialIcons}>
            <a
              href="https://www.linkedin.com/in/lola-russell-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className={stylesBtn.socialIcon}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/LeeLoo3434"
              target="_blank"
              rel="noopener noreferrer"
              className={stylesBtn.socialIcon}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
