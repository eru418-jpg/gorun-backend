const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sunucu aktif, veritabanı arka planda bağlanıyor!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(Sunucu ${PORT} portunda ayakta.);

  // Veritabanı bağlantısını doğrudan burada tetikliyoruz
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB bağlantısı başarılı!"))
    .catch((err) => console.error("Veritabanı bağlantısı başarısız:", err.message));
});
