// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

const routers = require('./routers/portal_home');
const adminRouter = require('./routers/admin');
const adminInterno = require('./routers/portal_interno');

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routers - Websites
app.use('/', routers);

// Routers - Admin
app.use('/admin', adminRouter);

app.use('/interno', adminInterno);

// Page I Not Found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './views', '404.html'));
    console.log('Page Not Found');
})

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado http://localhost:${PORT}`);
})