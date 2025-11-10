import { db } from "@/Firebase/admin";

export async function getInterviewByUserId(userId?: string): Promise<Interview[] | null> {
  if (!userId) return null;

  const snapshot = await db.collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const snapshot = await db.collection("interviews")
    .where("finalized", "==", true)
    .where("userId", "!=", userId) // or "==" userId, but not both
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const doc = await db.collection("interviews").doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } as Interview : null;
}
