import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='App'>
			<motion.div
				className='card'
				layout
				transition={{ layout: { duration: 0.8, type: 'spring' } }}
				onClick={() => setIsOpen(!isOpen)}
				style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}>
				<motion.h2 layout='position'>Framer Motion 🚀</motion.h2>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className='expand'>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro deserunt aspernatur pariatur obcaecati facilis
							voluptatem ipsam est cumque, a ipsum quas quia sit?
						</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quod.</p>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}

export default App;
