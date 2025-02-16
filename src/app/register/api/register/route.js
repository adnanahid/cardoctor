import database, { collections } from "@/lib/database";

export async function POST(req) {
  const data = await req.json();

  const result = await database(collections.users).insertOne(data);
  return Response.json(result);
}
