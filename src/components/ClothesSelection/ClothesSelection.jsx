import { defaultClothingItems } from "../../utils/constants";
import "./ClothesSelection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSelection({handleCardClick}) {
    return (
        <div className="clothes-selection">
          
            <span className="clothes-selection__header">Your Items</span>
            <button type="button" className="clothes-selection__add-button">+ Add New Clothing</button>
                <ul className="clothes-selection__list">
          {defaultClothingItems
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleCardClick={handleCardClick}
                />
              );
            })}
        </ul>
            </div>
    )
}

export default ClothesSelection;