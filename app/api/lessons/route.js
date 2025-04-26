import lessons from "@/data/lessons";

export async function GET() {
    // Hardcoded lessons data (replace this with database fetch if needed)
            
  
    // Return lessons data as a JSON response
    return new Response(JSON.stringify(lessons), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }