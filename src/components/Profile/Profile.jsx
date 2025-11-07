import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({handleCardClick, handleCardLike, handleDeleteItem, clothingItems, handleAddClick, editProfileClick, logoutClick, currentUser }) {
  
    return (
        <div className="profile">
            <SideBar editProfileClick={editProfileClick} logoutClick={logoutClick} />     
            <ClothesSection handleCardLike={handleCardLike} handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} handleAddClick={handleAddClick} currentUser={currentUser} />
        </div>
    );
}

export default Profile;