import "../ModalWithForm/ModalWithForm.css";
import "./ItemModal.css";

function ItemModal({ card, isOpen, closeActiveModal, openConfirmationModal, selectedCard, currentUser }) {
    const isOwn = selectedCard.owner === currentUser._id;

    const itemDeleteButtonClassName = (
        `modal-delete__button ${isOwn ? "" : "modal-delete__button_hidden"}`
    );

    return (
        <div className={`modal ${isOpen && "modal_opened"}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={closeActiveModal} type="button" className="modal__close modal__close_type_image"></button>
                <img src={card.link || card.imageUrl} alt={card.name} className="modal__image" id="image-modal" />
                <div className="modal__footer">
                    <div className="modal__details">
                        <h2 className="modal__caption">{card.name}</h2>
                        <p className="modal__weather">Weather: {card.weather}</p>
                    </div>
                    <button type="button" onClick={openConfirmationModal} className={itemDeleteButtonClassName} >Delete Item</button>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;