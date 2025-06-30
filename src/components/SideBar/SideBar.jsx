import avatar from "../../images/avatar.png";
import "./SideBar.css";

function SideBar() {

    return (

        <div className="sidebar">
                <img className="sidebar__avatar" src={avatar} alt="User Avatar" />
                <h1 className="sidebar__username">Terrence Tegegne</h1>
        </div>
    )
}

export default SideBar;