import AudioPlayer from 'react-h5-audio-player';
import React, { useState } from 'react'

const playlist = [
    { name: '어디에도', src: '../static/어디에도.mp3', duration: '03:24' },
    { name: 'RainMan OST', src: '../static/Main_Final.mp3', duration: '01:19' },
    { name: 'Ready', src: '../static/Ready.mp3', duration: '00:58' },
    { name: 'Uncertainty', src: '../static/Uncertainty.mp3', duration: '00:39' },
    { name: 'Victorious feat.Gaiya', src: '../static/Victorious.mp3', duration: '05:16' },
  ]
 
const Player = () => {

    const [currentMusicIndex, setMusicIndex] = useState(0)

    function handleClickPrevious() {
        setMusicIndex(currentMusicIndex === 0 ? playlist.length - 1 : currentMusicIndex - 1)
      }
    function handleClickNext() {
        setMusicIndex(currentMusicIndex < playlist.length - 1 ? currentMusicIndex + 1 : 0)
    }

    return(
        <div>
            <AudioPlayer
                showSkipControls={true}
                showJumpControls={true}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
                src={playlist[currentMusicIndex].src}
            />
            <div className="music-playlist">
                <ul>
                    {playlist.map((song, i) => (
                        <li
                            role="menuitem"
                            tabIndex={0}
                            onClick={() => setMusicIndex(i)}
                            onKeyPress={() => {}}
                            key={i}
                            className={`${currentMusicIndex === i && 'playing'}`}
                        >
                            {currentMusicIndex === i && <i className="fa fa-play" aria-hidden="true"></i>}&nbsp;
                            <strong>{song.name}</strong>
                            <div className="song-duration">{song.duration}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
            .music-playlist {
                width: 100%;
                height: 200px;
                box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 0 2px rgba(0,0,0,0.12);
                overflow: scroll;
                margin-top: 10px;
            }
            ul li {
                width: 90%;
                border-bottom: 1px solid rgba(0, 0, 0, 0.4);
                list-style: none;
                margin-top: 12px;
                text-align: right;
                cursor: pointer;
            }
            ul li:hover {
                opacity: 0.6;
            }
            `}</style>
        </div>
    )
}

export default Player