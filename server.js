const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

// Render'ın atadığı portu kullan, yoksa 5000'i kullan
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
