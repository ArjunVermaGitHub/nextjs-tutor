import { notFound } from 'next/navigation';
import LessonStatusSelector from '@/components/LessonStatusSelector';
import BackButton from '@/components/BackButton';

// This is a server-side component using async function to fetch lesson data.
export default async function LessonPage({ params }) {
  const { id } = params;

  // Fetch lesson data from the API
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/lesson/${id}`);

  if (!res.ok) {
    // Return a 404 page if the lesson is not found
    return notFound();
  }

  const lesson = await res.json();

  console.log({lesson})
  return (
    <div className="lesson-container">
      <BackButton />
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <LessonStatusSelector lessonId={lesson.id} />
      </div>
      <section className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />
    </div>
  );
}
