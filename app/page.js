'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'; // Import react-query hooks
import LessonAccordion from '@/components/LessonAccordion';
import LessonFilter from '@/components/LessonFilter';
import ProgressBar from '@/components/ProgressBar';

// Fetch lessons from API
const fetchLessons = async () => {
  const res = await fetch('/api/lessons');
  if (!res.ok) {
    throw new Error('Failed to fetch lessons');
  }
  return res.json();
};

// Fetch lesson progress from API
const fetchProgress = async () => {
  const res = await fetch('/api/progress');
  if (!res.ok) {
    throw new Error('Failed to fetch progress');
  }
  return res.json();
};

// Update lesson status API
const updateLessonStatus = async ({ lessonId, status }) => {
  const res = await fetch('/api/progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lessonId, status }),
  });
  if (!res.ok) {
    throw new Error('Failed to update progress');
  }
  return res.json();
};

export default function LessonsPage() {
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const { user, isSignedIn, isLoaded } = useUser();
  const queryClient = useQueryClient(); // Get the query client instance

  // Fetch lessons and lesson progress using react-query
  const { data: lessons, isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons'], // Provide a query key
    queryFn: fetchLessons, // Define the query function
  });

  const { data: lessonProgress, isLoading: progressLoading } = useQuery({
    queryKey: ['progress'], // Provide a query key
    queryFn: fetchProgress, // Define the query function
  });

  // Mutation to update the lesson progress
  const mutation = useMutation({
    mutationFn: updateLessonStatus, // Define the mutation function
    onSuccess: () => {
      // Invalidate queries to refetch data if needed
      queryClient.invalidateQueries(['lessons']);
      queryClient.invalidateQueries(['progress']);
    },
  });

  if (lessonsLoading || progressLoading || !isLoaded) {
    return <div>Loading...</div>;
  }

  // Filter lessons based on selectedStatuses
  const filteredLessons = lessons
    .map((lesson) => ({
      ...lesson,
      status: lessonProgress?.[lesson.id] || 'notStarted',
    }))
    .filter((lesson) =>
      selectedStatuses?.length === 0 || selectedStatuses?.includes(lesson.status)
    );

  const completedCount = lessonProgress && Object.values(lessonProgress).filter((s) => s === 'completed').length;

  const handleStatusChange = (lessonId, status) => {
    mutation.mutate({ lessonId, status });
  };

  return (
    isSignedIn ? (
      <div>
        <div className="info-banner">
          <p>
            🚀 This course teaches Next.js 15 with the new App Router architecture! Stay up-to-date with the latest best practices.
          </p>
        </div>

        <h2>
          {`Welcome, ${user.firstName || user.username || 'friend'}.`}
          <br />
          {isSignedIn && (
            <div>
              <label>Your Progress:</label>
              <ProgressBar completed={completedCount} total={lessons.length} />
            </div>
          )}
        </h2>

        <br />
        <h2>{selectedStatuses?.length === 0 ? 'A list of all Next.js lessons is shown below' : 'Filtered Lessons'}</h2>

        <LessonFilter selectedStatuses={selectedStatuses} setSelectedStatuses={setSelectedStatuses} />

        <div>
          {filteredLessons.map((lesson) => (
            <LessonAccordion
              key={lesson.id}
              lessonId={lesson.id}
              title={lesson.title}
              description={lesson.description}
              status={lesson.status}
              onStatusChange={(status) => handleStatusChange(lesson.id, status)}
            />
          ))}
        </div>
      </div>
    ) : (
      <div>
        <h2>Welcome to the Next.js Trainer!</h2>
        <p>Please sign in to view your progress.</p>
        <p>Once you sign in, you will be able to progress and learn about Next.js with some easy and fun lessons. Sign in now to start your journey!</p>
      </div>
    )
  );
}
