import styles from './actionButton.module.scss'

export default function ActionButton({
	characters,
	displayRows,
	loadMore
}: any) {
	return (
		<>
			{characters?.results && displayRows * 4 <= characters.results.length ? (
				<button
					id='actionBtn'
					className={styles['action-button']}
					onClick={loadMore}
				>
					Load More
				</button>
			) : (
				<button
					id='actionBtn'
					className={styles['action-button']}
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					Back to Top
				</button>
			)}
		</>
	)
}
