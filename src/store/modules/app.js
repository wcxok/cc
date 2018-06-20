import {merge} from 'lodash'

const LAYOUT = 'LAYOUT'

const state = {
  layout: {
    loading: true,
    header: true,
    navigation: true,
    miniNavigation: false,
    breadcrumb: null,
    search: false,
    footer: true,
    miniFeed: false,
    containerOverlay: false,
    containerOverlayWithTop: false
  }
}
const mutations = {
  [LAYOUT] (state, payload) {
    merge(state.layout, payload)
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
