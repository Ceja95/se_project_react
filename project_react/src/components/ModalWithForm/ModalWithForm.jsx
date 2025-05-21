import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close">
        </button>
        <form className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              id="name"
              className="modal__input"
              placeholder="Name"
            />
          </label>

          <label htmlFor="imageUrl" className="modal__label">
            Image
            <input
              type="url"
              id="imageUrl"
              className="modal__input"
              placeholder="Image Url"
            />
          </label>

          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" id="hot" className="modal__radio-input" />
              Hot
            </label>

            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" id="warm" className="modal__radio-input" />
              Warm
            </label>

            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" id="cold" className="modal__radio-input" />
              Cold
            </label>
          </fieldset>

          <button type="button" className="modal__submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

//Left of on tripleten project part 9 Refactoring...>

export default ModalWithForm;
