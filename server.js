const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Modelini buraya bağlıyoruz
const app = express();

app.use(express.json()); // Veri alışverişi için

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("BAĞLANTI BAŞARILI: Veritabanı ve Model aktif!"))
  .catch((err) => console.error("BAĞLANTI HATASI: ", err.message));

app.get('/', (req, res) => {
  res.send('Yürüme Arkadaşı Backend aktif ve modellemeye hazır!');
});

app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
