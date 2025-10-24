const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from root and /dist directories
app.use(express.static(path.join(__dirname, '/')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// --- STRATEGIC ENHANCEMENT: Handle all primary SPA routes ---
const spaRoutes = ['/', '/services', '/about', '/blog', '/contact'];
app.get(spaRoutes, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// This remains to handle individual blog post URLs
app.get('/blog/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// --- END ENHANCEMENT ---

app.listen(PORT, () => {
    console.log(`Chancellor AI: Server operational on http://localhost:${PORT}`);
});