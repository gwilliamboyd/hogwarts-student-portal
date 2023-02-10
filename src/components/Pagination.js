const Pagination = ({ charactersPerPage, filteredCharacters, paginate }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(filteredCharacters / charactersPerPage); i++) {
		pageNumbers.push(i)
	}
	// console.log(pageNumbers)

	return (
		<div className='pagination-container'>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li
						key={number}
						onClick={() => paginate(number)}
						className='page-number'>
						{number}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Pagination
