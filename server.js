const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Render'ın sağlık testi için bir uç nokta
app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

// Render'ın atadığı portu kullan, yoksa 10000'i kullan
const PORT = process.env.PORT || 10000;

// Sunucuyu 0.0.0.0 üzerinde başlatmak Render için şarttır
app.listen(PORT, '0.0.0.0', () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
