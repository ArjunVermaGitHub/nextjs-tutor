import { notFound } from 'next/navigation';
import LessonStatusSelector from '@/components/LessonStatusSelector';
import BackButton from '@/components/BackButton';
import Comments from '@/components/Comments';

export default async function LessonPage({ params }) {
  const { id } = params;

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/lesson/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const lesson = await res.json();

  return (
    <div className="lesson-container">
      <BackButton />
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <LessonStatusSelector lessonId={lesson.id} />
      </div>
      <section className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <Comments lessonId={lesson.id} />
    </div>
  );
}
