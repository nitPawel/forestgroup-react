import FooterLinks from './FooterLinks'

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
					<FooterLinks />
				</div>
			</div>
			<div className='footer-underline'></div>
			<div className='footer-down'>
				<p>
					<i className='far fa-copyright'>
						{' '}
						<span className='footer-year'>{new Date().getFullYear()} </span>
					</i>{' '}
					Forest Group Company Ltd.
				</p>
			</div>
		</footer>
	)
}
export default Footer
