export const state = () => ({
  pageIndex: 1
}
)

export const mutations = {
  add(state, paylod) {
    state.pageIndex = paylod.count
  },
  remove(state) {
    state.pageIndex = 0
  }
}

export const actions = {
  async add2({ commit }, paylod) {
    await commit('add', paylod)
  },
  actionA({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('add')
        resolve()
        tes
      }, 1000)
    }).then((error) => {
      console.log(error)
    })
  }
}
