const express = require('express');
const connectDB = require('./db');
const User = require('./models/user'); // Modeli dahil ettik
const app = express();

app.use(express.json()); // JSON formatındaki verileri okumak için şart

// Veritabanına yeni kullanıcı ekleme yolu
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Sunucu ve veritabanı aktif!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Sunucu ayakta.');
  connectDB();
});
