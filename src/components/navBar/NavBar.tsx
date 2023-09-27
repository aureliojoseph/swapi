'use client'

import styles from './navBar.module.scss'
import { PiMoonStarsBold, PiSunBold } from 'react-icons/pi'
import { useTheme } from 'next-themes'

export default function NavBar() {
	const { theme, setTheme } = useTheme()

	return (
		<nav className={styles['navbar']}>
			{theme === 'dark' ? (
				<PiSunBold
					className={styles['navbar__icon']}
					onClick={() => setTheme('light')}
				/>
			) : (
				<PiMoonStarsBold
					className={styles['navbar__icon']}
					onClick={() => setTheme('dark')}
				/>
			)}
		</nav>
	)
}
