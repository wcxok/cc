const TMP_INCREASE = 'TMP_INCREASE'

const state = {
  count: 0
}

const mutations = {
  [TMP_INCREASE] (state) {
    state.count++
  }
}

const actions = {
  [TMP_INCREASE] ({commit, dispatch}) {
    return commit('TMP_INCREASE')
  }
}

export default {
  state,
  actions,
  mutations
}
