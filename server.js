const express = require('express');
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// 2. set up port usage for deployment environment
const PORT = process.env.PORT || 3001;

// 1. instatiate server
const app = express();

// 4. apply middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// make public folder readily available
app.use(express.static('public'));
// middleware for router - modularized api calls
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// 3. listen for requests to server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});