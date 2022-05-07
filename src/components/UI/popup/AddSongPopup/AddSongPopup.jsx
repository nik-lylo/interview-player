import React from "react";
import PopupInput from "../../input/popup_input/PopupInput";
import "./addSongPopup.scss";

const AddSongPopup = ({
  isOpen,
  handleClickClosePopup,
  setPopupInput,
  popupInput,
  handleSubmitPopup,
  popupError,
}) => {
  function handleChangePopupInput(e, name) {
    setPopupInput((prev) => ({ ...prev, [name]: e.target.value }));
  }
  function handleChangePopupInputFile(e) {
    const fileUrl = URL.createObjectURL(e.currentTarget.files[0]);
    setPopupInput((prev) => ({ ...prev, id: fileUrl }));
  }
  return (
    <div
      className={
        isOpen ? "add-song-popup" : "add-song-popup add-song-popup__closed"
      }
    >
      <div
        onClick={handleClickClosePopup}
        className="add-song-popup__clickclose"
      ></div>
      <div className="add-song-popup__body">
        <div className="add-song-popup__title">Завантажити пісню</div>
        <form className="add-song-popup__form" onSubmit={handleSubmitPopup}>
          <div className="add-song-popup__name add-song-popup__input">
            <PopupInput
              placeholder="Введіть назву пісні"
              value={popupInput.song}
              handleChange={handleChangePopupInput}
              name="song"
            />
          </div>
          <div className="add-song-popup__author add-song-popup__input">
            <PopupInput
              placeholder="Введіть автора пісні"
              value={popupInput.author}
              handleChange={handleChangePopupInput}
              name="author"
            />
          </div>
          <div className="add-song-popup__genre add-song-popup__input">
            <PopupInput
              placeholder="Введіть жанр пісні"
              value={popupInput.genre}
              handleChange={handleChangePopupInput}
              name="genre"
            />
          </div>
          <div className="add-song-popup__file ">
            <input
              type="file"
              onChange={handleChangePopupInputFile}
              id="soundFile"
              accept="audio/*"
            />
          </div>
          {popupError && (
            <div className="add-song-popup__error">
              Будь ласка заповніть всі поля
            </div>
          )}
          <button type="submit" className="add-song-popup__button">
            Завантажити
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSongPopup;
