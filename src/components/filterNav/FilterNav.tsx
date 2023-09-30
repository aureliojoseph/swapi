import styles from './filterNav.module.scss'

export default function FilterNav({
	selectedPlanet,
	setSelectedPlanet,
	clearFilters,
	homeworlds
}: any) {
	return (
		<div className={styles['filter-nav']}>
			<div className={styles['filter-nav__search']}>
				<label htmlFor='planet'>Filter By:</label>
				<select
					id='planet'
					value={selectedPlanet}
					onChange={(e) => setSelectedPlanet(e.target.value)}
				>
					<option
						value=''
						selected
					>
						All
					</option>
					{homeworlds.map((homeworld: any, index: number) => (
						<option
							key={index}
							value={homeworld}
						>
							{homeworld}
						</option>
					))}
				</select>
			</div>
			<button onClick={clearFilters}>clear all</button>
		</div>
	)
}
