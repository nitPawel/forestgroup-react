import waters from '../img/waters1280.jpg'

const AboutUs = () => {
	return (
		<>
			<section id='about-us'>
				<h2>O nas</h2>
				<div class='about-us-one'>
					<div class='hero-img3'></div>
					<img src={waters} alt='mala wysepka z krzewem na wodzie' />
					<div class='about-us-text'>
						<h3>Niezapomniane przygody</h3>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, cumque recusandae nam assumenda beatae
							expedita odio sed ab nesciunt ipsam ea mollitia ex odit dicta, aliquam consequatur at, eveniet harum nemo.
							Ad voluptate iste sit. <span>www.mmcschool.pl</span>
						</p>
					</div>
				</div>
			</section>

			<section>
				<div class='about-us-two'>
					<div class='hero-img2'>
						<div class='hero-shadow'></div>
						<div class='hero-text2'>
							<h2>Przygoda dla całej rodziny</h2>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutUs
