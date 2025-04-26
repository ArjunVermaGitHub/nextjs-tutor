'use client';

import { useState } from 'react';
import { LESSON_STATUSES, STATUS_KEYS } from '@/constants/lessonStatus';
import styles from './LessonFilter.module.scss';

const LessonFilter = ({ selectedStatuses, setSelectedStatuses }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setSelectedStatuses((prevSelected) => {
      // Add or remove the status from the selected list
      if (prevSelected.includes(value)) {
        return prevSelected.filter((status) => status !== value);
      }
      return [...prevSelected, value];
    });
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleFilterVisibility} className={styles.toggleButton}>
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>

      {isFilterVisible && (
        <div className={styles.filterContainer}>
          <h3 className={styles.filterTitle}>Filter Lessons by Status</h3>
          <div className={styles.statusOptions}>
            {STATUS_KEYS.map((key) => (
              <label key={key} className={styles.statusLabel}>
                <input
                  type="checkbox"
                  value={key}
                  checked={selectedStatuses.includes(key)}
                  onChange={handleStatusChange}
                  className={styles.checkbox}
                />
                {LESSON_STATUSES[key].label}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonFilter;
