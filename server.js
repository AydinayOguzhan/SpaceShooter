const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: fallback route if needed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'space_shooter.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});