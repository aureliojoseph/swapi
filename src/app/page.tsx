'use client'

import { useEffect, useState } from 'react'
import { PeopleProps } from '@/utils/characters'
import styles from './page.module.scss'
import FilterNav from '@/components/ui/filterNav/FilterNav'
import Characters from '@/components/characters/Characters'
import ActionButton from '@/components/ui/actionButton/ActionButton'

export default function Home() {
	const [characters, setCharacters] = useState<PeopleProps | null>(null)
	const [selectedPlanet, setSelectedPlanet] = useState<string>('')
	const [displayRows, setDisplayRows] = useState(2)

	const showCharacters = async () => {
		setCharacters(null)

		const res = await fetch('/api/page')
		const data = await res.json()
		console.log(data)

		setCharacters(data)
	}

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

			{!characters || !characters.results ? (
				<ActionButton
					characters={characters}
					displayRows={displayRows}
					loadMore={loadMore}
					showCharacters={showCharacters}
				/>
			) : (
				<>
					<FilterNav
						selectedPlanet={selectedPlanet}
						setSelectedPlanet={setSelectedPlanet}
						clearFilters={clearFilters}
						homeworlds={homeworlds}
					/>

					<h2 className={styles['char__heading']}>All Characters</h2>

					<Characters
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
