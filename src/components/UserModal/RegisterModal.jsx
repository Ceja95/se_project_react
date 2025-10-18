import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, closeOnOverlayClick, closeActiveModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (isOpen) {
            setEmail("");
            setPassword("");
            setName("");
            setImageUrl("");
            setWeather("");
        }
    }, [isOpen]);

    return (
        <ModalWithForm
            buttonText="Next"
            title="Sign Up"
            isOpen={isOpen}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
        >

            <label htmlFor="email" className="modal__label">
                Email*
                <input
                    type="email"
                    id="email"
                    className="modal__input"
                    placeholder="Email"
                    value={email}
                />
            </label>

            <label htmlFor="password" className="modal__label">
                Password*
                <input
                    type="password"
                    id="password"
                    className="modal__input"
                    placeholder="Password"
                    value={password}
                />
            </label>

            <label htmlFor="name" className="modal__label">
                Name
                <input
                    type="text"
                    id="name"
                    className="modal__input"
                    placeholder="Name"
                    value={name}
                />
            </label>

            <label htmlFor="imageUrl" className="modal__label">
                Image
                <input
                    type="url"
                    id="imageUrl"
                    className="modal__input"
                    placeholder="Image Url"
                    value={imageUrl}
                />
            </label>
        </ModalWithForm>
    )
}

export default RegisterModal;