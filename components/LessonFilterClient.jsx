'use client';

import { useState } from 'react';
import LessonAccordion from '@/components/LessonAccordion';
import LessonFilter from '@/components/LessonFilter';

export default function LessonFilterClient({ lessons, lessonProgress }) {
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const filteredLessons = lessons
    .map((lesson) => ({
      ...lesson,
      status: lessonProgress?.[lesson.lessonId] || 'notStarted',
    }))
    .filter((lesson) =>
      selectedStatuses.length === 0 || selectedStatuses.includes(lesson.status)
    );

  const updateLessonStatus = async (lessonId, status) => {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessonId, status }),
    });
  };

  console.log({filteredLessons})
  return (
    <div>
      <LessonFilter selectedStatuses={selectedStatuses} setSelectedStatuses={setSelectedStatuses} />
      <div>
        {filteredLessons.map((lesson) => (
          <LessonAccordion
            key={lesson.id}
            lessonId={lesson.id}
            title={lesson.title}
            description={lesson.description}
            status={lesson.status}
            onStatusChange={(status) => updateLessonStatus(lesson.id, status)}
          />
        ))}
      </div>
    </div>
  );
}
