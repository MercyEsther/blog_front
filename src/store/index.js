import mutations from "./mutations.js";
import state from "./state.js";
import vue from "vue";
import vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

vue.use(vuex);

export default new vuex.Store({
    state,
    mutations,
    plugins: [createPersistedState()]
})