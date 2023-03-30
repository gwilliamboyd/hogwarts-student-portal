import { useState, useEffect } from 'react'

const RenderedSpells = ({ mobileContent, desktopContent }) => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const contentWatcher = window.matchMedia('(max-width: 900px)')
		setIsMobile(contentWatcher.matches)

		function updateIsMobile(e) {
			setIsMobile(e.matches)
		}
		if (contentWatcher.addEventListener) {
			contentWatcher.addEventListener('change', updateIsMobile)
			return function cleanup() {
				contentWatcher.removeEventListener('change', updateIsMobile)
			}
		} else {
			contentWatcher.addListener(updateIsMobile)
			return function cleanup() {
				contentWatcher.removeListener(updateIsMobile)
			}
		}
	})

	return isMobile ? mobileContent : desktopContent
}

export default RenderedSpells
