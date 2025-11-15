import { useContext } from "react";

import "./Profile.css";
import SideBar from "./SideBar/SideBar";
import ClothesSection from "./ClothesSection/ClothesSection";
import CurrentUserContext from "../../Context/CurrentUserContext";

function Profile({handleCardClick, handleCardLike, handleDeleteItem, clothingItems, handleAddClick, editProfileClick, logoutClick }) {
    const currentUser = useContext(CurrentUserContext);
  
    return (
        <div className="profile">
            <SideBar editProfileClick={editProfileClick} logoutClick={logoutClick} />     
            <ClothesSection handleCardLike={handleCardLike} handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} handleAddClick={handleAddClick} currentUser={currentUser} />
        </div>
    );
}

export default Profile;