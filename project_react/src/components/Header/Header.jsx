import "./Header.css";
import WTWR from "../../images/Logo.svg";
import avatar from "../../images/avatar.png";

function Header() {
        const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
        /*const openClothesModal = !ModalWithForm!.addEventListener("id/class?")*/

        return (
            <header className="header">
                <img className="header__logo" src={WTWR} alt="weather logo" />
                <p className="header__date-and-location">{currentDate}, Location</p>
                <button className="header__add-clothes-btn">+Add clothes</button>
                <div className="header__user-container">
                    <p className="header__username">Terrence Tegegne</p>
                    <img className="header__avatar" src={avatar} alt="Terrence Tegegne" />
                </div>
            </header>
        )
}

export default Header;