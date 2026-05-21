const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Veritabanı bağlantısı
const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Veritabanı bağlantısı başarılı!"))
  .catch((err) => console.error("Bağlantı hatası: ", err.message));

// Ana sayfa rotası
app.get('/', (req, res) => {
  res.send('Sunucu aktif ve çalışıyor!');
});

// Sunucuyu başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
