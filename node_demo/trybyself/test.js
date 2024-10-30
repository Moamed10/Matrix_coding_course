const express = require('express');
const app = express();

// // Set EJS as the view engine
// app.set('view engine', 'ejs');

// Route handler
app.get('/sayhi/:name', (req, res) => {
    res.render('hey.ejs', { name: req.params.name }); // Pass 'name' to the template
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
