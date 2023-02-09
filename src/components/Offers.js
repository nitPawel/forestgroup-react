// import OffersBox from './OffersBox'
import { offers } from '../data'
import OffersOptions from './OffersOptions'
import { Link } from 'react-router-dom'

const Offers = () => {
	return (
		<section id='offers'>
			<div className='offers-text'>
				<h2>oferta</h2>
				<h3>Wybierz jedną z naszych wspaniałych ofert!</h3>
			</div>
			<div className='offers-boxes'>
				{offers.map(offer => {
					const { key, name, price } = offer

					return (
						<div className='box' key={key}>
							<p className='box-name'>{name}</p>
							<p className='box-price'>${price}</p>
							<div className='box-options'>
								<OffersOptions />
							</div>
							<button className='box-button'>Wybierz</button>
						</div>
					)
				})}
			</div>
			<div className='more-btn'>
				<div className=' box-button more-btn'>
					{/* <Link to={'/'} className='nav-text'><i className='fas fa-tree'></i>Forest</Link>  */}
					<Link to={'/offers'}>Więcej </Link>
				</div>
			</div>
		</section>
	)
}
export default Offers
