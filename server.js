const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// Veritabanı bağlantısı (Hata olsa bile sunucu çökmesin diye .catch ekliyoruz)
const dbURI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";
mongoose.connect(dbURI)
  .then(() => console.log("Veritabanı bağlandı!"))
  .catch((err) => console.log("Veritabanı bağlantısı başarısız, yine de sunucu çalışıyor: ", err));

app.get('/', (req, res) => {
  res.send('Backend sorunsuz çalışıyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
