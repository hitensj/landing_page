const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // <-- 1. IMPORT CORS
const app = express();

app.use(cors()); // <-- 2. USE CORS
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

// simple auth endpoint: accepts username/password and returns JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // In prod verify credentials with DB
  if (!username) return res.status(400).json({ error: 'username required' });
  // create token with minimal claims
  const token = jwt.sign({ sub: username, role: 'user' }, JWT_SECRET, {
    expiresIn: '1h',
  });
  res.json({ token });
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'auth' }));

// 3. USE THE STANDARD PORT VARIABLE
const port = process.env.PORT || 4001;
app.listen(port, () => console.log('Auth service listening on', port));