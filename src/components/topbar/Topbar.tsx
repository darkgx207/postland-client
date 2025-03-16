import { useState } from "react"
import "./Topbar.css"

export function TopBar() {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <nav className="container">
                <div className="left-inner-container">
                    <div style={{gap: "1rem", display: "flex"}}>
                        <span className={selected == 1 ? "selected link":"link"} onClick={() => setSelected(1)}>HOME</span>
                        <span className={selected == 2 ? "selected link":"link"} onClick={() => setSelected(2)}>MY POSTS</span>
                    </div>
                </div>

                <span
                    className={selected == 3 ? "selected link":"link"} onClick={() => setSelected(3)}
                    style={{margin: "2rem"}}
                >
                    PROFILE
                </span>
            </nav>
        </>
    )
}