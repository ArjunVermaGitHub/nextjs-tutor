'use client';

import { useState, useEffect } from 'react';
import { LESSON_STATUSES, STATUS_KEYS } from '@/constants/lessonStatus';

const LessonStatusSelector = ({ lessonId, onStatusChange }) => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the current lesson status from API
  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch('/api/progress', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          const currentStatus = data?.[lessonId] || 'notStarted';
          setSelectedStatus(currentStatus);
        }
      } catch (error) {
        console.error('Failed to fetch lesson status:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
  }, [lessonId]);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);

    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, status: newStatus }),
      });

      if (onStatusChange) {
        onStatusChange(newStatus);
      }
    } catch (error) {
      console.error('Failed to update lesson status:', error);
    }
  };

  if (loading || selectedStatus === null) {
    return <div>Loading status...</div>;
  }

  return (
    <div>
      <select value={selectedStatus} onChange={handleStatusChange}>
        {STATUS_KEYS.map((key) => (
          <option key={key} value={key}>
            {LESSON_STATUSES[key].label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LessonStatusSelector;
