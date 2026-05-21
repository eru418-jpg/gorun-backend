const express = require('express');
const app = express();

// Basit bir test yolu
app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda yayında.);
});
