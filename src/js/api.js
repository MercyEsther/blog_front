import fetch from "./fetch.js";

export default {
    backendLogin: (data) => fetch("//huangyh.site/backend/login", "POST", data),

    getPosts: (data) => fetch("//huangyh.site/api/v1/posts", "GET", data),
    deletePost: (data) => fetch("//huangyh.site/api/v1/post/delete", "GET", data),
    addPost: (data) => fetch("//huangyh.site/api/v1/post/add", "GET", data),
    updatePost: (data) => fetch("//huangyh.site/api/v1/post/update", "POST", data),
    backendSignout: (data) => fetch("//huangyh.site/api/v1/backend/signout", "GET", data)
}