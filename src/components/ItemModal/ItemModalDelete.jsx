import "./ItemModalDelete.css";

const ItemModalDelete = ({ isOpen, closeActiveModal, handleDeleteItem, itemId }) => {
   const deleteModalClassName = isOpen ? 'modal modal__delete modal_opened' : 'modal modal__delete';
 
    return (
        <div className={deleteModalClassName}>
            <div className="modal__content modal__content_type_delete">
                <button onClick={closeActiveModal} type="button" className="modal__close modal__close_type_delete"></button>
                <p className="modal__delete-title">Are you sure you want to delete this item?
                    <br />
                    This action is irreversible.</p>
                <button type="button" onClick={() => handleDeleteItem(itemId)} className="modal__delete-button">Yes, delete item</button>
                <button type="button" onClick={closeActiveModal} className="modal__delete-button modal__delete-button_cancel">Cancel</button>
            </div>
        </div>
    );
}

export default ItemModalDelete;