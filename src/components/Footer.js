const Footer = () => {
	return (
		<footer>
			<div className='footer-up'>
				<div className='footer-logo'>
					<p>
						<i className='fas fa-tree'></i> Forest
					</p>
				</div>
				<div className='footer-text'>
					<div className='footer-card'>
						<p>O nas</p>
						<ul>
							<li>Historia</li>
							<li>Parki</li>
							<li>Opinie</li>
						</ul>
					</div>
					<div className='footer-card'>
						<p>Nasza firma</p>
						<ul>
							<li>Praca</li>
							<li>Kadry</li>
							<li>Zarząd</li>
						</ul>
					</div>
					<div className='footer-card'>
						<p>Dokumenty</p>
						<ul>
							<li>Wnioski</li>
							<li>Rezerwacje</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-underline'></div>
			<div className='footer-down'>
				<p>
					<i className='far fa-copyright'>
						{' '}
						<span className='footer-year'> </span>
					</i>{' '}
					Forest Group Company Ltd.
				</p>
			</div>
		</footer>
	)
}
export default Footer
