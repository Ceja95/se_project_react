import "./ItemModalDelete.css";

const ItemModalDelete = ({ isOpen, closeActiveModal, handleDeleteItem, itemId }) => {
    return (
        <div className={`modal modal__delete ${isOpen && "modal_opened"}`}>
            <div className="modal__content modal__content_type_delete">
                <button onClick={closeActiveModal} type="button" className="modal__close modal__close_type_delete"></button>
                <p className="modal__delete-title">Are you sure you want to delete this item?
                    <br />
                    This action is irreversible.</p>
                <button type="submit" onClick={() => handleDeleteItem(itemId)} className="modal__delete-button">Yes, delete item</button>
                <button type="submit" onClick={closeActiveModal} className="modal__delete-button modal__delete-button_cancel">Cancel</button>
            </div>
        </div>
    );
}

export default ItemModalDelete;