const express = require('express');
const connectDB = require('./db');
const app = express();

app.use(express.json());

// Veritabanı bağlantısını başlat
connectDB();

app.get('/', (req, res) => {
  res.send('Sunucu ve veritabanı aktif!');
});

// Render için kritik port ayarı
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(Sunucu ${PORT} portunda başarıyla dinleniyor.);
});
