const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Basit bir test yolu
app.get('/', (req, res) => {
    res.send('Sunucu aktif!');
});

// Render'ın vereceği portu zorunlu olarak kullan
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
