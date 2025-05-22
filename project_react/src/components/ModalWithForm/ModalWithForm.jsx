import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, onClose }) {
  const modalCloseBtn = document.querySelector(".modal__close");
  const weatherModalClose = modalCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
  });

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close"></button>
        <form className="modal__form">
          {children}
          <button type="button" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
