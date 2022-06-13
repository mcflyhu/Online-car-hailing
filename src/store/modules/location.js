const state = {
    selfLocation: true,
    myLocation: null
}
const mutations = {
    SELF_LOCATION(state) {
        state.selfLocation = !state.selfLocation // true 与 false 之间的切换
    },
    SET_LOCATION(state, location) {
        state.myLocation = location
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

