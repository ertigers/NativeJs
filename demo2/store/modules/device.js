const state = {
    deviceArry: [],
    videoArry: []
}

const getters = {}

const mutations = {

    deviceArry(state, payload) {
        let {
            deviceArry
        } = payload;
        state.deviceArry = deviceArry;
    },
    videoArry(state, payload) {
        let {
            videoArry
        } = payload;
        state.videoArry = videoArry;
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