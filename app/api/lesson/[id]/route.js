import lessons from '@/data/lessons'; // Assuming you have a lessons.js file exporting an array

export async function GET(request, { params }) {
  const { id } = params;

  const lesson = lessons.find((lesson) => lesson.id === id);

  if (!lesson) {
    return new Response(JSON.stringify({ message: 'Lesson not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(lesson), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
