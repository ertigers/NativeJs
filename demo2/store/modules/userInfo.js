const state = {
    ts_fy_enterpriseList: [],
}

const getters = {}

const mutations = {
    ts_fy_enterpriseList(state, payload) {
        let {
            ts_fy_enterpriseList
        } = payload;
        state.ts_fy_enterpriseList = ts_fy_enterpriseList;
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