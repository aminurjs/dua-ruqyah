// app/api/duas/route.js
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(request) {
  const { db } = await connectToDatabase();
  const subcat_id = parseInt(new URL(request.url).searchParams.get("subcat_id"));
  const duasCollection = db.collection("dua");
  const result = await duasCollection.find({ subcat_id }).toArray();
  return new Response(JSON.stringify(result), { status: 200 });
}
