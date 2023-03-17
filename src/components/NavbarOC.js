import { Link } from 'react-router-dom'

const NavbarOC = () => {
	const handleNavMobile = () => {
		const navMobile = document.querySelector('.nav-mobile')
		navMobile.classList.toggle('active')
	}

	return (
		<nav className='nav'>
			<div className='nav-desktop'>
				<div className='nav-logo'>
					<p className='nav-text'>
						<Link to='/' className='nav-text'>
							<i className='fas fa-tree'></i>Forest
						</Link>
					</p>
				</div>
				<div className='nav-links'>
					<Link to='/' className='nav-bar'>
						Home
					</Link>
				</div>
				<button onClick={handleNavMobile} className='bars'>
					<i className='fas fa-bars'></i>
				</button>
			</div>
			<div className='nav-mobile active'>
				<div className='nav-logo--mobile'>
					<p className='nav-text--mobile'>
						<i className='fas fa-tree'></i>Forest
					</p>
				</div>
				<div className='nav-links--mobile'>
					<Link to='/' className='nav-bar--mobile'>
						Home
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default NavbarOC
