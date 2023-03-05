const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
    console.log('in req body --> ', req.body);
    if( req.body ) {
        console.log('user name --> ', req.body.username);
        res.redirect(`http://${req.body.username}.vidhyaan.com`);
    }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});