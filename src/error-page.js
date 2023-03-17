import { Link } from 'react-router-dom'
import NavbarOC from './components/NavbarOC'

const ErrorPage = () => {
	return (
		<>
			<NavbarOC />
			<div id='error-page'>
				<h2 className='contact-title'>Niestety!</h2>
				<h3>przepraszamy, ale wystąpił błąd, pracujemy nad tym aby to naprawić.</h3>

				<br />
				<Link className='nav-bar' to='forestgroup-react'>
					Wróć do strony głównej
				</Link>
			</div>
		</>
	)
}
export default ErrorPage
