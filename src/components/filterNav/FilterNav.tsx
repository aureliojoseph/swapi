import styles from './filterNav.module.scss'

export default function FilterNav() {
	return (
		<div className={styles['filter-nav']}>
			<div className={styles['filter-nav__search']}>
				<p>Filter by:</p>
				<input
					id='filterBy'
					type='text'
					placeholder='All'
				/>
			</div>
			<button>Clear All</button>
		</div>
	)
}
