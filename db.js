const express = require('express');
const connectDB = require('./db'); // db.js dosyasından bağlantıyı çekiyoruz
const app = express();

app.use(express.json());

// Veritabanı bağlantısını tetikliyoruz
connectDB();

app.get('/', (req, res) => {
  res.send('Sunucu ve veritabanı aktif!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log("Sunucu ayakta.");
});
