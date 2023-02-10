import { forwardRef } from 'react'

const HousePanel = forwardRef(({ houseId, src, onClick }, ref) => {
	return (
		<div
			className='house-panel'
			id={houseId}
			onClick={onClick}
			ref={ref}>
			<img src={src} />
		</div>
	)
})

export default HousePanel
