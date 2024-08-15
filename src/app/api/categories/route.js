import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  const { db } = await connectToDatabase();
  const categoriesCollection = db.collection("categories");
  const result = await categoriesCollection.find().toArray();
  return new Response(JSON.stringify(result), { status: 200 });
}
