import React, { useState } from 'react'
import './App.css'
import videos from './utils/davids_vlogs'

function App() {
	const width = window.innerWidth < 200 ? 200 : window.innerWidth / 1.2
	const height = window.innerHeight < 200 ? 200 : window.innerHeight / 1.2
	const [videoIndex, setVideoIndex] = useState(Math.floor(Math.random() * (videos.length - 1)))

  return (
		<div className="app">
			<button className="random-button" onClick={() => setVideoIndex(Math.floor(Math.random() * (videos.length - 1)))}>New Video</button>
			<div className="video-player">
				<iframe title="video-player" width={width} height={height} src={videos[videoIndex]}></iframe>
			</div>
		</div>
  )
}

export default App
