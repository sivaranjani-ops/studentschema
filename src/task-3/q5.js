const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/students/:dept/:year', (req, res) => {
    const dept = req.params.dept;
    const year = req.params.year;
    res.json({
        department: dept,
        year:       year,
        message:    'Student list for ' + dept
                    + ' - Year ' + year
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
