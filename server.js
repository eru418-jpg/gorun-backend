const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sunucu aktif ve sorunsuz çalışıyor!');
});

app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
