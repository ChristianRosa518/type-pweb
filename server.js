const port = process.env.PORT || 5000;
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Node server listening on port ${port}!`));
