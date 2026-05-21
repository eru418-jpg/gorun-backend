const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Sunucu çalışıyor!'));
app.listen(5000, () => console.log('Sunucu 5000 portunda.'));
