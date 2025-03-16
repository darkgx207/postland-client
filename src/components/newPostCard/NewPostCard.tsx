import "./NewPostCard.css"
import { useState } from "react"
import { CreatePost } from "../../types/createPost";
import { PostService } from "../../services/PostService";



export function NewPostCard() {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const clear = () => { setTitle(""); setContent("") };

    const publish = async () => {
        const body: CreatePost = {content, title};
        await PostService.createPost(body);
    }

    return (
        <div className="newpostcard-container">
            <input 
                type="text" 
                style={{margin: "0 1rem", padding: "0.3rem 1rem"}} 
                placeholder="Type the title here" 
                value={title}
                onChange={(value) => setTitle(value.target.value)}
            />
            <textarea 
                name="post-content" 
                id="post-content" 
                placeholder="Type your post content here" 
                value={content}
                onChange={(value) => setContent(value.target.value)}
                maxLength={5000}
            />
            <div style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                <div style={{display: "flex", justifyContent: "flex-end", gap: "0.5rem", padding: "1rem"}}>
                    <button>PUBLISH</button>
                    <button className="red" onClick={clear}>CLEAR</button>
                </div>
            </div>
        </div>
    )
}