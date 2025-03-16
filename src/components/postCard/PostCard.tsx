import { ReactNode } from "react"
import style from "./PostCard.module.css"
import { Loading } from "../loading/Loading";
import { Post } from "../../types/post";
import img from "../../assets/user-profile-icon.svg"

interface PostCardProps {
    children?: ReactNode;
    post?: Post
}


export function PostCard(props: PostCardProps) {

    if (!props.post) return (
        <div className={style.emptyPostCardContainer}>
            <Loading />
        </div>
    )
    
    return (
        <div className={style.postcardContainer}>
            <div className={style.postHeader}>
                <div className={style.userCard}> {/* Imagem / nome usuario */}
                    <img src={img} style={{ borderRadius: "100%", width: "50px", height: "50px" }}/>
                    <p>{props.post.owner.slice(0,90)}</p>
                </div>  
                <p style={{textAlign: "center"}}><b>{props.post.title}</b></p>
            </div>
            <div className={style.postBody}>
                {props.post.content}
            </div>
        </div>
    )
}