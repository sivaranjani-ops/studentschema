const express = require('express'); 
const app = express(); 
const PORT = 3000; 
 
app.use(express.json()); 
 
app.get('/', (req, res) => { 
    res.send('Home Page'); 
}); 
 
app.get('/about', (req, res) => { 
    res.json({ 
        college: 'Kumaraguru College of Technology', 
        dept: 'CSE', 
        section: 'KSI' 
    }); 
}); 
 
app.get('/contact', (req, res) => { 
    res.json({ 
        email: 'lab@kct.ac.in', 
        phone: '0422-XXXXXXX' 
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});