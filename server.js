const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://eru418:35Az7847@cluster0.igadjrp.mongodb.net/gorun_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Veritabanı ve Model başarıyla bağlandı!"))
  .catch((err) => console.error("BAĞLANTI HATASI: ", err.message));

// Kayıt olma rotası
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send("Kullanıcı başarıyla kaydedildi!");
  } catch (err) {
    res.status(400).send("Kayıt hatası: " + err.message);
  }
});

app.get('/', (req, res) => res.send('Yürüme Arkadaşı Backend aktif!'));

app.listen(PORT, () => console.log(Sunucu ${PORT} portunda çalışıyor.));
