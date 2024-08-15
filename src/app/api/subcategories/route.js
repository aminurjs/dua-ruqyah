// app/api/subcategories/route.js
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(request) {
  const { db } = await connectToDatabase();
  const cat_id = parseInt(new URL(request.url).searchParams.get("cat_id"));
  const subcategoriesCollection = db.collection("subcategories");
  const result = await subcategoriesCollection.find({ cat_id }).toArray();
  return new Response(JSON.stringify(result), { status: 200 });
}
