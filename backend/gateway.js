// backend/gateway.js
const express = require('express');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'my_secret_key';

// ─── Middleware for JSON ──────────────────────────────
app.use(cors());
app.use(express.json());

// ─── JWT Authentication ──────────────────────────────
function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'missing auth header' });

  const parts = authHeader.split(' ');
  if (parts.length !== 2) return res.status(401).json({ error: 'invalid auth header' });

  const token = parts[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (e) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

// ─── Per-User Rate Limiting ───────────────────────────
const userRateLimiters = new Map();
function getUserLimiter(userId) {
  if (userRateLimiters.has(userId)) return userRateLimiters.get(userId);

  const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 60,             // per minute per user
    keyGenerator: (req) => (req.user && req.user.sub) || req.ip,
    legacyHeaders: false,
    standardHeaders: true,
    handler: (req, res) =>
      res.status(429).json({ error: 'rate limit exceeded' }),
  });

  userRateLimiters.set(userId, limiter);
  return limiter;
}

// ─── Health Check Service Map ─────────────────────────
const services = {
  auth: { url: 'http://localhost:4001/health' },
  user: { url: 'http://localhost:4002/health' },
  analytics: { url: 'http://localhost:4003/health' },
};

// ─── Health Check Endpoint ────────────────────────────
app.get('/health', async (req, res) => {
  try {
    const results = {};
    for (const [name, svc] of Object.entries(services)) {
      try {
        const r = await axios.get(svc.url);
        results[name] = r.data || 'ok';
      } catch {
        results[name] = 'unreachable';
      }
    }
    res.json({ gateway: 'ok', services: results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── Example Protected Route ──────────────────────────
app.get('/secure-data', authenticate, (req, res, next) => {
  const userId = req.user.sub || req.ip;
  const limiter = getUserLimiter(userId);
  limiter(req, res, () => {
    res.json({ message: 'Secure data accessed', user: req.user });
  });
});

// ─── Start Gateway ────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Gateway running on http://localhost:${PORT}`);
});
