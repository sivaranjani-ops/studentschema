const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Pen',      price: 10 },
    { id: 2, name: 'Notebook', price: 50 }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({
        message: 'Product added!',
        product: newProduct
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
