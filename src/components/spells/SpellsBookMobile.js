import SpellsEntry from './SpellsEntry'
const SpellsBook = ({ spells }) => {
	return (
		<>
			<div className='spells-book'>
				<div className='spells-page-one'>
					<ul>
						{spells.map(s => {
							return (
								<SpellsEntry
									id={s.id}
									name={s.name}
									desc={s.description}
								/>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default SpellsBook
