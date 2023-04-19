const state = {
    login: true,
}

const getters = {}

const mutations = {
    // 当前选中的窗口索引
    login(state, payload) {
        let {
            login
        } = payload;
        state.login = login;
    },

}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}