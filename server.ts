const express = require('express')
const next = require('next')
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server.use(
		cors({
			origin: 'https://swapi.dev',
			methods: ['GET', 'POST', 'PUT', 'DELETE'],
			credentials: true
		})
	)

	server.options('*', cors())

	server.all('*', (req: any, res: any) => {
		return handle(req, res)
	})

	server.listen(8080, (err: any) => {
		if (err) throw err
		console.log('> Ready on http://localhost:8080')
	})
})
