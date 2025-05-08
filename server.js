const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Generate array of 80 random integers from 1 to 10
function generateArray() {
  const arr = [];
  for (let i = 0; i < 80; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
  }
  return arr;
}

const originalArray = generateArray();

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/resources', express.static(path.join(__dirname, 'resources')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.get('/sorted', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'sorted.html'));
});

app.get('/api/original-array', (req, res) => {
  res.json({ array: originalArray });
});

app.get('/api/sorted-array', (req, res) => {
  const sortedArray = [...originalArray].sort((a, b) => a - b);
  res.json({ array: sortedArray });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
