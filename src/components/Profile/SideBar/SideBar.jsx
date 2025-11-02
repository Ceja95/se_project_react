import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../../../Context/CurrentUserContext";

import { checkToken } from "../../../utils/auth";

import "./SideBar.css";

function SideBar({ editProfileClick, logoutClick }) {
    const user = useContext(CurrentUserContext);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("jwt");

        if (token.length > 0) {
            setLoggedIn(true);
        }
    })

    return (
        <div className="sidebar">
            <div className="sidebar__profile-info">
                <img className="sidebar__avatar" src={user.avatar} alt="" />
                <h1 className="sidebar__username">{user.name}</h1>
            </div>
            <div className="sidebar__profile-properties">

                {loggedIn && <button onClick={editProfileClick} className="sidebar__edit-profile-button" type="button">Edit Profile</button>}

                {loggedIn && <button onClick={logoutClick} className="sidebar__logout-button" type="button">Log Out</button>}

            </div>
        </div>
    );
}

export default SideBar;