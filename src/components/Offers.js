// import OffersBox from './OffersBox'
import { offers } from '../data'
// import OffersOptions from './OffersOptions'
import { Link } from 'react-router-dom'
import MoreOffers from '../routes/MoreOffers'

const Offers = () => {
	return (
		<section id='offers'>
			<div className='offers-text'>
				<h2>oferta</h2>
				<h3>Wybierz jedną z naszych wspaniałych ofert!</h3>
			</div>
			<div className='offers-boxes'>
				{offers.map(offer => {
					const { key, name, price, options } = offer

					return (
						<div className='box' key={key}>
							<p className='box-name'>{name}</p>
							<p className='box-price'>${price}</p>
							<div className='box-options'>
								{options.map((option1, index) => {
									const { option, style } = option1
									return (
										<p key={index} className={style === 'unactive' ? 'unactive' : null}>
											{style === 'unactive' ? <i className='fas fa-times'></i> : <i className='fas fa-check'></i>}
											{option}
										</p>
									)
								})}
							</div>
							<button className='box-button'>Wybierz</button>
						</div>
					)
				})}
			</div>
			<div className='more-btn'>
				<div className=' box-button more-btn'>
					<Link to='/offers' element={<MoreOffers />}>
						Więcej{' '}
					</Link>
				</div>
			</div>
		</section>
	)
}
export default Offers
