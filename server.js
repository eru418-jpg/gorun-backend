mongoose.connect(dbURI)
  .then(() => console.log("Veritabanı bağlantısı başarılı!"))
  .catch((err) => console.log("Veritabanı hatası (sunucu çalışmaya devam ediyor):", err));

app.get('/', (req, res) => {
  res.send('Sunucu aktif ve yayında!');
});

// Render'ın vereceği portu kullan, yoksa 5000'i kullan
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(Sunucu ${PORT} portunda başarıyla çalışıyor.);
});
