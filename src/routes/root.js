import React from 'react'

import AboutUs from '../components/AboutUs'
// import Contact from './Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Offers from '../components/Offers'

const Root = () => {
	return (
		<>
			<NavBar />
			<Home />
			<AboutUs />
			<Offers />
			{/* <Contact /> */}
			<Footer />
		</>
	)
}

export default Root
