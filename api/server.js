
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./ruimun_registrations.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the RUIMUN registrations database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS delegates_registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    delegate_type TEXT,
    gender TEXT,
    mun_experience TEXT,
    affiliation TEXT,
    position TEXT,
    department TEXT,
    matric_num TEXT,
    city TEXT,
    state TEXT,
    country TEXT,
    zipcode TEXT,
    advert TEXT,
    tshirt_size TEXT,
    medical TEXT,
    diet TEXT,
    referral TEXT,
    committee1 TEXT,
    country1 TEXT,
    committee2 TEXT,
    country2 TEXT,
    committee3 TEXT,
    country3 TEXT
)`);
});

app.post('/register_delegate', (req, res) => {
    const {
        name, email, phone, delegate_type, gender, mun_experience,
        affiliation, position, department, matric_num, city, state, country,
        zipcode, advert, tshirt_size, medical, diet, referral,
        committee1, country1, committee2, country2, committee3, country3
    } = req.body;

    const sql = `INSERT INTO delegates_registrations (
        name, email, phone, delegate_type, gender, mun_experience,
        affiliation, position, department, matric_num, city, state, country,
        zipcode, advert, tshirt_size, medical, diet, referral,
        committee1, country1, committee2, country2, committee3, country3
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        name, email, phone, delegate_type, gender, mun_experience,
        affiliation, position, department, matric_num, city, state, country,
        zipcode, advert, tshirt_size, medical, diet, referral,
        committee1, country1, committee2, country2, committee3, country3
    ];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            id: this.lastID,
        });
    });
});

app.get('/delegates', (req, res) => {
    const sql = 'SELECT * FROM delegates_registrations';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
