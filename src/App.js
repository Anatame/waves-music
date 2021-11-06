import React, {useState, useRef} from 'react'
import "./styles/app.scss"
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
import data from './util';

function App() {

  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  const [libraryStatus, setLibraryStatus] = useState(false)
  
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration;
    
    setSongInfo({...songInfo, currentTime: current, duration: duration})
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
}


  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus = {setLibraryStatus} />
      <Song currentSong= {currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo} 
        dragHandler={dragHandler}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
      <Library libraryStatus={libraryStatus} setSongs = {setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
      <audio
                onLoadedMetadata = {timeUpdateHandler}
                onTimeUpdate={(e) => timeUpdateHandler(e)}
                ref={audioRef}
                src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
