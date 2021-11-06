import React from 'react'

export default function LibrarySong({ song, songs, setCurrentSong, id, audioRef, isPlaying }) {
    
    const songSelectHandler = () => {
        setCurrentSong(song)
        audioRef.current.play();
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) =>{
                    audioRef.current.play()
                })
            }
        }
    }

    return (
        <div onClick={songSelectHandler} className="library-song">
 
            <img alt= {song.name} src={song.cover}></img>

            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>

        </div>
    )
}
