const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: 'Pen',      price: 10 },
    { id: 2, name: 'Notebook', price: 50 },
    { id: 3, name: 'Eraser',   price: 5  }
];

app.get('/products/:id', (req, res) => {
    const product = products.find(
        p => p.id === Number(req.params.id)
    );
    if (!product) {
        return res.status(404).json({
            error: 'Product not found'
        });
    }
    res.json(product);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
