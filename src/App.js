import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './error-page'
import Contact from './routes/Contact'
import MoreOffers from './routes/MoreOffers'
import Root from './routes/root'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: '/contact',
		element: <Contact />
	},
	{
		path: '/offers',
		element: <MoreOffers />
	}
])

function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)
}

export default App
