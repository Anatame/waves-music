import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Player({
    setSongs,
    setCurrentSong,
    songs,
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    setSongInfo,
    songInfo,
    dragHandler }) {

    useEffect(() => {
        const newSongs = songs.map(song => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true, 
                }
            } else {
                return {
                    ...song,
                    active: false, 
                }
            }
        }, [currentSong])

        setSongs(newSongs)
    })



    const playSongHandler = () => {
       if(isPlaying){
           audioRef.current.pause(); 
           setIsPlaying(!isPlaying)
       } else {
           audioRef.current.play();
           setIsPlaying(!isPlaying) 
       }
    } 

    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex(song => song.id === currentSong.id)
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        } else {
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1])
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
    }
  

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range" />
                <p>{getTime(songInfo.duration) || 0}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon
                    size="2x"
                    onClick={() => skipTrackHandler('skip-back')}
                    className="skip-back"
                    icon={faAngleLeft} />
                <FontAwesomeIcon
                    size="2x"
                    onClick={playSongHandler}
                    className="play"
                    icon={isPlaying ? faPause : faPlay } />
                <FontAwesomeIcon
                    size="2x"
                    onClick={() => skipTrackHandler('skip-forward')}
                    className="skip-forward" icon={faAngleRight} />
            </div>
        </div>
    )
}