const express = require('express')
const app = express()
app.use(express.json())


app.get('/profile/:username', (req, res) => {
const { username } = req.params
// mock profile
res.json({ username, name: 'Demo User', plan: 'Pro' })
})


app.get('/health', (req, res) => res.json({ status: 'ok', service: 'user' }))


const port = process.env.USER_PORT || 4002
app.listen(port, () => console.log('User service listening on', port))