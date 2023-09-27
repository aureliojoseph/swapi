import styles from './fallback.module.scss'

export default function Falback() {
	return (
		<div className={styles['fallback']}>
			<h3>Loading...</h3>
		</div>
	)
}
