import "./Topbar.css"
import { NavLink } from "react-router-dom";

export function TopBar() {

    return (
        <nav className="container">
            <div className="left-inner-container">
                <div style={{gap: "1rem", display: "flex"}}>
                    <NavLink to="/" className={({isActive}) => isActive ? "selected link": "link"} >HOME</NavLink>
                    <NavLink to="/my-posts" className={({isActive}) => isActive ? "selected link": "link"} >MY POSTS</NavLink>
                </div>
            </div>

            <NavLink to="/profile" style={{margin: '3rem'}} className={({isActive}) => isActive ? "selected link": "link"} >PROFILE</NavLink>
        </nav>
    )
}