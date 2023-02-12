import { navLinks } from '../data'

const NavLinks = ({ linksClass, handler }) => {
	return (
		<>
			{navLinks.map(link => {
				const { id, href, text } = link

				return (
					<a onClick={handler} key={id} href={href} className={linksClass}>
						{text}
					</a>
				)
			})}
		</>
	)
}

export default NavLinks
