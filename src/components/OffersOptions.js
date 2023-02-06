import { offers, offersOptions } from '../data'

const OffersOptions = () => {
	console.log(offers.active)

	return (
		<>
			{offersOptions.map(offer => {
				const { key, style, option} = offer;

				return <p key={key} className={style}><i className='fas fa-check'></i>{option}</p>
			})}
		</>
	)
}

export default OffersOptions

