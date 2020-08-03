/** import express from node_modules */ 
const express = require('express');

/** initializing express */
const app = express();

/** port */
const port = 5000;
/** defining public folder for serving */
app.use(express.static('public'));

/** setting request parameters */
app.get('/', (req, res) => {
    res.send('Welcome to Node Server');
});

app.listen(port, () => console.log('node-server app listening on port '+port));