import "./ClothesSelection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSelection({ handleCardClick, handleDeleteItem, clothingItems, handleAddClick }) {
  return (
    <div className="clothes-selection">
      <div className="clothes-selection__header">
      <span className="clothes-selection__text">Your Items</span>
      <button onClick={handleAddClick} type="button" className="clothes-selection__add-button">+ Add New Clothing</button>
      </div>
      <ul className="clothes-selection__list">
        {clothingItems
          .map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                handleCardClick={handleCardClick}
                handleDeleteItem={handleDeleteItem}
              />
            );
          })}
      </ul>
    </div>
  )
}

export default ClothesSelection;