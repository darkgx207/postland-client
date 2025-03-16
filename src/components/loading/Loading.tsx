import { IoIosSync } from "react-icons/io";
import "./loading.css";


export function Loading() {
    return(
        <div className="loading-container">
            <IoIosSync className="loading"/>
            <div className="loading-text">Loading...</div>
        </div>
    )
}

