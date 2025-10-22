import {useContext} from "react";
import CurrentUserContext from "../../Context/CurrentUserContext";

import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import WTWR from "../../images/Logo.svg";
import { Link } from "react-router-dom";

function Header({ handleAddClick, registerClick, loginClick, weatherData }) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    const user = useContext(CurrentUserContext);

    return (
        <header className="header">
            
            <Link to="/" className="header__logo-link">
                <img className="header__logo" src={WTWR} alt="weather logo" />
            </Link>

            <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
            <div className="header__controls">
                <ToggleSwitch />
                <button onClick={handleAddClick} type="button" className="header__add-clothes-btn"> + Add clothes</button>
            </div>
            <button onClick={registerClick} className="header__register">Sign Up</button>
            <button onClick={loginClick} className="header__login">Sign In</button>
            <Link to="/profile" className="header__profile-link">
                <div className="header__user-container">
                    <p className="header__username">{user.name}</p>
                    <img className="header__avatar" src={user.avatar} alt="" />
                </div>
            </Link>
        </header>
    )
}

export default Header;