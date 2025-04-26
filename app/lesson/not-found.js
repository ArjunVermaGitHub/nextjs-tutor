// /app/not-found.js
import Link from 'next/link';

const Custom404 = () => (
  <div>
    <h1>Oops! The lesson you're looking for doesn't exist.</h1>
    <p>Looks like you've reached the 5th lesson, but it's not available yet.</p>
    <Link href="/">Go Back to Home</Link>
  </div>
);

export default Custom404;
