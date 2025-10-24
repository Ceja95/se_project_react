import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({handleCardClick, handleDeleteItem, clothingItems, handleAddClick, currentUser, editProfileClick }) {
    return (
        <div className="profile">
            <SideBar editProfileClick={editProfileClick} />     
            <ClothesSection handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} handleAddClick={handleAddClick} currentUser={currentUser} />
        </div>
    );
}

export default Profile;