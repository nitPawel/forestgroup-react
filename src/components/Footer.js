const Footer = () => {
	return (
		<footer>
			<div class='footer-up'>
				<div class='footer-logo'>
					<p>
						<i class='fas fa-tree'></i> Forest
					</p>
				</div>
				<div class='footer-text'>
					<div class='footer-card'>
						<p>O nas</p>
						<ul>
							<li>Historia</li>
							<li>Parki</li>
							<li>Opinie</li>
						</ul>
					</div>
					<div class='footer-card'>
						<p>Nasza firma</p>
						<ul>
							<li>Praca</li>
							<li>Kadry</li>
							<li>Zarząd</li>
						</ul>
					</div>
					<div class='footer-card'>
						<p>Dokumenty</p>
						<ul>
							<li>Wnioski</li>
							<li>Rezerwacje</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='footer-underline'></div>
			<div class='footer-down'>
				<p>
					<i class='far fa-copyright'>
						{' '}
						<span class='footer-year'> </span>
					</i>{' '}
					Forest Group Company Ltd.
				</p>
			</div>
		</footer>
	)
}
export default Footer
