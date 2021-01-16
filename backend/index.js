const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>quazar city oh yeah<h1>")
})

app.listen(3333, () => {
    console.log('Server up! http://localhost:3333');
})