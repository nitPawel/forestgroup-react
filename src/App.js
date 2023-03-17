import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import ErrorPage from './error-page'
import Contact from './routes/Contact'
import MoreOffers from './routes/MoreOffers'
import SharedLayout from './routes/SharedLayout'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='forestgroup-react' element={<SharedLayout />}>
					<Route index element={<Home />} />
				</Route>
				<Route path='/offers' element={<MoreOffers />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
