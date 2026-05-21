const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Sunucu aktif ve yayında!');
});

// Portu doğrudan kullan, Render atamasını otomatik yapar
const PORT = process.env.PORT || 10000;

app.listen(PORT, function () {
  console.log('Sunucu ' + PORT + ' portunda çalışıyor.');
});
