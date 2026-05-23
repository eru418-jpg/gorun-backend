const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Veritabanı Kullanıcı Şeması
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// Ana Sayfa Rotası
app.get('/', (req, res) => {
  res.send('Gorun uygulamasi backend aktif!');
});

// Kayıt Olma Rotası
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Bu e-posta zaten kayitli!" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Kullanici basariyla kaydedildi!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log("Sunucu sorunsuz sekilde ayakta.");

  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB baglantisi basarili!"))
    .catch((err) => console.error("Veritabanı baglantisi basarisiz:", err.message));
});
