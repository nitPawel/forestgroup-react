const Offers = () => {
	return (
		<section id='offers'>
			<div class='offers-text'>
				<h2>oferta</h2>
				<h3>Wybierz jedną z naszych wspaniałych ofert!</h3>
			</div>
			<div class='offers-boxes'>
				<div class='box'>
					<p class='box-name'>Demo</p>
					<p class='box-price'>$0</p>
					<div class='box-options'>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p class='unactive'>Opcja poza pakietem</p>
						<p class='unactive'>Opcja poza pakietem</p>
						<p class='unactive'>Opcja poza pakietem</p>
					</div>
					<button class='box-button'>Wybierz</button>
				</div>
				<div class='box'>
					<p class='box-name'>Standard</p>
					<p class='box-price'>$99</p>
					<div class='box-options'>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p class='unactive'>Opcja poza pakietem</p>
						<p class='unactive'>Opcja poza pakietem</p>
					</div>
					<button class='box-button'>Wybierz</button>
				</div>
				<div class='box'>
					<p class='box-name'>Premium</p>
					<p class='box-price'>$299</p>
					<div class='box-options'>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
						<p>
							<i class='fas fa-check'></i>Opcja w pakiecie
						</p>
					</div>
					<button class='box-button'>Wybierz</button>
				</div>
			</div>
			<div class='more-btn'>
				<div class=' box-button more-btn'>
					<a href='offers.html'>Więcej </a>
				</div>
			</div>
		</section>
	)
}
export default Offers