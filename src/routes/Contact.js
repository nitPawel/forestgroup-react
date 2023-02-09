import ContactMap from '../components/ContactMap'
import Footer from '../components/Footer'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

const Contact = () => {
	return (
		<>
			<NavBar />
			{/* <Home/> */}

			<h2 className='contact-title'>Kontakt</h2>
			<div className='contact-up'>
				<div className='map'>
					<div className='map-text'>
						<h3>wskazówki dojazdu</h3>
						<ContactMap />
					</div>
				</div>
				<div className='contact-container'>
					<h3>skontaktuj się z nami</h3>
					<form className='contact__form'>
						<div className='contact__form-box'>
							<label for='name'>Twoje imię:</label>
							<input type='text' id='name' />
						</div>
						<div className='contact__form-box'>
							<label for='mail'>Twój adres email:</label>
							<input type='email' id='mail' />
						</div>
						<div className='contact__form-box'>
							<label for='msg'>Treść wiadomości:</label>
							<br />
							<textarea id='msg' cols='30' rows='10'></textarea>
						</div>
					</form>
					<button type='submit' className='box-button'>
						wyślij
					</button>
				</div>
			</div>
			<div className='contact-down'>
				<div className='contact-box'>
					<p>Nasze namiary: </p>
					<div className='phone'>
						<i className='fas fa-phone'></i>+482257844
					</div>
					<div className='mail'>
						<i className='fas fa-at'></i>email@email.com
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact
