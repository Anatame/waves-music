import React, {useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

export default function Player({ currentSong, isPlaying, setIsPlaying }) {

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    const audioRef = useRef(null);

    const playSongHandler = () => {
       if(isPlaying){
           audioRef.current.pause(); 
           setIsPlaying(!isPlaying)
       } else {
           audioRef.current.play();
           setIsPlaying(!isPlaying) 
       }
    } 

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime
        const duration = e.target.duration;
        
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime: e.target.value })
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
                <FontAwesomeIcon onClick={playSongHandler}  className="play" icon={faPlay} />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} />
            </div>

            <audio
                onLoadedMetadata = {timeUpdateHandler}
                onTimeUpdate={(e) => timeUpdateHandler(e)}
                ref={audioRef}
                src={currentSong.audio}></audio>
        </div>
    )
}
