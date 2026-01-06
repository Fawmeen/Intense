import { db } from "@/Firebase/admin";

export async function POST(request: Request) {
  const { userId, userName, messages } = await request.json();

  if (!userId || !userName || !messages) {
    return Response.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const conversation = {
      userId,
      userName,
      messages,
      createdAt: new Date().toISOString(),
    };

    await db.collection("conversations").add(conversation);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error saving conversation:", error);
    return Response.json(
      { success: false, error: "Failed to save conversation" },
      { status: 500 }
    );
  }
}
