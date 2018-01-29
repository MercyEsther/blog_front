import localStore from "./localStore.js";

export default {
    
    /**
     * set login state
     * 
     * @param {*} state 
     * @param {*} isLogin 
     */
    SET_LOGIN(state,isLogin){
        state.isLogin = isLogin;
        localStore.setStore("isLogin", {isLogin: isLogin});
    },

    /**
     * 
     * @param {*} state 
     * @param {*} posts 
     */
    SET_POSTS(state,posts){
        posts.forEach((item,index) => {
            state.posts.push(item);
        })
    },

    /**
     * 
     * @param {*} state 
     * @param {*} post 
     */
    SET_CURPOST(state,post){
        state.curPost = post;
        localStore.setStore("curPost", post);
    }

}