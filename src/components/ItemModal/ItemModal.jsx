import "./ItemModal.css";

function ItemModal({ card, isOpen, closeActiveModal, openConfirmationModal }) {

    return (
        <div className={`modal ${isOpen && "modal_opened"}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={closeActiveModal} type="button" className="modal__close modal__close_type_image"></button>
                <img src={card.link} alt={card.name} className="modal__image" id="image-modal" />
                <div className="modal__footer">
                    <button type="button" onClick={openConfirmationModal} className="modal__delete-button">Delete Item</button>
                    <h2 className="modal__caption">{card.name}</h2>
                    <p className="modal__weather">Weather: {card.weather}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;