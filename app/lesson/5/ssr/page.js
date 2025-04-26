'use client';

import React from 'react';

export default function SsrPage() {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Server-Side Rendering (SSR) in Next.js is a technique where the page is rendered on the server at the time of the request, ensuring that the content is dynamically generated for each request.</p>

      <h2>Explain Like I'm 5</h2>
      <p>Imagine you’re ordering a custom sandwich at a sandwich shop. When you ask for it, they make the sandwich fresh with the toppings you want. Every time someone asks, they make a new sandwich for them. This is like Server-Side Rendering—each request gets fresh content, made right then and there.</p>

      <h2>How SSR Works</h2>
      <ul>
        <li><strong>Request Time Rendering:</strong> The page is rendered on the server each time a user requests the page, ensuring up-to-date content.</li>
        <li><strong>Slower Initial Load:</strong> Since the server has to render the page, it takes longer than SSG for the page to be ready for the user.</li>
        <li><strong>Great for Dynamic Content:</strong> SSR is perfect for pages that require real-time data (like user profiles or news websites).</li>
      </ul>

      <h2>Example Code</h2>
      <pre>
        <code>
          {`// pages/index.js
export async function getServerSideProps() {
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
      <h1>Server-Side Rendering Example</h1>
      <p>Data fetched during request: {data}</p>
    </div>
  );
}`}
        </code>
      </pre>

      <h2>Console Log Example</h2>
      <pre>
        <code>
{`// app/ssr/page.jsx
console.log('[SSR] This log confirms the page was rendered on the server at request time.');
`}
        </code>
      </pre>
      <p>This console log shows that the page was dynamically generated on each request. The data is fetched live during the request, which is useful when the page's content changes often or is user-specific.</p>

      <h2>When to Use SSR</h2>
      <p>SSR is ideal for pages where content needs to be fetched and rendered in real-time based on each request. Examples include dashboards, real-time data apps, and user-specific content.</p>

    </div>
  );
}
