const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

let books = [
    { id: 1, title: 'Clean Code',     author: 'Martin' },
    { id: 2, title: 'You Don t Know JS', author: 'Simpson' }
];

app.get('/', (req,res) => res.send('Books API'));

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const book = books.find(
        b => b.id === Number(req.params.id));
    if (!book) return res.status(404).json(
        { error: 'Book not found' });
    res.json(book);
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).json({ message:'Added', book:req.body });
});

app.use((req, res) => {
    res.status(404).json({ error:'Route not found' });
});

app.listen(PORT,'0.0.0.0',()=>
    console.log(`Server on port ${PORT}`));
