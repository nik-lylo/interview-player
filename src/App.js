import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Player from "./components/Player/Player";
import AddSongPopup from "./components/UI/popup/AddSongPopup/AddSongPopup";
import { filterBystring } from "./lib/helper/filterByString";
import { filterMusicByGenre } from "./lib/helper/filterMusicByGenre";
import { checkPopupObject } from "./lib/helper/checkPopupObject";

function App() {
  const [musicLibrary, setMusicLibrary] = React.useState([
    {
      id: "track1.mp3",
      author: "Віктор Павлік",
      song: "Білі Черемхи",
      genre: "folk",
    },
    {
      id: "track2.mp3",
      author: "Народні Пісні",
      song: "Чорнобривці",
      genre: "folk",
    },
    { id: "track3.mp3", author: "Inna", song: "Hot", genre: "pop" },
    { id: "track4.mp3", author: "Калуш", song: "Червоний барет", genre: "rap" },
    { id: "track5.mp3", author: "Павло Зібров", song: "Марина", genre: "pop" },
    { id: "track6.mp3", author: "Віктор Бронюк", song: "Олені", genre: "pop" },
    { id: "track7.mp3", author: "Slipknot", song: "Snuff", genre: "rock" },
  ]);
  const [filteredMusicLibrary, setFilteredMusicLibrary] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupInput, setPopupInput] = useState({
    song: "",
    author: "",
    id: "",
    genre: "",
  });
  const [popupError, setPopupError] = useState(false);
  function filterMusicHandler(e) {
    setInputSearch(e.target.value);
  }
  function filterMusicHandlerByGenre(genre) {
    if (genre === filterGenre) {
      setFilterGenre("Show all");
      return;
    }
    setFilterGenre(genre);
  }
  function handleClickOpenPopup() {
    setOpenPopup(true);
  }
  function handleClickClosePopup(e) {
    setOpenPopup(false);
    setPopupError(false);
  }
  function handleSubmitPopup(e) {
    e.preventDefault();
    const check = checkPopupObject(popupInput);
    if (check) {
      setMusicLibrary((prev) => [...prev, popupInput]);
      setPopupInput({ song: "", author: "", id: "", genre: "" });
    } else {
      setPopupError(true);
    }
  }

  useEffect(() => {
    if (filterGenre === "") return;
    if (filterGenre === "Show all") {
      setFilteredMusicLibrary(musicLibrary);
      return;
    }
    const filtereByGenre = filterMusicByGenre(filterGenre, musicLibrary);
    setFilteredMusicLibrary(filtereByGenre);
  }, [filterGenre]);

  useEffect(() => {
    if (inputSearch === "") {
      setFilteredMusicLibrary(musicLibrary);
    } else {
      const filtered = filterBystring(inputSearch, musicLibrary);
      setFilteredMusicLibrary(filtered);
    }
  }, [inputSearch, musicLibrary]);

  return (
    <div className={openPopup ? "app app__lock" : "app"}>
      <Player
        music_array={filteredMusicLibrary}
        filterMusicHandler={filterMusicHandler}
        inputSearch={inputSearch}
        filterMusicHandlerByGenre={filterMusicHandlerByGenre}
        filterGenre={filterGenre}
        handleClickOpenPopup={handleClickOpenPopup}
      />
      <AddSongPopup
        isOpen={openPopup}
        handleClickClosePopup={handleClickClosePopup}
        popupInput={popupInput}
        setPopupInput={setPopupInput}
        handleSubmitPopup={handleSubmitPopup}
        popupError={popupError}
      />
    </div>
  );
}

export default App;
