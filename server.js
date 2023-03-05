const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    if( req.body ) {
        res.redirect(`https://${req.body.username}.vidhyaan.com`);
    }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});