const express = require('express');
const cors = require('cors'); // <-- 1. IMPORT CORS
const app = express();

app.use(cors()); // <-- 2. USE CORS
app.use(express.json());

app.get('/summary', (req, res) => {
  res.json({ dailyTasks: 12500, savings: 480000, users: 150000 });
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'analytics' }));

// 3. USE THE STANDARD PORT VARIABLE
const port = process.env.PORT || 4003; 
app.listen(port, () => console.log('Analytics service listening on', port));