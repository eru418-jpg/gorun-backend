const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 1. Render'ın "Canlı mı?" testine cevap ver
app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

// 2. PORT'u Render'dan al, olmazsa 10000 yap
const PORT = process.env.PORT || 10000;

// 3. Sunucuyu kalıcı olarak başlat
app.listen(PORT, '0.0.0.0', () => {
    console.log(Sunucu ${PORT} portunda yayında.);
});
