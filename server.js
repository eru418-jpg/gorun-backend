const express = require('express');
const connectDB = require('./db');
const app = express();

// Veritabanı bağlantısını başlat
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sunucu ve veritabanı aktif!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Sunucu ayakta.');
});
