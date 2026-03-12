import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "nodejs";

const SYSTEM_PROMPT = `
You extract structured lead information from a website chat conversation between a visitor and Innovait's assistant.

Your output MUST be valid JSON with this exact shape:
{
  "name": "string",
  "email": "string",
  "summary": "string"
}

Rules:
- Read the conversation and infer the best guess for:
  - name: the visitor's name, if they mention it (e.g. "I'm Arjun", "This is Priya"). Otherwise, "".
  - email: the visitor's email address if they share one. Otherwise, "".
  - summary: a concise 1–3 sentence summary of what they want to build / their requirement. If unclear, "".
- If you are not reasonably confident about a field, set it to "" (empty string).
- Do NOT add any extra fields.
- Do NOT wrap the JSON in markdown or prose. Respond with JSON only.
`.trim();

export async function POST(req: NextRequest) {
  if (!client.apiKey) {
    return NextResponse.json(
      { error: "Lead extraction is not configured on the server." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { messages } = body as {
      messages: { role: "user" | "assistant"; content: string }[];
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided." },
        { status: 400 }
      );
    }

    const transcript = messages
      .map((m) => `${m.role === "assistant" ? "Innovait" : "Visitor"}: ${m.content}`)
      .join("\n");

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Here is the full conversation transcript:\n\n${transcript}`,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "{}";

    let parsed: { name?: string; email?: string; summary?: string };
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {};
    }

    return NextResponse.json({
      name: parsed.name || "",
      email: parsed.email || "",
      summary: parsed.summary || "",
    });
  } catch (error) {
    console.error("Error in /api/chat/lead:", error);
    return NextResponse.json(
      { error: "Unable to analyse conversation for lead details." },
      { status: 500 }
    );
  }
}

