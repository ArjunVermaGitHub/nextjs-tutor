import { getAuth } from '@clerk/nextjs/server';

let userProgressMap = {}; // In-memory for now (replace with DB in prod)

export async function GET(req) {
    const { userId } = getAuth(req);
    if (!userId) return new Response('Unauthorized', { status: 401 });

  const data = userProgressMap[userId] || {};
  console.log(data, userProgressMap )

  return Response.json(data);
}

export async function POST(req) {
    const { userId } = getAuth(req);
  if (!userId) return new Response('Unauthorized', { status: 401 });

  const { lessonId, status } = await req.json();
  userProgressMap[userId] = {
    ...userProgressMap[userId],
    [lessonId]: status,
  };

  return Response.json({ success: true });
}
