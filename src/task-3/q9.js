const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Pen',      price: 10 },
    { id: 2, name: 'Notebook', price: 50 }
];

app.get('/', (req, res) => {
    res.send('Welcome to the Store');
});

app.get('/products', (req, res) => {
    res.json(products);
});

// 404 handler - MUST be placed LAST
app.use((req, res) => {
    res.status(404).json({
        error:   'Route not found',
        request: req.url
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
