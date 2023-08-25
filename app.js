const express = require('express');
const app = express();

// Middleware to log query parameters
function logQueryParams(req, res, next) {
  const queryParams = req.query;
  console.log('Query Parameters:', queryParams);
  next();
}

app.use(logQueryParams); // Apply the middleware to log query parameters

// Define your routes below this line
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
