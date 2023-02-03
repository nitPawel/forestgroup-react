const NavBar = () => {
	return (
		<nav class='nav'>
			<div class='nav-desktop'>
				<div class='nav-logo'>
					<p class='nav-text'>
						<i class='fas fa-tree'></i>Forest
					</p>
				</div>
				<div class='nav-links'>
					<a href='#home' class='nav-bar'>
						Home
					</a>
					<a href='#about-us' class='nav-bar'>
						O nas
					</a>
					<a href='#offers' class='nav-bar'>
						Oferta
					</a>
					<a href='contact.html' class='nav-bar'>
						Kontakt
					</a>
				</div>
				<button class='bars'>
					<i class='fas fa-bars'></i>
				</button>
			</div>
			<div class='nav-mobile active'>
				<div class='nav-logo--mobile'>
					<p class='nav-text--mobile'>
						<i class='fas fa-tree'></i>Forest
					</p>
				</div>
				<div class='nav-links--mobile'>
					<a href='#home' class='nav-bar--mobile'>
						Home
					</a>
					<a href='#about-us' class='nav-bar--mobile'>
						O nas
					</a>
					<a href='#offers' class='nav-bar--mobile'>
						Oferta
					</a>
					<a href='contact.html' class='nav-bar--mobile'>
						Kontakt
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
