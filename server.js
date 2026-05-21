const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Render veya yerel port ayarı
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Veritabanı bağlantısı
mongoose.connect(MONGO_URI)
  .then(() => console.log("BAĞLANTI BAŞARILI: Veritabanı ile el sıkışıldı!"))
  .catch((err) => console.error("BAĞLANTI HATASI: ", err.message));

// Basit bir test rotası
app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor ve veritabanına bağlı!');
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
