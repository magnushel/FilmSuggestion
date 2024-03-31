const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to our API' });
  });  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
