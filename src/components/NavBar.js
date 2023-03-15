import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const NavBar = () => {
	const [showLinks, setShowLinks] = useState(false)

	const handleBarsMenu = () => {
		setShowLinks(!showLinks)
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
					<NavLinks linksClass={'nav-bar'} />
				</div>
				<button onClick={handleBarsMenu} className='bars'>
					<i className='fas fa-bars'></i>
				</button>
				{/* <button onClick={handleNavMobile} className='bars'>
					<i className='fas fa-bars'></i>
				</button> */}
			</div>
			<div className={showLinks ? 'nav-mobile' : 'nav-mobile active'}>
				{/* <div className='nav-mobile active'> */}
				<div className='nav-logo--mobile'>
					<p className='nav-text--mobile'>
						<i className='fas fa-tree'></i>Forest
					</p>
				</div>
				<div className='nav-links--mobile'>
					<NavLinks linksClass={'nav-bar--mobile'} handler={handleBarsMenu} />
				</div>
			</div>
		</nav>
	)
}

export default NavBar
