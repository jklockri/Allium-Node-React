const express = require('express');
const app = express();
const port = 5000;

app.get('/api/cards', (req, res) => {
  res.send([{ id: 1, something: 'something' }]);
});
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
