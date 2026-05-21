const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 1. Basit bir "canlılık" kontrolü (Render bunu test eder)
app.get('/', (req, res) => {
    res.send('Sunucu aktif!');
});

// 2. Port ataması
const PORT = process.env.PORT || 5000;

// 3. Önce sunucuyu başlat, sonra veritabanına bağlan (Güvenli yöntem)
app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
})
