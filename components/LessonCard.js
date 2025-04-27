// /components/LessonCard.jsx
'use client'; // This tells Next.js that this file should be rendered on the client

import { useState } from 'react';
import Link from 'next/link';

const LessonCard = ({ lessonId, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`lesson-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>{title}</h2>
      <Link href={`/lesson/${lessonId}`}>
        Learn More
      </Link>
    </div>
  );
};

export default LessonCard;
