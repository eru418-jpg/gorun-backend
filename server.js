const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Basit bir test yolu
app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

// Render'ın dinamik portunu yakalamak için en güvenli yöntem
const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
