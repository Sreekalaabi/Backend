require('dotenv').config();
const express = require('express');
const mainMid = require('./mainMid');

const app = express();

app.use(mainMid);

app.get('/', (req, res) => {
    res.send('Welcome to our application!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
