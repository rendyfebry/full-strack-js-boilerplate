const compression = require('compression')
const express = require('express')
const path = require('path')

const app = express()

app.set('port', (process.env.PORT || 3001))
app.use(compression())

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'))
}

app.get('/api', (req, res) => {
	res.send("aa")
})

if (process.env.NODE_ENV === 'production') {
	app.get(/(.*)/, (req, res) => {
		const filePath = path.join(__dirname, '/build/index.html')
		res.sendFile(filePath)
	})
}

app.listen(app.get('port'), () => {
	// eslint-disable-line no-console
	console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})
