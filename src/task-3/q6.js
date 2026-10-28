const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Pen', price: 10 },
    { id: 2, name: 'Notebook', price: 50 },
    { id: 3, name: 'Eraser', price: 5 }
];

app.get('/', (req, res) => {
    res.send('Stationery Store API');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});