import styles from './error.module.scss'

export default function Error() {
	return (
		<div className={styles['error']}>
			<h3>There was a great disturbance in the Force!</h3>
			<h5>Please, reload the page.</h5>
		</div>
	)
}
