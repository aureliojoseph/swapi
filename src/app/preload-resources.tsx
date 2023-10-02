'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
	ReactDOM.preconnect('https://swapi.dev/api/people/', {
		crossOrigin: 'https://swapi.dev/api/people/'
	})

	return null
}
