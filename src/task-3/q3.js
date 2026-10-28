const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/student/:rollNo', (req, res) => {
    const roll = req.params.rollNo;
    res.json({
        rollNumber: roll,
        department: 'CSE',
        year:       '3rd Year',
        status:     'Active'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
