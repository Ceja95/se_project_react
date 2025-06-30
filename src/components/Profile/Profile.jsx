import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSelection from "../ClothesSelection/ClothesSelection";

function Profile({handleCardClick, handleDeleteItem, clothingItems}) {
    return (
        <div className="profile">
            <SideBar />     
            <ClothesSelection handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem}  clothingItems={clothingItems} />
        </div>
    );
}

export default Profile;