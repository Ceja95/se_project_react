import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSelection from "../ClothesSelection/ClothesSelection";

function Profile({handleCardClick, handleDeleteItem, clothingItems, handleAddClick}) {
    return (
        <div className="profile">
            <SideBar />     
            <ClothesSelection handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} handleAddClick={handleAddClick} />
        </div>
    );
}

export default Profile;