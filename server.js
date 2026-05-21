const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Sunucu aktif ve sorunsuz çalışıyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
