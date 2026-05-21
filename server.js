const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Veritabanı bağlantısı başarılı!"))
  .catch((err) => console.error("Bağlantı hatası: ", err.message));

app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor!');
});

app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
