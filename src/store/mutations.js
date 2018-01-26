import localStore from "./localStore.js";

export default {
    
    SET_LOGIN(state,isLogin){
        state.isLogin = isLogin;
        localStore.setStore("isLogin", {isLogin: isLogin});
    }

}