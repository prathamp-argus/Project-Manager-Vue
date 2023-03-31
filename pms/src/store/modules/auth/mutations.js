export default {
    setUser(state, payload) {
        // console.log(payload)
        state.userId = payload.userId;
        // state.didLogout = false
        state.token = payload.token
      },
      didLogout(state) {
        state.didLogout = true
      },

}