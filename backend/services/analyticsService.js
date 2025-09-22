const express = require('express')
const app = express()
app.use(express.json())


app.get('/summary', (req, res) => {
res.json({ dailyTasks: 12500, savings: 480000, users: 150000 })
})


app.get('/health', (req, res) => res.json({ status: 'ok', service: 'analytics' }))


const port = process.env.ANALYTICS_PORT || 4003
app.listen(port, () => console.log('Analytics service listening on', port))