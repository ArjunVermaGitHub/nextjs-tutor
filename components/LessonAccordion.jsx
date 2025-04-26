'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './LessonAccordion.module.scss';

import { LESSON_STATUSES } from '@/constants/lessonStatus';

const LessonAccordion = ({ lessonId, title, description, status = 'notStarted' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span className={styles.title}>{title}</span>
        <span className={styles.status}>{LESSON_STATUSES[status]?.label}</span>
      </div>
      {isOpen && (
        <div className={styles.content}>
          <p>{description}</p> {/* Dynamic lesson description */}
          <Link href={`/lesson/${lessonId}`}>Go to lesson →</Link>
        </div>
      )}
    </div>
  );
};

export default LessonAccordion;
