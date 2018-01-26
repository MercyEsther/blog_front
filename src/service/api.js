import fetch from "./fetch.js";
import config from "../config.js";

/**
 * choice host base on config.env
 */

var host = config.env == "dev" ? "//localhost:3000" : "";

export default {

    backendLogin: (data) => fetch(`${host}/backend/login`, "POST", data),
    
    getPosts: (data) => fetch(`${host}/api/v1/posts`, "GET", data),

    deletePost: (data) => fetch(`${host}/api/v1/post/delete`, "GET", data),

    addPost: (data) => fetch(`${host}/api/v1/post/add`, "GET", data),

    updatePost: (data) => fetch(`${host}/api/v1/post/update`, "POST", data),

    backendSignout: (data) => fetch(`${host}/api/v1/backend/signout`, "GET", data)
}