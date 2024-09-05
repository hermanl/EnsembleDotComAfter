const express = require('express');
const setupProxy = require('./proxy/setupProxy');

const app = express();

// Log requests
app.use((req, res, next) => {
  console.log(`Received request for ${req.path}`);
  next();
});

// Setup proxy middleware
setupProxy(app);

// Serve static files
app.use(express.static('public'));

// Example endpoint to show server is running
app.get('/test', (req, res) => {
  res.send('Server is running!');
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
