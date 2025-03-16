import { CreatePost } from "../types/createPost";
import { Post } from "../types/post";

export class PostService {

    static async fetchAllPosts() {
        const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi perspiciatis ipsam molestias magni, nam ducimus minus, iste corporis, esse doloribus? A accusamus rem quisquam voluptatibus modi illum obcaecati exercitationem.";
        const posts: Post[] = [
            { title: "Titulo 1", content: lorem, owner: "fulano 1" },
            { title: "Titulo 2", content: lorem, owner: "fulano 2" },
            { title: "Titulo 3", content: lorem, owner: "fulano 3" },
            { title: "Titulo 4", content: lorem, owner: "fulano 4" },
            { title: "Titulo 5", content: lorem, owner: "fulano 5" },
            { title: "Titulo 6", content: lorem, owner: "fulano 6" },
        ];
        return posts;
    }
    
    static async createPost(post: CreatePost) { }
}

