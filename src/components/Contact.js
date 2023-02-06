const Contact = () => {
    const title = 'Mapa z GoogleMaps'
    const link = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.898268659008!2d19.890660215913865!3d50.088191521281516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a326d015c3b%3A0x47a12cd367a1f34e!2sRestauracja%20McDonald&#39;s!5e0!3m2!1spl!2spl!4v1669811491692!5m2!1spl!2spl'
	return (
		<main>
			<h2>Kontakt</h2>

			<div class='contact-up'>
				<div class='map'>
					<div class='map-text'>
						<h3>wskazówki dojazdu</h3>
					</div>
					<iframe
                    title={title}
						src={link}
						width='600'
						height='450'
						style={{border: '0', borderRadius: '5px'}}
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'/>
				</div>
				<div class='contact-container'>
					<h3>skontaktuj się z nami</h3>
					<form class='contact__form'>
						<div class='contact__form-box'>
							<label for='name'>Twoje imię:</label>
							<input type='text' id=' name' />
						</div>
						<div class='contact__form-box'>
							<label for='mail'>Twój adres email:</label>
							<input type='email' id='mail' />
						</div>
						<div class='contact__form-box'>
							<label for='msg'>Treść wiadomości:</label>
							<br />
							<textarea id='msg' cols='30' rows='10'></textarea>
						</div>
					</form>
					<button type='submit' class='box-button'>
						wyślij
					</button>
				</div>
			</div>
			<div class='contact-down'>
				<div class='contact-box'>
					<p>Nasze namiary: </p>
					<div class='phone'>
						<i class='fas fa-phone'></i>+482257844
					</div>
					<div class='mail'>
						<i class='fas fa-at'></i>email@email.com
					</div>
				</div>
			</div>
		</main>
	)
}

export default Contact
