const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
const routers = require('./routers/router');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/', routers);

// Page I Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './views', '404.html'));
    console.log('Page Not Found');
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado http://localhost:${PORT}`);
})