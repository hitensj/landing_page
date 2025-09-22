const axios = require('axios')


async function check(url, timeout = 2000) {
try {
const r = await axios.get(url, { timeout })
if (r.status === 200 && r.data) return { ok: true, data: r.data }
} catch (e) {
return { ok: false, error: e.message }
}
}


module.exports = { check }