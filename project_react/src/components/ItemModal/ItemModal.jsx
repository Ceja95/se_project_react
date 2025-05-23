import "./ItemModal.css"

function ItemModal({ activeModal, card, closeActiveModal }) {
    return (
        <div activeModal={activeModal} className={`modal ${ activeModal === "preview" && "modal_opened"}`} id="item-modal">
            <div className="modal__content modal__content_type_image">
                  <button  onClick={closeActiveModal} type="button" className="modal__close"></button>
                  <img src="" alt="" className="modal__image" id="image-modal" />
            </div>
        </div>
    )
}

export default ItemModal;