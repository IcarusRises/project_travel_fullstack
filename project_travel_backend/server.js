const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("testing root")
})

app.listen(PORT, () => {
    console.log(`Port ${PORT} is running Captain.`)
})