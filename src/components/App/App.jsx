import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "../../vendor/fonts/fonts.css";
import { APIkey, coordinates } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import ItemModalDelete from "../ItemModal/ItemModalDelete";
import Footer from "../Footer/Footer";
import { getWeather, processWeatherData } from "../../utils/weatherAPI";
import CurrentTemperatureUnitContext from "../../Context/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { getItems, createNewItem, deleteItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {},
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleAddItemSubmit = ({ name, imageUrl, weather}) => {
    const newItem = {
    name,
    link: imageUrl,
    weather,
    _id: Date.now(),
  };

    setClothingItems([newItem, ...clothingItems]);
    closeActiveModal();

    createNewItem(newItem)
      .then((data) => {
        setClothingItems((prevItems) =>
        prevItems.map((item) =>
          item._id === newItem._id ? data : item
        )
      );
      })
      .catch(console.error);
  };

  const openConfirmationModal = () => {
      setActiveModal("delete-item");
  };

  const handleDeleteItem = (_id) => {
    deleteItem(_id)
      .then(() => {
      setClothingItems((prev) => prev.filter((card) => card._id !== _id));
      closeActiveModal();
      })
      .catch(console.error);
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

  useEffect(() => {
    getItems()
    .then((data) => {
      setClothingItems(data);
    }).catch(console.error);
  }, []);

  return (

    <div onClick={closeOnOverlayClick} className="page">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route path="/" element={<Main weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} />} />
            <Route path="/profile" element={<Profile handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem} clothingItems={clothingItems} handleAddClick={handleAddClick} />} />
          </Routes>

          <Footer />
        </div>

        <AddItemModal closeActiveModal={closeActiveModal}
          closeOnOverlayClick={closeOnOverlayClick}
          isOpen={activeModal === "add-garment"}
          onHandleAddItemSubmit={handleAddItemSubmit} />

        <ItemModal
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "preview"}
          openConfirmationModal={openConfirmationModal}
        />

        <ItemModalDelete 
        isOpen={activeModal === "delete-item"}
        closeActiveModal={closeActiveModal}
        closeOnOverlayClick={closeOnOverlayClick}
        handleDeleteItem={handleDeleteItem}
        itemId={selectedCard._id}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
