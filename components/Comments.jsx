'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import styles from './comments.module.scss'; // <-- Import the SCSS module

const Comments = ({ lessonId }) => {
  const { user } = useUser();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(`/api/comments/${lessonId}`);
      const data = await res.json();
      setComments(data);
      setIsLoading(false);
    }

    fetchComments();
  }, [lessonId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment) return;

    const username = user?.fullName || user?.firstName || 'Anonymous';

    const res = await fetch(`/api/comments/${lessonId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: newComment, username }),
    });

    if (res.ok) {
      setNewComment('');
      const savedComment = await res.json();
      setComments((prevComments) => [...prevComments, savedComment]);
    } else {
      alert('Error adding comment');
    }
  };

  return (
    <div className={styles.commentsSection}>
      <h3 className={styles.commentsTitle}>Comments</h3>

      {isLoading ? (
        <p className={styles.commentsLoading}>Loading comments...</p>
      ) : (
        <ul className={styles.commentsList}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.commentItem}>
              <div className={styles.commentHeader}>
                <span className={styles.commentUsername}>{comment.username || 'Anonymous'}</span>
                <span className={styles.commentTimestamp}>{new Date(comment.createdAt).toLocaleString()}</span>
              </div>
              <p className={styles.commentText}>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment..."
          className={styles.commentTextarea}
          rows="4"
        />
        <button type="submit" className={styles.commentSubmit}>
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
