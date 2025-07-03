import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({handleCardClick, handleDeleteItem, clothingItems, handleAddClick}) {
    return (
        <div className="profile">
            <SideBar />     
            <ClothesSection handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} handleAddClick={handleAddClick} />
        </div>
    );
}

export default Profile;