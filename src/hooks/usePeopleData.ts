'use client'

import { useState, useEffect } from 'react'
import { Person } from '@/utils/characters'

export default function usePeopleData() {
	const [people, setPeople] = useState<Person[] | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://swapi.dev/api/people/')
				const peopleData = await response.json()

				const peopleResults = await Promise.all(
					peopleData.results.map(async (person: any) => {
						const homeworldRes = await fetch(person.homeworld)
						const homeworldData: any = await homeworldRes.json()
						person.homeworld = homeworldData.name
						return person
					})
				)
				setPeople(peopleResults)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()
	}, [])

	return people
}
