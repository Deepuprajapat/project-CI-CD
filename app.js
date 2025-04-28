const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js App deployed via Jenkins CI/CD Pipeline!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

