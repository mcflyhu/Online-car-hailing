const state = {
    showInfo: true
}
const mutations = {
    SHOW_INFO(state) {
        state.showInfo = !state.showInfo // true 与 false 之间的切换
    }
}
const actions = {}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

