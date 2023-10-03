import fetch from 'node-fetch'

export default async function handler(req: any, res: any) {
	try {
		const peopleRes = await fetch('https://swapi.dev/api/people/')
		const peopleData: any = await peopleRes.json()

		// Fetch homeworld for each person and add it to the response
		const results = await Promise.all(
			peopleData.results.map(async (person: any) => {
				const homeworldRes = await fetch(person.homeworld)
				const homeworldData: any = await homeworldRes.json()
				person.homeworld = homeworldData.name
				return person
			})
		)
		// Update the results in the response
		peopleData.results = results

		res.setHeader('Access-Control-Allow-Origin', 'https://swapi.dev')
		res.setHeader('Access-Control-Allow-Methods', 'GET')
		res.setHeader(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept'
		)
		res.setHeader('Access-Control-Allow-Credentials', 'true')

		res.status(200).json(peopleData)
	} catch (error) {
		console.error('Error fetching data:', error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
}
