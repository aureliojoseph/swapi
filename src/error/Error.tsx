import styles from './error.module.scss'

export default function Error() {
	return (
		<div className={styles['error']}>
			<h3>Your Homeworld is lost in another Galaxy 🤷🏻‍♂️</h3>
			<h5>Search again!</h5>
		</div>
	)
}
