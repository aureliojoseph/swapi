import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					CloudWalk&nbsp;
					<code className={styles.code}>Frontend Test</code>
				</p>
			</div>
		</main>
	)
}
