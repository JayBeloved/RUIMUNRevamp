
const express = require('express');
const { firestore } = require('./firebase');
const { collection, addDoc, getDocs } = require('firebase/firestore');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/register_delegate', async (req, res) => {
  try {
    const docRef = await addDoc(collection(firestore, 'delegates_registrations'), req.body);
    res.json({ message: 'success', id: docRef.id });
  } catch (e) {
    console.error("Error adding document: ", e);
    res.status(400).json({ error: e.message });
  }
});

app.get('/api/delegates', async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "delegates_registrations"));
    const delegates = [];
    querySnapshot.forEach((doc) => {
      delegates.push({ id: doc.id, ...doc.data() });
    });
    res.json({ message: 'success', data: delegates });
  } catch (e) {
    console.error("Error getting documents: ", e);
    res.status(400).json({ error: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
