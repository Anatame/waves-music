import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Player({ currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, dragHandler}) {



    const playSongHandler = () => {
       if(isPlaying){
           audioRef.current.pause(); 
           setIsPlaying(!isPlaying)
       } else {
           audioRef.current.play();
           setIsPlaying(!isPlaying) 
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
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    icon={isPlaying ? faPause : faPlay } />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
            </div>
        </div>
    )
}
