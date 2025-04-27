// /app/api/comments/[lessonId]/route.js

import commentsData from "@/data/comments";



export async function GET(request, { params }) {

  const { lessonId } = params;

  // In a real app, you'd query the database, not just fetch a mock file.
  const comments = commentsData[lessonId] || [];
  console.log(comments);
  return new Response(JSON.stringify(comments), { status: 200 });
}

export async function POST(request, { params }) {
    const { lessonId } = params;
    const { comment, username, profilePicture } = await request.json(); // Get comment, username, and profilePicture from the request body
  
    if (!commentsData[lessonId]) {
      commentsData[lessonId] = [];
    }
  
    const newComment = {
      id: Date.now(),
      text: comment,
      username: username || 'Anonymous',
      profilePicture: profilePicture || 'https://default-profile-image-url.com', // Default profile picture if none is provided
      createdAt: new Date().toISOString(), // Timestamp
    };
  
    commentsData[lessonId].push(newComment);
  
    return new Response(JSON.stringify(newComment), { status: 201 });
  }
  
  