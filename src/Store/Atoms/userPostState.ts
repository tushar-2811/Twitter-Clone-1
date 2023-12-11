import { atom } from "recoil";

interface Post {
    id : string;
    body?: string;
    userId: number;
    likedIds: [],
    user: {
        id: string;
        name: string;
        username: string;
        bio?: string;
        email: string;
        image?: string;
        coverImage?: string;
        profileImage?: string;
        hashedPassword: string;
        followingIds: [],
        hasNotification?: boolean
    },
    comments: []
}

export const userPostState = atom<Post[]>({
    key : "userPostState",
    default : []
})