import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PageContainer = ({ to, imageSrc, title, paragraph }) => {
	return (
		<>
			<Link
				to={to}
				className='page-container'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}>
					<img src={imageSrc} />
					<div className='page-container-text'>
						<div className='page-container-text-flex'>
							<p className='page-container-title'>{title}</p>
							<p className='page-container-paragraph'>{paragraph}</p>
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	)
}

export default PageContainer
