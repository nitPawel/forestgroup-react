import { NavLink } from 'react-router-dom'
import NavbarOC from './components/NavbarOC'

const ErrorPage = () => {
	return (
		<>
		<NavbarOC/>
		<div id='error-page'>
			<h2 className='contact-title'>Niestety!</h2>
			<h3>przepraszamy, ale wystąpił błąd, pracujemy nad tym aby to naprawić.</h3>

			<br />
			<NavLink className='nav-bar' to='/'>
				Wróć do strony głównej
			</NavLink>
		</div>
		</>
	)
}
export default ErrorPage
