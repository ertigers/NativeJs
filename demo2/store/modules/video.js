const state = {
    currentWindow: 0,
    MenuWindow: 0,
    videoList: [],
    loading: false
}

const getters = {}

const mutations = {
    // 当前选中的窗口索引
    setCurrentWindow(state, payload) {
        let {
            index
        } = payload;
        state.currentWindow = index;
    },
    // 右击的窗口索引
    setMenuWindow(state, payload) {
        let {
            index
        } = payload;
        state.MenuWindow = index;
    },
    //当前在播放的视频
    videoList(state, payload) {
        let {
            videoList
        } = payload;
        state.videoList = videoList;
    },
    //是否正在加载视频
    loading(state, payload) {
        let {
            loading
        } = payload;
        state.loading = loading;
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