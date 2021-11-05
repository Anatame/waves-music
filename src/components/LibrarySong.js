import React from 'react'

export default function LibrarySong({ song, songs, setCurrentSong, id }) {
    
    const songSelectHandler = () => {
        setCurrentSong(song)
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
