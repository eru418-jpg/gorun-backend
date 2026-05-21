const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sunucunun çalışıp çalışmadığını test etmek için
app.get('/', (req, res) => {
    res.send('Sunucu aktif ve yayında!');
});

// Port hatasını çözmek için en kritik kısım:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
