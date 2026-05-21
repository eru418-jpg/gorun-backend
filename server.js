const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// Veritabanı bağlantısı
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Veritabanı bağlantısı başarılı!"))
  .catch((err) => console.log("Hata:", err));

app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
