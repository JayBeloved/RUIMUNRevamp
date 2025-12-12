
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://Vercel-Admin-ruimunDB:RXKRbxmGP4ZD4T7G@ruimundb.ifa4tuw.mongodb.net/?retryWrites=true&w=majority";

if (!uri) {
  throw new Error('MongoDB connection string is missing. Please add it to your environment variables.');
}

let client;
let clientPromise;

async function connectToDatabase() {
  if (client && client.topology && client.topology.isConnected()) {
    return { client, db: client.db('ruimunDB') };
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve the client across module reloads
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, {});
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, {});
    clientPromise = client.connect();
  }

  try {
    const resolvedClient = await clientPromise;
    const db = resolvedClient.db('ruimunDB');
    console.log("Successfully connected to MongoDB!");
    return { client: resolvedClient, db };
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
    throw e;
  }
}

export default connectToDatabase;
