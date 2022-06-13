const state = {
    get_done: true
}
const mutations = {
    GET_DONE(state) {
        console.log(111)
        state.get_done = !state.get_done // true 与 false 之间的切换
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

