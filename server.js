const express = require('express');
const connectDB = require('./db');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sunucu aktif, veritabanı arka planda bağlanıyor!');
});

// Render zaman aşımına düşmesin diye ÖNCE portu hemen açıyoruz
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(Sunucu ayakta. Port: ${PORT});
  
  // Sunucu ayağa kalktıktan hemen sonra veritabanı bağlantısını başlatıyoruz
  connectDB();
});
