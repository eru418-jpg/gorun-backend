const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;
// MONGO_URI'yi doğrudan kod içine yazmak yerine environment variable'dan okuyoruz.
// Eğer Render'da tanımlamadıysan buraya tırnak içinde Atlas linkini yapıştırabilirsin.
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("BAĞLANTI BAŞARILI: Veritabanı ile el sıkışıldı!"))
  .catch((err) => console.error("BAĞLANTI HATASI: ", err.message));

app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor ve veritabanına bağlı!');
});

app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
