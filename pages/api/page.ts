export default async function handler(req: any, res: any) {
	const swapiRes = await fetch('https://swapi.dev/api/people')
	const data = await swapiRes.json()
	res.status(200).json(data)
}
