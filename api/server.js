
import express from 'express';
import cors from 'cors';
import clientPromise from './mongo.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/register_delegate', async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("ruimunDB");

    const result = await db.collection('delegates_registrations').insertOne(req.body);
    res.status(200).json({ message: 'Success', id: result.insertedId });

  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(500).json({ error: 'Failed to register delegate.', details: e.message });
  }
});

app.get('/api/delegates', async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("ruimunDB");

    const delegates = await db.collection("delegates_registrations").find({}).toArray();
    res.status(200).json({ message: 'success', data: delegates });

  } catch (e) {
    console.error("Error getting documents: ", e);
    res.status(500).json({ error: 'Failed to fetch delegates.', details: e.message });
  }
});

// Export the app for Vercel
export default app;
