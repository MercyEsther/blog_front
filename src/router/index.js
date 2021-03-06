import config from "../config.js";
import vue from "vue";
import Router from "vue-router";
import App from "../App";
import Home from "../pages/home/Home";
import localStore from "../store/localStore.js";
const Projects  = () => import("../pages/projects/Projects");
const BackendLogin = () => import("../pages/login/Login");
const Backend = () => import("../pages/backend/Common");
const BackendPosts = () => import("../pages/backend/children/Posts");
const BackendProjects = () => import("../pages/backend/children/Projects");
const BackendResource = () => import("../pages/backend/children/Resource");
const BackendUsers = () => import("../pages/backend/children/Users");
const BackendDesign = () => import("../pages/backend/children/Design");
const Posts = () => import("../pages/post/Posts");
const Post = () => import("../pages/post/Post");
const Designs = () => import("../pages/design/Designs");
const Design = () => import("../pages/design/Design");

vue.use(Router);

/**
 * Routes Mapping
 */

const routes = [
    {
        path: "/",
        name: "app",
        component: App,
        children: [{
            path: "",
            redirect: "home"
        },{
            path: "home",
            name: "home",
            component: Home
        },{
            path: "projects",
            name: "projects",
            component: Projects
        },{
            path: "posts",
            name: "posts",
            component: Posts,
        },{
            path: "post/:id",
            name: "post",
            component: Post,
        },{
            path: "designs",
            name: "designs",
            component: Designs
        },{
            path: "design/:id",
            name: "design",
            component: Design
        },{
            path: "login",
            name: "backendLogin",
            component: BackendLogin
        },{
            path: "backend",
            name: "backend",
            component: Backend,
            children: [
                {
                    path: "",
                    redirect: {name: "backendPosts"}
                },
                {
                    path: "posts",
                    name: "backendPosts",
                    component: BackendPosts
                },{
                    path: "projects",
                    name: "backendProjects",
                    component: BackendProjects
                },{
                    path: "resource",
                    name: "backendResource",
                    component: BackendResource
                },{
                    path: "users",
                    name: "backendUsers",
                    component: BackendUsers
                },{
                    path: "design",
                    name: "backendDesign",
                    component: BackendDesign
                }
            ]
        }]
    }
]

/**
 * new Router
 */

const vueRouter = new Router({
    mode: config.routerMode,
    bash: __dirname,
    routes,
})

/**
 * check Login status
 */

vueRouter.beforeResolve((to, from, next) => {
    const nextRoute = [
        "backendProject",
        "backendDesign",
        "backendResource",
        "backendPosts",
        "backendUsers",
    ];
    const isLogin = localStore.getStore("isLogin");
    if(nextRoute.indexOf(to.name) >= 0){
        // 登陆了
        if(isLogin.isLogin){
            console.log("登陆了");
            next();
        }
        else{
        // 未登陆
            console.log("为登陆");
            next("/login");
        }
    }
    else{
        next();
    }
    console.log("beforeEach", to.name);
})

export default vueRouter;