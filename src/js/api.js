import fetch from "./fetch.js";

export default {
    backendLogin: (data) => fetch("/backend/login", "POST", data),

    getPosts: (data) => fetch("/api/v1/posts", "GET", data),
    deletePost: (data) => fetch("/api/v1/post/delete", "GET", data),
    addPost: (data) => fetch("/api/v1/post/add", "GET", data),
    updatePost: (data) => fetch("/api/v1/post/update", "POST", data),
    backendSignout: (data) => fetch("/api/v1/backend/signout", "GET", data)
}