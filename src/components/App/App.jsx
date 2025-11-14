import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
import { getItems, createNewItem, deleteItem, addCardLike, removeCardLike } from "../../utils/api";
import RegisterModal from "../UserModal/RegisterModal";
import LoginModal from "../UserModal/LoginModal";
import { register, login, checkToken, updateUser } from "../../utils/auth";
import EditProfileModal from "../EditProfile/EditProfileModal";
import LogOutModal from "../UserModal/LogOutModal";

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
  const [isLiked, setIsLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  const navigate = useNavigate();


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

  const editProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const loginClick = () => {
    setActiveModal("login");
  };

  const logoutClick = () => {
    setActiveModal("logout");
  };

  const onLoginButtonNoteCLick = () => {
    setActiveModal("login");
  };

  const onRegisterButtonNoteClick = () => {
    setActiveModal("register");
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

  const handleCardLike = (_id, isLiked) => {

    !isLiked
      ?
      addCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => item._id === _id ? updatedCard : item))
        })
        .then(() => {
          setIsLiked(true);
        })
        .catch((err) => {
          console.error(err);
        })
      :
      removeCardLike(_id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => item._id === _id ? updatedCard : item))
        })
        .then(() => {
          setIsLiked(false);
        })
        .catch((err) => {
          console.error(err);
        });
  };

  const handleAddItemSubmit = (item) => {

    createNewItem(item, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Failed to create new item:", error);
      });
  };

  const handleRegisterSubmit = ({ name, imageUrl, password, email }) => {
    const registration = {
      name,
      avatar: imageUrl,
      password,
      email,
    };

    register(registration)
      .then(() => {
        return login({ email, password });
      })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        closeActiveModal();
        return checkToken(data.token);
      })
      .catch((err) => {
        console.error("Registration or login failed:", err);
      });
  };

  const handleUpdateUser = (userData) => {
    const user = {
      name: userData.name,
      avatar: userData.avatar,
    };

    updateUser(user, token)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to update user:", err);
      });
  };

  const openConfirmationModal = () => {
    setActiveModal("delete-item");
  };

  const handleDeleteItem = (_id) => {
    deleteItem(_id, token)
      .then(() => {
        setClothingItems((prev) => prev.filter((card) => card._id !== _id));
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLoginSubmit = ({ email, password }) => {

    login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setToken(data.token);
        checkToken(data.token)
          .then((currentUser) => {
            setCurrentUser(currentUser);
            setIsLoggedIn(true);
          });
        return data;
      })
      .then(() => {
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  }

  const handleLogoutUser = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/login");
    closeActiveModal();
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
      })
      .catch(console.error);
    const token = localStorage.getItem("jwt");
    setToken(token);
      checkToken(token)
        .then((currentUser) => {
          setCurrentUser(currentUser);
          setIsLoggedIn(true);
        })
        .catch(console.error);
  }, []);

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div onClick={closeOnOverlayClick} className="page">
        <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
          <div className="page__content">
            <Header currentUser={currentUser} handleAddClick={handleAddClick} registerClick={registerClick} loginClick={loginClick} weatherData={weatherData} />

            <Routes>
              <Route path="/" element={<Main weatherData={weatherData} handleCardClick={handleCardClick} clothingItems={clothingItems} handleCardLike={handleCardLike} currentUser={currentUser} />} />
              <Route path="/profile" element={isLoggedIn ? (<Profile handleCardClick={handleCardClick} handleCardLike={handleCardLike} handleDeleteItem={handleDeleteItem} clothingItems={clothingItems} handleAddClick={handleAddClick} editProfileClick={editProfileClick} logoutClick={logoutClick} currentUser={currentUser} />) : (<Navigate to="/login" replace />)} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
          </div>

          {isLoggedIn && <AddItemModal
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            isOpen={activeModal === "add-garment"}
            onHandleAddItemSubmit={handleAddItemSubmit}
          />}

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
            onButtonNoteClick={loginClick}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleLoginSubmit={handleLoginSubmit}
            onButtonNoteClick={registerClick}
          />

          <LogOutModal
            isOpen={activeModal === "logout"}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleLogoutUser={handleLogoutUser}
          />

          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleUpdateUser={handleUpdateUser}
            currentUser={currentUser}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
