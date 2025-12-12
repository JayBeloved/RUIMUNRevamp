
import express from 'express';
import cors from 'cors';
import connectToDatabase from './mongo.js';

const app = express();

app.use(cors());
app.use(express.json());

async function withDB(handler) {
  return async (req, res) => {
    try {
      const { db } = await connectToDatabase();
      return await handler(req, res, db);
    } catch (e) {
      console.error("Database connection failed:", e);
      res.status(500).json({ error: 'Internal Server Error', details: 'Could not connect to the database.' });
    }
  };
}

app.post('/api/register_delegate', withDB(async (req, res, db) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const existingDelegate = await db.collection('delegates_registrations').findOne({ email });

    if (existingDelegate) {
      return res.status(409).json({ message: 'You have already registered.', delegate: existingDelegate });
    }

    const result = await db.collection('delegates_registrations').insertOne(req.body);
    const newDelegate = await db.collection('delegates_registrations').findOne({ _id: result.insertedId });

    res.status(200).json({ message: 'Success', delegate: newDelegate });

  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(500).json({ error: 'Failed to register delegate.', details: e.message });
  }
}));

app.get('/api/delegates', withDB(async (req, res, db) => {
  try {
    const delegates = await db.collection("delegates_registrations").find({}).toArray();
    res.status(200).json({ message: 'success', data: delegates });
  } catch (e) {
    console.error("Error getting documents: ", e);
    res.status(500).json({ error: 'Failed to fetch delegates.', details: e.message });
  }
}));

app.get('/api/check_registration', withDB(async (req, res, db) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const delegate = await db.collection('delegates_registrations').findOne({ email });
    if (delegate) {
      res.status(200).json({ isRegistered: true, delegate });
    } else {
      res.status(200).json({ isRegistered: false });
    }
  } catch (e) {
    console.error("Error checking registration: ", e);
    res.status(500).json({ error: 'Failed to check registration.', details: e.message });
  }
}));

// Export the app for Vercel
export default app;
