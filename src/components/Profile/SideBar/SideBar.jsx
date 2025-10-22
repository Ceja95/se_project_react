import { useContext } from "react";
import CurrentUserContext from "../../../Context/CurrentUserContext";

import "./SideBar.css";

function SideBar() {
    const user = useContext(CurrentUserContext);

    return (

        <div className="sidebar">
                <img className="sidebar__avatar" src={user.avatar} alt="" />
                <h1 className="sidebar__username">{user.name}</h1>
                </div>
    );
}

export default SideBar;