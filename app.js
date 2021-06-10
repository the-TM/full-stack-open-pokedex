const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
const version = process.env.SOURCE_VERSION || 'local'
app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send(version) // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
