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
					const randomWidth = Math.floor(Math.random() * 500) + 200
					const randomHeight = Math.floor(Math.random() * 500) + 220
					const randomImageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`

					return (
						<div
							className={styles['char__section--content']}
							key={index}
						>
							<div className={styles['char__section--content-grid']}>
								<Image
									className={styles['char__section--content-grid--img']}
									src={randomImageUrl}
									alt={'Random image'}
									width={432}
									height={230}
								/>
							</div>

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
