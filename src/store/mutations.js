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
     * set designs
     * 
     * @param {object} state 
     * @param {object} designs 
     */
    SET_DESIGNS(state,designs){
        state.designs = designs;
    },

    /**
     * 
     * @param {*} state 
     * @param {*} post 
     */
    SET_CURPOST(state,post){
        state.curPost = post;
        localStore.setStore("curPost", post);
    },

    /**
     * set curDesign
     * 
     * @param {string} state 
     * @param {object} design 
     */
    SET_CURDESIGN(state,design){
        state.curDesign = design;
    }

}