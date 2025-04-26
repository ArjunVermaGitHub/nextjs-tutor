// app/lesson/5/csr/not-found.jsx
import Link from 'next/link';
import './not-found.scss';  // optional: create custom styles for this page

export default function CSRNotFound() {
  return (
    <div className="not-found-container">
      <h1>Oops! This Sub-Topic Needs Verification</h1>
      <p>We're still in the process of adding detailed information for <strong>Client-Side Rendering (CSR)</strong> to this lesson.</p>
      <p>Please check back later, or explore other sub-topics in the lesson:</p>
      <ul>
        <li><Link href="/lesson/5/ssg">Static Site Generation (SSG)</Link></li>
        <li><Link href="/lesson/5/ssr">Server-Side Rendering (SSR)</Link></li>
      </ul>
      <p>Thank you for your patience!</p>
    </div>
  );
}
