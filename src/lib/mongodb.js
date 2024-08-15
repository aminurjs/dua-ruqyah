// lib/mongodb.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the MongoDB client across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client for each request
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  try {
    const clientInstance = await clientPromise;
    const db = clientInstance.db("duaRuqyah");
    return { db, client: clientInstance };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}
