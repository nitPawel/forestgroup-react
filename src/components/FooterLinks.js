import { footerCards } from '../data'

const FooterLinks = () => {
	return (
		<>
			{footerCards.map(card => {
				console.log(card.links)
				return (
					<div key={card.id} className='footer-card'>
						<p>{card.title}</p>
						<ul>
							{card.links.map(option => {
								return <li>{option}</li>
							})}
						</ul>
					</div>
				)
			})}
		</>
	)
}

export default FooterLinks
