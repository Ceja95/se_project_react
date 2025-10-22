import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, isOpen, closeActiveModal, handleSubmit, id, buttonNote }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div id={id} className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button  onClick={closeActiveModal} type="button" className="modal__close"></button>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}

          <div className="modal__actions">
            <button type="submit" className="modal__submit" disabled={true}>
              {buttonText}
            </button>
            {buttonNote && <div className="modal__button-note">{buttonNote}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;