const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Lab');
});

app.get('/info', (req, res) => {
    res.json({
        course: '24BCS274',
        lab: 'Full Stack Web Development',
        unit: 'Node.js and Express.js',
        batch: '2024-2028'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});