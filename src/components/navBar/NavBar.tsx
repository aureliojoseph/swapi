'use client'

import styles from './navBar.module.scss'
import { PiMoonStarsBold, PiSunBold } from 'react-icons/pi'
import { useTheme } from 'next-themes'

export default function NavBar() {
	const { theme, setTheme } = useTheme()

	const renderNavIcons = () => {
		if (theme === 'dark') {
			return (
				<PiSunBold
					className={styles['navbar__icon']}
					onClick={() => setTheme('light')}
				/>
			)
		}

		return (
			<PiMoonStarsBold
				className={styles['navbar__icon']}
				onClick={() => setTheme('dark')}
			/>
		)
	}

	return <nav className={styles['navbar']}>{renderNavIcons()}</nav>
}
