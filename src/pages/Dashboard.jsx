import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ProfileCarousel from '../components/ProfileCarousel';
import Bio from '../components/Bio';
import { ThemeContext } from '../ThemeContext';
import Navbar from '../components/Navbar';
import styles from './Dashboard.module.css'; // Import your CSS
import '../styles.css';

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  const containerClassName = isDarkMode ? 'container dark' : 'container light';
  const bioClassName = isDarkMode ? 'textDark' : 'textLight';

  const [showShortBio, setShowShortBio] = useState(true);

  const handleShortBioClick = () => {
    setShowShortBio(true);
  };

  const handleLongBioClick = () => {
    setShowShortBio(false);
  };

  return (
    <div>
      <Navbar />
      <div className={`${containerClassName} custom-container`}>
        <div className={styles.twoColumnContainer}>
          {/* Left Column (ProfileCarousel) */}
          <div className={`${`${styles.carouselColumn}carouselMarging`} carouselMarging`}>
            <ProfileCarousel className="w-full" />
          </div>

          {/* Right Column (Bio) */}
          <div className={`${styles.column} ${bioClassName}`}>
            {/* Pass handleShortBioClick and handleLongBioClick as props */}
            <Bio
              showShortBio={showShortBio}
              handleShortBioClick={handleShortBioClick}
              handleLongBioClick={handleLongBioClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
