import { auth } from '../plugins/firebase.js';

export const state = () => ({
  user: '',
});

export const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return !!state.user;
  }
};

export const mutations = {
  setUser(state, payload) {

    console.log(state.user, payload);

    let user = state.user;
    let updatedUser = payload;

    user = updatedUser;
  }
};

export const actions = {
  signUp({ commit }, { email, password }) {
    return auth.createUserWithEmailAndPassword(email, password);
  },
  signInWithEmail({ commit }, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password);
  },

  signOut({ commit }) {
    return auth.signOut()
      .then(() => {
        commit('setUser', null);
      });
  }
};
