import { useContext } from "react";
import CurrentUserContext from "../../../Context/CurrentUserContext";

import "./SideBar.css";

function SideBar({ editProfileClick }) {
    const user = useContext(CurrentUserContext);

    return (

        <div className="sidebar">
            <div className="sidebar__profile-info">
            <img className="sidebar__avatar" src={user.avatar} alt="" />
            <h1 className="sidebar__username">{user.name}</h1>
            </div>
            <div className="sidebar__profile-properties">
                <button onClick={editProfileClick} className="sidebar__edit-profile-button" type="button">Edit Profile</button>
                <button className="sidebar__logout-button" type="button">Log Out</button>
            </div>
        </div>
    );
}

export default SideBar;