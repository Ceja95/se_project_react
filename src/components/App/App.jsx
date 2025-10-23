import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
import CurrentUserContext from "../../Context/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import { getItems, createNewItem, deleteItem } from "../../utils/api";
import RegisterModal from "../UserModal/RegisterModal";
import LoginModal from "../UserModal/LoginModal";
import { register, login } from "../../utils/auth";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Jose Lara-Ceja",
    avatar:" https://i.pravatar.cc/150?img=3", 
  });

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const registerClick = () => {
    setActiveModal("register");
  };

  const loginClick = () => {
    setActiveModal("login");
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

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    const newItem = {
      name,
      link: imageUrl,
      weather,
    };

    createNewItem(newItem)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Failed to create new item:", error);
      });
  };

  const handleRegisterSubmit = ({ name, imageUrl, password, email }) => {
    const registeration = {
      name,
      link: imageUrl,
      password,
      email,
    };

    register(registeration)
      .then(() => {
        return login({ email, password });
      })
      .then((res) => {
       if (res.ok) {
        localStorage.setItem("jwt", res.token);
       }
      })
      .then(() => {
        setCurrentUser(registeration);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Registration or login failed:", err);
      });
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
    if (activeModal === "") return;
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

    <CurrentUserContext.Provider value={currentUser}>
    <div onClick={closeOnOverlayClick} className="page">
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="page__content">
          <Header currentUser={currentUser}  handleAddClick={handleAddClick} registerClick={registerClick} loginClick={loginClick} weatherData={weatherData} />

          <Routes>
            <Route path="/" element={<Main weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} />} />
            <Route path="/profile" element={<Profile handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem} clothingItems={clothingItems} handleAddClick={handleAddClick} />} />
            <Route path="*" element={isLoggedIn ? (<Navigate to="/profile" replace />) : (<Navigate to="/login" replace />)} />
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          closeActiveModal={closeActiveModal}
          closeOnOverlayClick={closeOnOverlayClick}
          isOpen={activeModal === "add-garment"}
          onHandleAddItemSubmit={handleAddItemSubmit} />

        <ItemModal
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "preview"}
          openConfirmationModal={openConfirmationModal}
          selectedCard={selectedCard}
          currentUser={currentUser}
        />

        <ItemModalDelete
          isOpen={activeModal === "delete-item"}
          closeActiveModal={closeActiveModal}
          closeOnOverlayClick={closeOnOverlayClick}
          handleDeleteItem={handleDeleteItem}
          itemId={selectedCard._id}
        />

        <RegisterModal
          isOpen={activeModal === "register"}
          closeActiveModal={closeActiveModal}
          closeOnOverlayClick={closeOnOverlayClick}
          handleRegister={handleRegisterSubmit}
        />

        <LoginModal
          isOpen={activeModal === "login"}
          closeActiveModal={closeActiveModal}
          closeOnOverlayClick={closeOnOverlayClick}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
