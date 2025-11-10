import { useEffect, useState } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, closeActiveModal, closeOnOverlayClick, handleLoginSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        handleLoginSubmit({ email, password });
    };

    useEffect(() => {
        if (isOpen) {
            setEmail("");
            setPassword("");
        }
    }, [isOpen]);

    return (
        <ModalWithForm
            id="login-modal"
            buttonText="Log In"
            buttonNote="or Sign Up"
            title="Log In"
            isOpen={isOpen}
            handleSubmit={handleLogin}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
        >

            <label htmlFor="email" className="modal__label">
                Email
                <input
                    type="email"
                    id="login-email"
                    className="modal__input"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    required
                />
            </label>

            <label htmlFor="password" className="modal__label">
                Password
                <input
                    type="password"
                    id="login-password"
                    className="modal__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    required
                />
            </label>
        </ModalWithForm>
    )
}

export default LoginModal;