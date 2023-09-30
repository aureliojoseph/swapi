import styles from './characters.module.scss'
import Error from '@/error/Error'
import Image from 'next/image'

export default function Characters({
	error,
	filteredCharacters,
	displayRows
}: any) {
	return (
		<section className={styles['char__section']}>
			{error && <Error />}

			{filteredCharacters
				.slice(0, displayRows * 4)
				.map((char: any, index: number) => {
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
	)
}
