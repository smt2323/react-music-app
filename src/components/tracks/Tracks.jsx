import { IconButton } from "@mui/material";
import "./tracks.css";
import {useContext} from 'react'
import  {AUDIO_CONTEXT } from '../context/AudioContext'
import { formatToMMSS } from "../../helpers/formatToMMSS";
import { Pause, PlayArrow } from "@mui/icons-material";

const Tracks = (track) => {
    const {id,  preview, title, artists, duration} = track
    const {handleAudio, isPlaying, currentTrack } = useContext(AUDIO_CONTEXT)

    const isCurrentTrack = id === currentTrack?.id

    const formattedTime = formatToMMSS(duration)

    // const min = duration /60
    // const second = duration % 60
  return (
    <div className="track">
      <IconButton onClick={() => handleAudio(track)}>
         {isPlaying && isCurrentTrack  ? <Pause /> : <PlayArrow />}
         </IconButton>
         
      <img className="preview" src={preview} alt="image" />
      <div className="info">
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p> {formattedTime} </p>
    </div>
  );
};

export default Tracks;
