const express = require('express');
const connectDB = require('./db'); // db.js dosyasını çağırır
const User = require('./models/user'); // Modeli çağırır
const app = express();

app.use(express.json()); // JSON verilerini okumak için

// Veritabanı bağlantısını bir kez başlat
connectDB(); 

// API yolları
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
  console.log(Sunucu ${PORT} portunda ayakta.);
});
