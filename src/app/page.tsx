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
	const [error, setError] = useState(false)

	const imagesPoll = ['https://picsum.photos/432/230']
	const getRandomImage = () => {
		return imagesPoll[0]
	}

	const loadCharacters = async () => {
		setCharacters(null)
		setError(false)

		const res = await fetch(`https://swapi.dev/api/people/`)
		const data = await res.json()

		if (res.status === 404 || data.count === 0) {
			setError(true)
			return
		}

		const results = data.results.map(
			(result: {
				name: string
				homeworld: string
				height: string
				mass: string
				gender: string
			}) => {
				const { name, homeworld, height, mass, gender } = result
				return {
					name,
					homeworld,
					height,
					mass,
					gender
				}
			}
		)

		const charactersData: PeopleProps = { results }

		setCharacters(charactersData)
	}

	useEffect(() => {
		getRandomImage()
		loadCharacters()
	}, [])

	return (
		<main className={styles['main']}>
			<div className={styles['main__header']}>
				<h1>Star Wars Characters</h1>

				<p>
					Embark on an unforgettable journey into a galaxy far, far away!
					Explore the rich tapestry of characters that populate this
					extraordinary universe and unleash the power of the Force and unravel
					the secrets of your favorite characters. May the Force be with you!
				</p>
			</div>

			<FilterNav />

			<h2 className={styles['char__heading']}>All Characters</h2>

			<section className={styles['char__section']}>
				{characters &&
					characters.results.map((char, index) => (
						<div
							className={styles['char__section--content']}
							key={index}
						>
							<Image
								src={getRandomImage()}
								alt={'Random image'}
								width={430}
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
					))}

				{error && <Error />}
			</section>
			<button className={styles['load-more__btn']}>Load More</button>
		</main>
	)
}
