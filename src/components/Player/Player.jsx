import React, { useState } from "react";
import PlayerAudio from "../UI/PlayerAudio/PlayerAudio";
import "./player.scss";
import GenreItem from "../UI/button/GenreItem";
import AddSongPopup from "../UI/popup/AddSongPopup/AddSongPopup";

function Player({
  music_array,
  filterMusicHandler,
  inputSearch,
  filterMusicHandlerByGenre,
  filterGenre,
  handleClickOpenPopup,
}) {
  const [playedTrack, setPlayedTrack] = useState("");
  function playHandler(e) {
    if (playHandler === "") return;
    setPlayedTrack(e);
  }

  return (
    <div className="player">
      <div className="player__title">Music Player</div>
      <div className="player__search">
        <input value={inputSearch} type="text" onChange={filterMusicHandler} />
      </div>
      <div className="player__genre genre-player">
        <GenreItem
          filterGenre={filterGenre}
          handleClick={filterMusicHandlerByGenre}
        >
          Rock
        </GenreItem>
        <GenreItem
          filterGenre={filterGenre}
          handleClick={filterMusicHandlerByGenre}
        >
          Pop
        </GenreItem>
        <GenreItem
          filterGenre={filterGenre}
          handleClick={filterMusicHandlerByGenre}
        >
          Folk
        </GenreItem>
        <GenreItem
          filterGenre={filterGenre}
          handleClick={filterMusicHandlerByGenre}
        >
          Rap
        </GenreItem>
        <GenreItem
          filterGenre={filterGenre}
          handleClick={filterMusicHandlerByGenre}
        >
          Show all
        </GenreItem>
      </div>
      <div className="genre-player__popup genre-player-popup">
        <button
          onClick={handleClickOpenPopup}
          className="genre-player-popup__btn"
        >
          + Додати пісню
        </button>
      </div>
      <div className="player__content">
        {music_array.map((it) => (
          <PlayerAudio
            key={it.id}
            playHandler={playHandler}
            it={it}
            playedTrack={playedTrack}
            setPlayedTrack={setPlayedTrack}
          />
        ))}
      </div>
    </div>
  );
}

export default Player;
