import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({ isOpen, closeActiveModal, closeOnOverlayClick, currentUser, handleUpdateUser }) {
    const [name, setName] = useState(currentUser?.name || "");
    const [imageUrl, setImageUrl] = useState(currentUser?.avatar || "");
    
    const handleName = (e) => {
        e.preventDefault();

        setName(e.target.value);
    };

    const handleImage = (e) => {
        e.preventDefault();

        setImageUrl(e.target.value);
    };

    const handleEditProfileSubmit = (e) => {
        e.preventDefault();

        handleUpdateUser({
            name,
            avatar: imageUrl,
        });
    };

    useEffect(() => {
        if (isOpen) {
            setName(currentUser?.name || "");
            setImageUrl(currentUser?.avatar || "");
        }
    }, [isOpen]);

    return (
        <ModalWithForm
            id="edit-profile-modal"
            buttonText="Save Changes"
            title="Change profile data"
            isOpen={isOpen}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleSubmit={handleEditProfileSubmit}
        >

            <label htmlFor="name" className="modal__label">
                Name*
                <input
                    type="text"
                    id="edit-profile-name"
                    className="modal__input"
                    placeholder="Name"
                    value={name}
                    onChange={handleName}
                    required
                />
            </label>

            <label htmlFor="imageUrl" className="modal__label">
                Avatar Image*
                <input
                    type="url"
                    id="edit-profile-imageUrl"
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

export default EditProfileModal;