import React from 'react'

export default function LibrarySong({song}) {
    return (
        <div className="library-song">

            <img alt= {song.name} src={song.cover}></img>

            <div className="song-description">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
                </div>

        </div>
    )
}
