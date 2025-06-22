import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "../../vendor/fonts/fonts.css";
import { APIkey, coordinates } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import { getWeather, processWeatherData} from "../../utils/weatherAPI";
import CurrentTemperatureUnitContext  from "../Context/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {},
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

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
  };

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeActiveModal();
    }
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
    ? setCurrentTemperatureUnit("C")
    : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    if (activeModal == "") return;
    document.addEventListener("mousedown", closeOnOverlayClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", closeOnOverlayClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const processData = processWeatherData(data);
        setWeatherData(processData);
      })
      .catch(console.error);
  }, []);

  return (

    <div onClick={closeOnOverlayClick} className="page">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />

        <Routes>
          <Route path="/" element={ <Main weatherData={weatherData} handleCardClick={handleCardClick} /> } />
          <Route path="/profile" element={ <p>Profile</p> } />
          </Routes>

        <Footer />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        closeActiveModal={closeActiveModal}
        closeOnOverlayClick={closeOnOverlayClick}
        isOpen={activeModal === "add-garment"}
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
            <input
              type="radio"
              name="weather-type-select"
              id="hot"
              className="modal__radio-input"
            />
            Hot
          </label>

          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              name="weather-type-select"
              id="warm"
              className="modal__radio-input"
            />
            Warm
          </label>

          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"              name="weather-type-select"
              id="cold"
              className="modal__radio-input"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        card={selectedCard}
        closeActiveModal={closeActiveModal}
        isOpen={activeModal === "preview"}
      />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
