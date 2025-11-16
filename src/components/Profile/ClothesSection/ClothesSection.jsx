import "./ClothesSection.css";
import ItemCard from "../../ItemCard/ItemCard";

function ClothesSection({ handleCardClick, handleDeleteItem, clothingItems, handleAddClick, currentUser, handleCardLike }) {
  const currentUserItems = clothingItems.filter((item) => item.owner === currentUser._id);

  return (
    <div className="clothes-selection">
      <div className="clothes-selection__header">
        <span className="clothes-selection__text">Your Items</span>
        <button onClick={handleAddClick} type="button" className="clothes-selection__add-button">+ Add New Clothing</button>
      </div>
      <ul className="clothes-selection__list">
        {currentUserItems
          ?.map((item) => {
            return (
              <ItemCard
                key={item?._id}
                item={item}
                handleCardClick={handleCardClick}
                handleDeleteItem={handleDeleteItem}
                handleCardLike={handleCardLike}
                isLoggedIn={true}
              />
            );
          })}
      </ul>
    </div>
  )
}

export default ClothesSection;