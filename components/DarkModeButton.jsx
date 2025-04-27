'use client';

import { useEffect, useState } from 'react';
import styles from './darkmodebutton.module.scss';

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkModeEnabled);
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <div className={styles.darkModeToggle}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={toggleDarkMode}
          checked={isDarkMode}
        />
        <span className={styles.slider}></span>
        {'Dark Mode'}
      </label>
    </div>
  );
}
