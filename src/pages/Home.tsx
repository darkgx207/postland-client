import { Feed } from "../components/feed/Feed"
import { NewPostCard } from "../components/newPostCard/NewPostCard"
import "./styles/HomeStyles.css"

export function Home() {
    return (
        <div className="home-container">
            <NewPostCard />
            <Feed style={{marginTop: "1.5rem"}}/>
        </div>
    )
}