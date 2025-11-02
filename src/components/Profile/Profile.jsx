import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({handleCardClick, handleDeleteItem, clothingItems, handleAddClick, currentUser, editProfileClick, logoutClick }) {
    return (
        <div className="profile">
            <SideBar editProfileClick={editProfileClick} logoutClick={logoutClick} />     
            <ClothesSection handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} handleAddClick={handleAddClick} currentUser={currentUser} />
        </div>
    );
}

export default Profile;