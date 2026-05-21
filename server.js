const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend sorunsuz çalışıyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda yayında.);
});
