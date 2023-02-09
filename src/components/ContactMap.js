import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
	width: '400px',
	height: '400px',
}

const center = {
	lat: 51.109,
	lng: 17.033,
}

function MyComponent() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyA3ttIebNdh51TBHaiZti7gnPw3HzYCxWs',
	})

	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center)
		map.fitBounds(bounds)

		setMap(map)
        
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} onLoad={onLoad} onUnmount={onUnmount}>
			<Marker position={{ lat: 51.109, lng: 17.033 }} />
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	)
}

export default React.memo(MyComponent)
