const SpellsEntry = ({ id, name, desc }) => {
	return (
		<>
			<li
				className='spell-entry'
				key={id}>
				<span className='spell-title'>{name}</span>
				<span className='spell-desc'>{desc}</span>
			</li>
		</>
	)
}

export default SpellsEntry
