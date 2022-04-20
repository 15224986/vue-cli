import {
    setSidebarOpened,
    getSidebarOpened
} from '@/utils/auth'



const state = {
    sidebar: {
        opened: getSidebarOpened()
    }
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
        setSidebarOpened(state.sidebar.opened)
    }
}

const actions = {
    toggleSideBar({commit}) {
        commit('TOGGLE_SIDEBAR')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
