import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import WTWR from "../../images/Logo.svg";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

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
            <Link to="/profile" className="header__profile-link">
                <div className="header__user-container">
                    <p className="header__username">Terrence Tegegne</p>
                    <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
                </div>
            </Link>
        </header>
    )
}

export default Header;