import { offersOptions } from '../data'

const OffersOptions = () => {
	return (
		<>
			{offersOptions.map(offer => {
				const { key, style, option } = offer

				return (
					<p key={key} className={style}>
						{style === 'unactive' ? null : <i className='fas fa-check'></i>}
						{option}
					</p>
				)
			})}
		</>
	)
}

export default OffersOptions
