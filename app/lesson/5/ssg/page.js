'use client';

import React from 'react';

export default function SsgPage() {
  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      
      <p>Static Site Generation (SSG) is a technique used in Next.js to pre-render pages at build time. This means that the content of your pages is generated once during the build process, and then served as static HTML when requested by the user.</p>

      <h2>Explain Like I'm 5</h2>
      <p>Imagine you're making a book. Once you finish writing it, you print copies of the book. Whenever someone asks for a book, you give them a copy, without changing anything. This is like Static Site Generation—when the page is built once and given to everyone exactly the same.</p>

      <h2>How SSG Works</h2>
      <ul>
        <li><strong>Build Time Rendering:</strong> The page is generated when you build your app, so it's ready to be served as a static file.</li>
        <li><strong>Fast Loading:</strong> Since the page is pre-built, it can be delivered very quickly to the user.</li>
        <li><strong>Perfect for Static Content:</strong> If your page content doesn’t change often, SSG is a great option to improve performance and SEO.</li>
      </ul>

      <h2>Example Code</h2>
      <pre>
        <code>
          {`// pages/index.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Static Site Generation Example</h1>
      <p>Data fetched during build: {data}</p>
    </div>
  );
}`}
        </code>
      </pre>

      <h2>Console Log Example</h2>
      <pre>
        <code>
{`// pages/index.js or app/ssg/page.jsx
useEffect(() => {
  console.log('[SSG] This runs only after hydration on the client');
}, []);
`}
        </code>
      </pre>
      <p>This console log is showing that the page was pre-rendered at build time, and the data is ready to be served as static HTML to users. It tells us that the data fetching happened during the build process, not during user requests.</p>

      <h2>When to Use SSG</h2>
      <p>SSG is ideal when your page content is relatively static and does not change frequently. Examples include blogs, marketing pages, documentation, and product listings that don’t need to be updated often.</p>

    </div>
  );
}
