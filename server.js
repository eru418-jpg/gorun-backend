const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Render'ın vereceği portu dinle, vermezse 5000'i kullan
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
