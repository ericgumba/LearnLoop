import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json();
  const code = typeof body.code === "string" ? body.code : "";
  const assignment = typeof body.assignment === "string" ? body.assignment : "";
  const language = typeof body.language === "string" ? body.language : "unknown";

  if (!code.trim()) {
    return NextResponse.json({ feedback: "Please write some code before requesting feedback." }, { status: 400 });
  }

  if (!assignment.trim()) {
    return NextResponse.json(
      { feedback: "Assignment context is missing. Please select a topic and try again." },
      { status: 400 },
    );
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { feedback: "Missing OPENAI_API_KEY on server. Add it to your .env.local and restart the dev server." },
      { status: 500 },
    );
  }

  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const model = process.env.OPENAI_MODEL ?? "gpt-5.2";

    const response = await client.responses.create({
      model,
      instructions:
        "You are a programming tutor. Give concise, actionable feedback on whether the student's code satisfies the assignment.",
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: `Language: ${language}` },
            { type: "input_text", text: `Assignment: ${assignment}` },
            { type: "input_text", text: "Student code:" },
            { type: "input_text", text: code },
            {
              type: "input_text",
              text:
                "Return feedback with: 1) verdict, 2) what is correct, 3) what to improve, 4) one concrete next step.",
            },
          ],
        },
      ],
    });

    return NextResponse.json({ feedback: response.output_text || "No feedback generated." });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json(
      { feedback: "Failed to generate feedback. Check server logs and OPENAI_API_KEY configuration." },
      { status: 500 },
    );
  }
}
