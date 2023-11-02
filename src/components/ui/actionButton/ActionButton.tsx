'use client'

import { useState } from 'react'
import styles from './actionButton.module.scss'

export default function ActionButton({
	characters,
	displayRows,
	loadMore,
	showCharacters
}: any) {
	const [isLoading, setIsLoading] = useState('Unleash the Force!')

	const handleShowCharacters = () => {
		showCharacters()
		setIsLoading('Loading...')
	}

	return (
		<>
			{showCharacters ? ( // extract logic
				<button
					id='actionBtn'
					className={styles['action-button']}
					onClick={handleShowCharacters}
				>
					{isLoading}
				</button>
			) : characters?.results &&
			  displayRows * 4 <= characters.results.length ? (
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
