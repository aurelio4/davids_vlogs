import React, { useState } from 'react'
import './App.css'
import videos from './utils/davids_vlogs'

function App() {
	const width = window.innerWidth < 200 ? 200 : window.innerWidth / 1.2
	const height = window.innerHeight < 200 ? 200 : window.innerHeight / 1.2
	const [videoIndex, setVideoIndex] = useState(Math.floor(Math.random() * (videos.length - 1)))
	const [vlogNumber, setVlogNumber] = useState(Math.floor(Math.random() * (videos.length - 1)))

	const checkVideo = () => {
		if(vlogNumber > videos.length) {
			alert('Not a valid vlog!')
		} else {
			setVideoIndex(vlogNumber)
		}
	}

  return (
		<div className="app">
			<div className="nav">
				<input type="number" className="vlog-number-input" name="vlog-number-input" value={vlogNumber} onChange={e => setVlogNumber(e.target.value)} />
				<button className="vlog-number-button" onClick={() => checkVideo()}>New Vlog</button>
			</div>
			<div className="video-player">
				<iframe title="video-player" width={width} height={height} src={`https://www.youtube.com/embed/${videos[videoIndex]}`}></iframe>
			</div>
		</div>
  )
}

export default App
