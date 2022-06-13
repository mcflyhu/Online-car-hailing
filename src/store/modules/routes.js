const state = {
    walking: true,
    driving: true
}
const mutations = {
    SET_WALKING(state) {
        state.walking = !state.walking // true 与 false 之间的切换
    },
    SET_DRIVING(state) {
        state.driving = !state.driving // true 与 false 之间的切换
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

