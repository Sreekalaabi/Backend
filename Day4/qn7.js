const express = require('express');
const app = express();
const port = 3000;


const logIP = (req, res, next) => {
    const clientIP = req.ip;
    console.log(`Client IP: ${clientIP}`);
    next();
};


app.use(logIP);


app.get('/', (req, res) => {
    res.send('Welcome to the book review application!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
