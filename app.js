const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Static folder setup (for serving HTML)
app.use(express.static(path.join(__dirname, 'views')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Next page route (for example, to show a different page)
app.get('/nextpage', (req, res) => {
    res.send('This is the next page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

