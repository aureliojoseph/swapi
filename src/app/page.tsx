'use client'

import { useEffect, useState } from 'react'
import { PeopleProps } from '@/types/characters'
import styles from './page.module.scss'
import Fallback from '@/fallback/Fallback'
import FilterNav from '@/components/filterNav/FilterNav'
import Characters from '@/components/characters/Characters'
import ActionButton from '@/components/actionButton/ActionButton'

export default function Home() {
	const [characters, setCharacters] = useState<PeopleProps | null>(null)
	const [error, setError] = useState(false)
	const [selectedPlanet, setSelectedPlanet] = useState<string>('')
	const [displayRows, setDisplayRows] = useState(2)

	const loadCharacters = async () => {
		setCharacters(null)
		setError(false)

		const res = await fetch('https://swapi.dev/api/people')
		const data = await res.json()

		if (res.status === 404) {
			setError(true)
			return
		}

		const results = (await Promise.all(
			data.results.map(async (result: any) => {
				const { name, homeworld, height, mass, gender } = result
				const homeworldResponse = await fetch(homeworld)
				const homeworldData = await homeworldResponse.json()
				const character = {
					name,
					homeworld: homeworldData.name,
					height,
					mass,
					gender
				}
				return character
			})
		)) as PeopleProps['results']

		const charactersData: PeopleProps = { results }

		setCharacters(charactersData)
	}

	useEffect(() => {
		loadCharacters()
	}, [])

	const filteredCharacters = characters
		? characters.results.filter((character) => {
				if (!selectedPlanet) {
					return true
				}
				return (
					character.homeworld.toLowerCase() === selectedPlanet.toLowerCase()
				)
		  })
		: []

	const homeworlds = characters
		? Array.from(new Set(characters.results.map((char) => char.homeworld)))
		: []

	const clearFilters = () => {
		setSelectedPlanet('')
	}

	const loadMore = () => {
		setDisplayRows(displayRows + 1)
	}

	return (
		<main className={styles['main']}>
			<div className={styles['main__header']}>
				<h1>Star Wars Characters</h1>

				<p>
					Embark on an unforgettable journey into a galaxy far, far away! May
					the Force be with you!
				</p>
			</div>

			<FilterNav
				selectedPlanet={selectedPlanet}
				setSelectedPlanet={setSelectedPlanet}
				clearFilters={clearFilters}
				homeworlds={homeworlds}
			/>

			<h2 className={styles['char__heading']}>All Characters</h2>

			{!characters || !characters.results ? (
				<Fallback />
			) : (
				<>
					<Characters
						error={error}
						filteredCharacters={filteredCharacters}
						displayRows={displayRows}
					/>

					<ActionButton
						characters={characters}
						displayRows={displayRows}
						loadMore={loadMore}
					/>
				</>
			)}
		</main>
	)
}
