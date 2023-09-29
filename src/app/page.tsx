'use client'

import { useEffect, useState } from 'react'
import { PeopleProps } from '@/types/characters'
import Error from '@/error/Error'
import styles from './page.module.scss'
import FilterNav from '@/components/filterNav/FilterNav'
import Image from 'next/image'
import React from 'react'

export default function Home() {
	const [characters, setCharacters] = useState<PeopleProps | null>(null)
	const [displayRows, setDisplayRows] = useState(2)
	const [error, setError] = useState(false)

	const loadCharacters = async () => {
		setCharacters(null)
		setError(false)

		const res = await fetch(`https://swapi.dev/api/people/`)
		const data = await res.json()

		if (res.status === 404 || data.count === 0) {
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

	const loadMore = () => {
		setDisplayRows(displayRows + 1)
	}

	return (
		<main className={styles['main']}>
			<div className={styles['main__header']}>
				<h1>Star Wars Characters</h1>

				<p>
					Embark on an unforgettable journey into a galaxy far, far away!
					Unleash the power of the Force and unravel the secrets of your
					favorite characters. May the Force be with you!
				</p>
			</div>

			<FilterNav />

			<h2 className={styles['char__heading']}>All Characters</h2>

			<section className={styles['char__section']}>
				{error && <Error />}

				{characters &&
					characters.results.slice(0, displayRows * 4).map((char, index) => {
						const randomWidth = Math.floor(Math.random() * 500) + 600
						const randomHeight = Math.floor(Math.random() * 500) + 320
						const randomImageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`

						return (
							<div
								className={styles['char__section--content']}
								key={index}
							>
								<Image
									className={styles['char__section--content-img']}
									src={randomImageUrl}
									alt={'Random image'}
									width={432}
									height={230}
								/>

								<div className={styles['char__section--content-info']}>
									<p className={styles['name']}>{char.name}</p>
									<p className={styles['homeworld']}>{char.homeworld}</p>
								</div>

								<div className={styles['char__section--content-stats']}>
									<p>Height • {char.height}</p>
									<p>Mass • {char.mass}</p>
									<p>Gender • {char.gender}</p>
								</div>
							</div>
						)
					})}
			</section>

			{characters?.results && displayRows * 4 <= characters.results.length ? (
				<button
					className={styles['action-button']}
					onClick={loadMore}
				>
					Load More
				</button>
			) : (
				<button
					className={styles['action-button']}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					Back to Top
				</button>
			)}
		</main>
	)
}
