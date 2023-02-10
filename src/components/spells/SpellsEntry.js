const SpellsEntry = ({ id, name, desc }) => {
	return (
		<>
			<li
				className='spell-entry'
				key={id}>
				<p className='spell-title'>{name}</p>
				<p className='spell-desc'>{desc}</p>
			</li>
		</>
	)
}

export default SpellsEntry
