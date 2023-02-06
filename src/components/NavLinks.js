import { navLinks } from '../data'

const NavLinks = ({linksClass}) => {
	return (
		<>
			{navLinks.map(link => {
				const { id, href, text } = link

				return (
					<a key={id} href={href} className={linksClass}>
						{text}
					</a>
				)
			})}
		</>
	)
}

export default NavLinks
