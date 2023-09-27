import styles from './footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<p className={styles['footer__text']}>
				Star Wars and all associated names are © Lucasfilm ltd.
			</p>
		</footer>
	)
}
