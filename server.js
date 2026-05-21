const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // Dışarıdan gelen verileri okumak için gerekli

const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

// Veritabanına bağlan
mongoose.connect(MONGO_URI)
  .then(() => console.log("Veritabanı bağlantısı başarılı!"))
  .catch((err) => console.error("Bağlantı hatası: ", err));

app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor ve veritabanı bağlantısı aktif!');
});

// Basit bir kayıt testi rotası
app.post('/api/register', (req, res) => {
  console.log("Kayıt denemesi yapıldı:", req.body);
  res.send('Kayıt rotası çalışıyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Sunucu ${PORT} portunda yayında.));
