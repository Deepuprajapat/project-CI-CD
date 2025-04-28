const express = require('express');
const app = express();
const PORT = 8000;

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>My Stylish App</title>
                <link rel="stylesheet" type="text/css" href="styles.css">
            </head>
            <body>
                <h1>Welcome to My Node.js App</h1>
                <p>This is a sample application with styled content.</p>

                <footer>
                    <p>Follow us on:</p>
                    <a href="https://facebook.com" target="_blank">Facebook</a>
                    <a href="https://twitter.com" target="_blank">Twitter</a>
                    <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                </footer>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

