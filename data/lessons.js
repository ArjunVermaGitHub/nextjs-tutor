const lessons = [
  {
    id: '1',
    title: 'Routing Basics',
    description: 'Learn how to set up basic routing in Next.js.',
    content: `
      <p>Routing in Next.js is based on the file system. Pages are automatically routed based on the file and folder structure.</p>
      
      <h2>Static Routes</h2>
      <p>For example, <code>/app/about/page.jsx</code> becomes <code>/about</code>.</p>
      <pre><code>import { useRouter } from 'next/router';</code></pre>
      <pre><code>function About() { return &lt;div&gt;About Us&lt;/div&gt;; }</code></pre>
      
     <h3>Console Log Example</h3>
      <pre><code>{// File: /app/about/page.jsx
      'use client';

      import { useEffect } from 'react';

      export default function About() {
        useEffect(() => {
          console.log('Navigated to /about — File: /app/about/page.jsx');
        }, []);
        return <div>About Page</div>;
      }}</code></pre>
      <p>This log confirms the route <code>/about</code> is served by the correct file in your project structure.</p>


      <h3>Explain Like I'm 5</h3>
      <p>Imagine your website is like a book. Every page in your book has a unique name like "About". Next.js turns your folder names into web pages!</p>

      <h3>Real-World Example</h3>
      <p>On an e-commerce site, a product detail page might live in <code>/app/products/[id].jsx</code>. This dynamic route matches any product!</p>

      <h3>Interactive Exercise</h3>
      <p>Create a new file called <code>about.jsx</code> in your <code>app</code> folder and visit <code>/about</code> in the browser.</p>
    `,
  },
  {
    id: '2',
    title: 'Nested & Dynamic Routes',
    description: 'Discover how to create nested and dynamic routes in Next.js.',
    content: `
      <p>Next.js supports nested routing and dynamic segments out of the box.</p>

      <h2>Nested Routes</h2>
      <p>Files inside folders become nested routes. For example, <code>/app/blog/post/page.jsx</code> becomes <code>/blog/post</code>.</p>

      <h2>Dynamic Routes</h2>
      <p>Files named like <code>[slug].jsx</code> will capture values in the URL.</p>
      <pre><code>export default function Post({ params }) {
  return &lt;h1&gt;Post: {params.slug}&lt;/h1&gt;;
}</code></pre>

      <h3>Console Log Example</h3>
<pre><code>// File: /app/blog/[slug]/page.jsx
'use client';

import { useEffect } from 'react';

export default function BlogPost({ params }) {
  useEffect(() => {
    console.log(\`Viewing blog post: \${params.slug} — File: /app/blog/[slug]/page.jsx\`);
  }, [params.slug]);

  return <div>Post: {params.slug}</div>;
}</code></pre>
<p>When navigating to a dynamic route like <code>/blog/my-post</code>, this log helps verify it's rendering from the right dynamic file.</p>


      <h3>Explain Like I'm 5</h3>
      <p>Think of dynamic routes like fill-in-the-blanks. <code>/blog/[slug]</code> means "any blog post," and we fill in the blank!</p>

      <h3>Real-World Example</h3>
      <p>You could have routes like <code>/products/keyboard</code> or <code>/products/mouse</code> all powered by <code>[slug].jsx</code>.</p>

      <h3>Interactive Exercise</h3>
      <p>Make a file called <code>[slug].jsx</code> and log <code>params.slug</code> to see the dynamic value.</p>
    `,
  },
  {
    id: '3',
    title: 'Layouts & Colocation',
    description: 'Understand layouts and colocation of components in Next.js.',
    content: `
      <p>Layouts let you persist UI across multiple pages like navbars or sidebars.</p>

      <h2>Creating a Layout</h2>
      <pre><code>export default function Layout({ children }) {
  return &lt;div className="layout"&gt;{children}&lt;/div&gt;;
}</code></pre>

      <h2>Colocation</h2>
      <p>Components and logic live close to the pages that use them, improving organization.</p>

      <h3>Console Log Example</h3>
      <pre><code>// File: /app/layout.jsx
      'use client';

import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    console.log('Root layout rendered — wrapping children from /app/layout.jsx');
  }, []);
  return <div className="layout">{children}</div>;
}</code></pre>
<p>This shows when the layout is rendered and how it wraps your pages consistently across your app.</p>


      <h3>Explain Like I'm 5</h3>
      <p>It’s like having a notebook where every page has the same header and footer automatically!</p>

      <h3>Real-World Example</h3>
      <p>A dashboard layout can wrap all admin pages with a consistent sidebar and header.</p>

      <h3>Interactive Exercise</h3>
      <p>Create a layout component and wrap a few pages with it to see the consistent UI in action.</p>
    `,
  },
  {
    id: '4',
    title: 'Request Handling',
    description: 'Learn how to handle HTTP requests in Next.js.',
    content: `
      <p>Next.js supports API routes to handle requests directly in your app.</p>

      <h2>Creating an API Route</h2>
      <p>Create a file in <code>/pages/api/hello.js</code>:</p>
      <pre><code>export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API!' });
}</code></pre>

      <h2>Handling POST Requests</h2>
      <pre><code>if (req.method === 'POST') {
  // handle form submission
}</code></pre>

      <h3>Console Log Example</h3>
      <pre><code>// File: /app/api/contact/route.js

      export async function POST(request) {
        const body = await request.json();
        console.log('POST /api/contact — Data received:', body);
        return new Response(JSON.stringify({ status: 'success' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }</code></pre>
      <p>This log confirms that your backend route is receiving and parsing POST data correctly.</p>


      <h3>Explain Like I'm 5</h3>
      <p>This is like sending a letter (a request) to your server, and it replies back (a response)!</p>

      <h3>Real-World Example</h3>
      <p>Forms on your website can POST data to <code>/api/contact</code> and process user messages.</p>

      <h3>Interactive Exercise</h3>
      <p>Create an API file and send a fetch request to test it out in the browser console.</p>
    `,
  },
  {
    id: '5',
    title: '404 + Custom Rendering',
    description: 'Explore custom error pages and rendering strategies in Next.js.',
    content: `
      <p>Next.js lets you define custom error pages and fine-tune how pages are rendered.</p>

      <h2>Custom 404 Page</h2>
      <pre><code>// pages/404.jsx
export default function Custom404() {
  return &lt;h1&gt;Page Not Found&lt;/h1&gt;;
}</code></pre>

      <h2>Rendering Strategies</h2>
      <p>Next.js offers different ways to render your pages depending on your use case. Learn each one in detail:</p>
      <ul>
        <li><a href="/lesson/5/ssg">Static Site Generation (SSG)</a> — Pre-renders pages at build time.</li>
        <li><a href="/lesson/5/ssr">Server-Side Rendering (SSR)</a> — Renders pages on each request.</li>
        <li><a href="/lesson/5/csr">Client-Side Rendering (CSR)</a> — Renders pages entirely in the browser. Intentionally left blank to show a 404 page</li>
      </ul>

      <h3>Console Log Example</h3>
<pre><code>// File: /app/products/[id]/page.jsx
import { notFound } from 'next/navigation';

export default function ProductPage({ params }) {
  const isValid = checkIfProductExists(params.id); // mock function

  if (!isValid) {
    console.log('404: Product not found — ID:', params.id);
    return notFound();
  }

  return <div>Product: {params.id}</div>;
}</code></pre>
<p>If you visit a product page that doesn't exist, this console message proves your 404 logic is working.</p>

      <h3>Explain Like I'm 5</h3>
      <p>Imagine you're at a library looking for a book. You go to the shelf where the book is supposed to be… but it's not there.

Instead of just leaving you confused, someone nearby kindly says,
“Hey! That book isn’t here — maybe try a different shelf?”

That’s what a 404 page does on a website. When someone visits a page that doesn’t exist, it shows a friendly message to help them find the right place.

</p>

      <h3>Real-World Example</h3>
      <p>Custom 404s improve UX. For instance, GitHub shows an animated octocat on their 404 page.</p>

      <h3>Interactive Exercise</h3>
      <p>Delete a known route and try visiting it in the browser to see your 404 page.</p>
    `,
  },
];

export default lessons;
