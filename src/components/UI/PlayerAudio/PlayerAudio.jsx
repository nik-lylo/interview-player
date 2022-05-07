import React, { useEffect, useRef, useState } from "react";
import "./playerAudio.scss";

const PlayerAudio = ({ playHandler, it, playedTrack, setPlayedTrack }) => {
  const audioRef = useRef();
  const [progress, setProgress] = useState("");

  function handleClick() {
    if (it.id === playedTrack) {
      setPlayedTrack("");
    }
    if (!audioRef.current.paused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }
  useEffect(() => {
    if (playedTrack !== it.id && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [playedTrack]);

  useEffect(() => {
    return () => {
      setPlayedTrack("");
    };
  }, []);

  return (
    <div className="player-audio">
      <div className="player-audio__content">
        <button className="player-audio__button" onClick={handleClick}>
          <img
            src={
              playedTrack === it.id
                ? require("../../../assets/images/pause.png")
                : require("../../../assets/images/play.png")
            }
            alt=""
          />
        </button>
        <div className="player-audio__song">
          <div className="player-audio__author">{it.author}</div>
          <div className="player-audio__track">{it.song}</div>
        </div>
      </div>
      <div className="player-audio__indicator">
        <div className="player-audio__line"></div>
        <div
          className="player-audio__redline"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <audio
        ref={audioRef}
        onPlay={() => playHandler(it.id)}
        onTimeUpdate={() => {
          let time =
            (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setProgress(time);
        }}
        type="audio/mp3"
        src={
          /^track/.test(it.id)
            ? require(`../../../assets/track/${it.id}`)
            : it.id
        }
      ></audio>
    </div>
  );
};

export default PlayerAudio;
