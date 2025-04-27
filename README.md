# Website Write-Up

## Features

- **Clerk Login**: Ensures user data is tracked effectively.
- **Backend**: Serves a list of lessons and their details via an API, along with the user's progress for each lesson.
- **CSR & SSG**: The site combines **Client-Side Rendering (CSR)** on the home page and **Static Site Generation (SSG)** with some CSR updates on the lesson page.
- **Nested Routes & 404**: Demonstrated on lesson 5 within sub-links.
- **UI/UX**:
  - Includes elements like **progress trackers**, **accordions**, **links and backlinks**, **code blocks**, **banners**, and **filters**.
  - A structured learning approach with:
    - Ability to update and filter lessons by their status.
    - Focus on **console log examples** to explain concepts.
    - An **"Explain Like I'm 5"** section for simplicity.
    - **Real-world examples** to motivate concept use.
    - A **voluntary interactive exercise** at the end of each lesson.
- **Comments Section**: Provides feedback and enhances the learning experience.
- **React Query**: Utilized for data fetching and management.
- **Vercel Integration**: Integrated for deployment and hosting.

## Bugs / Missing Features

- **Database**: There is no actual DB connection. All data is stored in local variables on a Next.js backend server running locally. This app serves as a demonstration of Next.js capabilities.
- **Security**: The use of `dangerouslySetInnerHTML` compromises security but was used for speed during development.
- **UI Improvements**:
  - Drop-downs and checklists require some enhancements.
  - Loading state for the **user button** is missing.
- **SEO**: The UX is not fully optimized for SEO as login is required, and integrating localStorage with the backend is a non-trivial task.
- **Folder Structure & Organization**: Needs improvement for better scalability and maintainability.
- **Custom Loader**: A custom loader needs to be integrated for better user experience.
- **Query Optimizations**: Some queries require optimization for better performance.
- **Dark Mode Flickering**: Occurs on some screens and requires fixing.
- **Animations**: Entry/Exit animations need to be added for smoother transitions.
- **Notification System**: A notification system for new comments is missing.

---

> **Note:** This project is a demonstration of Next.js capabilities, focusing on educational features like lesson tracking, user feedback, and interactive exercises. Some features like database integration, SEO optimization, and security improvements are yet to be implemented.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
