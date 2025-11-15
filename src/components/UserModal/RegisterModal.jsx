import { useEffect, useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, closeOnOverlayClick, closeActiveModal, handleRegister, onButtonNoteClick }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleImage = (e) => {
        e.preventDefault();
        setImageUrl(e.target.value);
    };

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        handleRegister({ name, imageUrl, email, password });
    };

    useEffect(() => {
        if (isOpen) {
            setEmail("");
            setPassword("");
            setName("");
            setImageUrl("");
        }
    }, [isOpen]);

    return (
        <ModalWithForm
            id="register-modal"
            buttonText="Sign Up"
            buttonNote="or Log In"
            title="Sign Up"
            isOpen={isOpen}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleSubmit={handleRegisterSubmit}
            onButtonNoteClick={onButtonNoteClick}
        >

            <label className="modal__label">
                Email*
                <input
                    type="email"
                    id="register-email"
                    className="modal__input"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    required
                />
            </label>

            <label className="modal__label">
                Password*
                <input
                    type="password"
                    id="register-password"
                    className="modal__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    required
                />
            </label>

            <label className="modal__label">
                Name*
                <input
                    type="text"
                    id="register-name"
                    className="modal__input"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                    required
                />
            </label>

            <label className="modal__label">
                Avatar Image*
                <input
                    type="url"
                    id="imageUrl"
                    className="modal__input"
                    placeholder="Image Url"
                    value={imageUrl}
                    onChange={handleImage}
                    required
                />
            </label>
        </ModalWithForm>
    )
}

export default RegisterModal;