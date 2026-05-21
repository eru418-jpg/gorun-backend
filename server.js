const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 1. Render için portu dinamik olarak alıyoruz
const PORT = process.env.PORT || 5000;

// 2. Atlas'taki bağlantı dizesi (Şifreni buraya yaz)
const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

// 3. Bağlantı ayarları
mongoose.connect(MONGO_URI)
  .then(() => console.log("BAĞLANTI BAŞARILI: Veritabanı ile el sıkışıldı!"))
  .catch((err) => console.error("BAĞLANTI HATASI: ", err.message));

app.get('/', (req, res) => {
    res.send('Sunucu çalışıyor ve veritabanına bağlı!');
});

app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda yayında.);
});