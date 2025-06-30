import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSelection from "../ClothesSelection/ClothesSelection";

function Profile({handleCardClick, handleDeleteItem}) {
    return (
        <div className="profile">
            <SideBar />     
            <ClothesSelection handleCardClick={handleCardClick} handleDeleteItem={handleDeleteItem} />
        </div>
    );
}

export default Profile;