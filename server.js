const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// 1. Veritabanı için Kullanıcı Şeması (Model) oluşturuyoruz
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// 2. Ana Sayfa Rotası
app.get('/', (req, res) => {
  res.send('Görün uygulaması backend aktif!');
});

// 3. KAYIT OLMA ROTASI (Flutter bu adrese istek atacak)
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // E-posta daha önce alınmış mı kontrol et
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Bu e-posta zaten kayıtlı!" });
    }

    // Yeni kullanıcıyı oluştur ve kaydet
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(Sunucu ${PORT} portunda ayakta.);
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB bağlantısı başarılı!"))
    .catch((err) => console.error("Veritabanı bağlantısı başarısız:", err.message));
});
