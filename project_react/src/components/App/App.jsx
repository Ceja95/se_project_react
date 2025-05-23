import { useEffect, useState } from "react";

import "./App.css";
import "../../vendor/fonts/fonts.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (e) => {
    setActiveModal("preview");
    setSelectedCard();
  }

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function closeOnOverlayClick(e) {
    if (e.target.classList.contains("modal_opened")) {
      closeActiveModal();
    }
  }

  useEffect(() => {
    if (activeModal == "") return;
    document.addEventListener("mousedown", closeOnOverlayClick);
    return document.removeEventListener("mousedown", closeOnOverlayClick);
  }, [activeModal]);

  return (
    <div onClick={closeOnOverlayClick} className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        closeOnOverlayClick={closeOnOverlayClick}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            id="name"
            className="modal__input"
            placeholder="Name"
          />
        </label>

        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="url"
            id="imageUrl"
            className="modal__input"
            placeholder="Image Url"
          />
        </label>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input type="radio" id="hot" className="modal__radio-input" />
            Hot
          </label>

          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" id="warm" className="modal__radio-input" />
            Warm
          </label>

          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" id="cold" className="modal__radio-input" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal activeModal={activeModal} card={selectedCard} closeActiveModal={closeActiveModal} />
    </div>
  );
}

export default App;
