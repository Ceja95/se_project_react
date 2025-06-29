import "./ItemModalDelete.css";

const ItemModalDelete = ({ isOpen, closeActiveModal, handleDeleteItem }) => {
    return (
        <div className={`modal ${isOpen && "modal_opened"}`}>
            <div className="modal__content modal__content_type_delete">
            <button onClick={closeActiveModal} type="button" className="modal__close modal__close_type_delete"></button>
            <h2 className="modal__delete-title">Delete Item</h2>
            <p className="modal__delete-text">Are you sure you want to delete this item?</p>
            <button type="submit" onClick={handleDeleteItem} className="modal__delete-button">Delete</button>
            <button type="submit" onClick={closeActiveModal} className="modal__delete-button">Cancel</button>
            </div>
        </div>
    );
}

export default ItemModalDelete;