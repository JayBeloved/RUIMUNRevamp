
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
  db.run(`CREATE TABLE IF NOT EXISTS officials_registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    gender TEXT,
    dob TEXT,
    nationality TEXT,
    email TEXT UNIQUE,
    whatsapp TEXT,
    institution TEXT,
    graduation TEXT,
    level TEXT,
    field TEXT,
    country_city TEXT,
    committee_preference TEXT,
    role_committee TEXT,
    reason_committee TEXT,
    mun_experiences TEXT,
    achievements_skills TEXT,
    handling_delegates TEXT,
    misconduct_details TEXT,
    dietary_needs TEXT,
    dietary_specify TEXT,
    tshirt_size TEXT,
    invitation_letter TEXT,
    passport_number TEXT,
    high_commission TEXT,
    guardian_name TEXT,
    guardian_contact TEXT,
    relationship TEXT,
    hostel_accommodation TEXT
  )`);

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

app.post('/register_official', (req, res) => {
  const {
    name,
    gender,
    dob,
    nationality,
    email,
    whatsapp,
    institution,
    graduation,
    level,
    field,
    country_city,
    committee_preference,
    role_committee,
    reason_committee,
    mun_experiences,
    achievements_skills,
    handling_delegates,
    misconduct_details,
    dietary_needs,
    dietary_specify,
    tshirt_size,
    invitation_letter,
    passport_number,
    high_commission,
    guardian_name,
    guardian_contact,
    relationship,
    hostel_accommodation
  } = req.body;

  const sql = `INSERT INTO officials_registrations (
    name, gender, dob, nationality, email, whatsapp, institution, graduation, level, field, country_city,
    committee_preference, role_committee, reason_committee, mun_experiences, achievements_skills,
    handling_delegates, misconduct_details, dietary_needs, dietary_specify, tshirt_size, invitation_letter,
    passport_number, high_commission, guardian_name, guardian_contact, relationship, hostel_accommodation
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    name, gender, dob, nationality, email, whatsapp, institution, graduation, level, field, country_city,
    committee_preference, role_committee, reason_committee, mun_experiences, achievements_skills,
    handling_delegates, misconduct_details, dietary_needs, dietary_specify, tshirt_size, invitation_letter,
    passport_number, high_commission, guardian_name, guardian_contact, relationship, hostel_accommodation
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

app.get('/officials', (req, res) => {
  const sql = 'SELECT * FROM officials_registrations';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
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
