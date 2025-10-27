
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Vercel-Admin-ruimunDB:V6YCMzfSGJLjItNd@ruimundb.ifa4tuw.mongodb.net/?retryWrites=true&w=majority";

if (!uri) {
  throw new Error('MongoDB connection string is missing.');
}

let client;
let clientPromise;

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

export default clientPromise;
