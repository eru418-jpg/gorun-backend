const express = require('express');
const app = express();

// Sunucunun Render tarafından atanan portu veya 5000'i dinlemesini sağla
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Sunucu çalışıyor ve yayında!');
});

app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
