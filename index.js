const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`The application is running at port ${PORT}`));
app.use(express.static('./src/client'));
app.use(express.json({limit: '1mb'}));
// Importing routes
const presets = require('./routes/presets');
// Todo controle dos presets, sejam eles GET, POST e DELETE
// estão contidos no arquivos /routes/presets.js
// Neste index.js somente importamos o módulo e atribuimos a URL da API
app.use('/api', presets);