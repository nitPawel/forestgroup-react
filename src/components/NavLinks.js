import { Link } from 'react-router-dom'

const NavLinks = ({ linksClass, handler }) => {
	return (
		<>
			<a onClick={handler} href='#home' className={linksClass}>
				Home
			</a>
			<a onClick={handler} href='#about-us' className={linksClass}>
				O nas
			</a>
			<a onClick={handler} href='#offers' className={linksClass}>
				Oferta
			</a>
			<Link onClick={handler} to='/contact' className={linksClass}>
				Kontakt
			</Link>
		</>
		// <>
		// 	{navLinks.map(link => {
		// 		const { id, href, text } = link

		// 		// return (
		// 		// 	<Link to={href} className={linksClass} key={id}>{text}</Link>
		// 		// )

		// 		// return (
		// 		// 	<a onClick={handler} key={id} href={href} className={linksClass}>
		// 		// 		{text}
		// 		// 	</a>
		// 		// )
		// 	})}
		// </>
	)
}

export default NavLinks
