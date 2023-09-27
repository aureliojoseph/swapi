import Error from '@/error/Error'
import styles from './page.module.scss'
import FilterNav from '@/components/filterNav/FilterNav'

export default function Home() {
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
			<Error />
		</main>
	)
}
