import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div id='error-page'>
			<h1>Niestety!</h1>
			<p>przepraszamy, ale wystąpił błąd, pracujemy nad tym aby to naprawić.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
export default ErrorPage
