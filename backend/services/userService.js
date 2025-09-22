const express = require('express');
const cors = require('cors'); // <-- 1. IMPORT CORS
const app = express();

app.use(cors()); // <-- 2. USE CORS
app.use(express.json());

app.get('/profile/:username', (req, res) => {
  const { username } = req.params;
  // mock profile
  res.json({ username, name: 'Demo User', plan: 'Pro' });
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'user' }));

// 3. USE THE STANDARD PORT VARIABLE
const port = process.env.PORT || 4002;
app.listen(port, () => console.log('User service listening on', port));