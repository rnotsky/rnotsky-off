import { generateText } from "ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body?.messages;

    if (!Array.isArray(messages)) {
      return Response.json(
        {
          error: "Invalid messages.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await generateText({
      model: "openai/gpt-oss-20b:free",

      system: `
You are RNOTSKY AI, the official AI assistant of RNOTSKY.

Help users with:
- Artificial Intelligence
- Machine Learning
- Software development
- Programming
- Computer Vision
- Robotics
- Technology
- General questions

Be helpful, clear, concise and technically accurate.

Never claim that an RNOTSKY product exists or is available
unless the information is actually provided.

Maintain a professional, intelligent and friendly tone.
      `,

      messages,
    });

    return Response.json({
      message: result.text,
    });
  } catch (error) {
    console.error("RNOTSKY AI API error:", error);

    return Response.json(
      {
        error: "AI service temporarily unavailable.",
      },
      {
        status: 500,
      }
    );
  }
}