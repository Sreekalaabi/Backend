const express = require('express');
const app = express();
const port = 3000;

const logRequests = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
};


app.use(logRequests);


app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

app.get('/products', (req, res) => {
    res.send('Here are some products.');
});

app.post('/checkout', (req, res) => {
    res.send('Checking out.');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
