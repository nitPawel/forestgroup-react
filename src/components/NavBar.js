import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const NavBar = () => {
	const handleNavMobile = () => {
		const navMobile = document.querySelector('.nav-mobile')
		navMobile.classList.toggle('active')

		console.log('klik')
	}

	return (
		<nav className='nav'>
			<div className='nav-desktop'>
				<div className='nav-logo'>
					<p className='nav-text'>
						<Link to={'/'} className='nav-text'>
							<i className='fas fa-tree'></i>Forest
						</Link>
					</p>
				</div>
				<div className='nav-links'>
					<NavLinks linksClass={'nav-bar'} />
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
					<NavLinks linksClass={'nav-bar--mobile'} handler={handleNavMobile} />
				</div>
			</div>
		</nav>
	)
}

export default NavBar
