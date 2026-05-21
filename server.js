const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // JSON verilerini okumak için bu şart

const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Veritabanı bağlı!"))
  .catch((err) => console.error("Bağlantı hatası: ", err));

// Kullanıcı kayıt rotası (Öncelik bu!)
app.post('/api/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    // Veritabanına kaydetme kodu buraya gelecek
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu!", data: { username, email } });
  } catch (error) {
    res.status(500).json({ error: "Kayıt sırasında hata oluştu." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Sunucu ${PORT} portunda.));
