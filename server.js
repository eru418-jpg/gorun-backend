const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // 1. Mongoose'u çağır
const app = express();

app.use(cors());
app.use(express.json());

// 2. Bağlantı fonksiyonu (Sunucuyu çökertmeden bağlanır)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Veritabanı bağlantısı başarılı!");
  } catch (err) {
    console.log("Veritabanı bağlantı hatası:", err);
  }
};
connectDB(); // Bağlantıyı başlat

app.get('/', (req, res) => {
    res.send('Sunucu aktif, veritabanı ile çalışmaya hazır!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(Sunucu ${PORT} portunda yayında.);
});
