import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function Logout({ isOpen, closeActiveModal, closeOnOverlayClick, handleLogoutUser }) {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleLogout = (e) => {
        e.preventDefault();
        handleLogoutUser();

        setName("");
        setAvatar("");
        window.location.reload();
    };

    

    return (
        <ModalWithForm
            id="logout-modal"
            buttonText="Logout"
            isOpen={isOpen}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleSubmit={handleLogout}
        >


            <div className="logout-modal">
                <h2 className="logout-modal__title">Are you sure you want to log out?</h2>
            </div>
        </ModalWithForm >
    );
}

export default Logout;