import { useEffect, useState } from "react";
import "./Feed.css"
import { PostCard } from "../postCard/PostCard";
import { Post } from "../../types/post";
import { PostService } from "../../services/PostService";

interface FeedProps {
    style?: React.CSSProperties;
}

export function Feed(props: FeedProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    
    const fetch = () =>  setInterval( async () => {
        const posts = await PostService.fetchAllPosts();
        setPosts(posts);
    },3000);

    useEffect(() => {fetch()},[]);



    if (!posts.length) return ( 
        <div className="feed-container" style={props.style}>
            <PostCard />
        </div> 
    );

    return (
        <div className="feed-container" style={props.style}>
            {posts.map((post) => (
                <PostCard post={post}/>
            ))}
        </div>
    );


}