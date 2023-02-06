const NavBar = () => {
	return (
		<nav className='nav'>
			<div className='nav-desktop'>
				<div className='nav-logo'>
					<p className='nav-text'>
						<i className='fas fa-tree'></i>Forest
					</p>
				</div>
				<div className='nav-links'>
					<a href='#home' className='nav-bar'>
						Home
					</a>
					<a href='#about-us' className='nav-bar'>
						O nas
					</a>
					<a href='#offers' className='nav-bar'>
						Oferta
					</a>
					<a href='contact.html' className='nav-bar'>
						Kontakt
					</a>
				</div>
				<button className='bars'>
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
					<a href='#home' className='nav-bar--mobile'>
						Home
					</a>
					<a href='#about-us' className='nav-bar--mobile'>
						O nas
					</a>
					<a href='#offers' className='nav-bar--mobile'>
						Oferta
					</a>
					<a href='contact.html' className='nav-bar--mobile'>
						Kontakt
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
