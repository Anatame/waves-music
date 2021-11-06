import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({isPlaying, audioRef, songs, setCurrentSong, setSongs}) {
    return (
        <div className="library">
        <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong
                        setSongs={setSongs}
                        isPlaying = {isPlaying}
                        audioRef={audioRef}
                        id={song.id}
                        key={song.id}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song} />
                ))}
            </div>
        </div>
    )
}
