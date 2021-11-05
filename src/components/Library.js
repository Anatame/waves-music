import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs}) {
    return (
        <div className="library">
        <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong song={song}/>
                ))}
            </div>
        </div>
    )
}
