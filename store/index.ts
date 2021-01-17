import { ActionTree, MutationTree } from 'vuex';
import { ReturnType } from './return-type';

type StateReturn = {
  message: string;
  error: object | string;
};

export const state = (): StateReturn => {
  return {
    message: '',
    error: ''
  };
};

export type State = ReturnType<typeof state>;

export const mutations: MutationTree<State> = {
  SET_MESSAGE: (state, message: string) => state.message = message,
  SET_ERROR: (state, error: object | string) => state.error = error
};

export const actions: ActionTree<State, State> = {
  flushError({ commit }) {
    commit('SET_ERROR', null);
  },
  flushMessage({ commit }) {
    commit('SET_MESSAGE', null);
  },
  goTo(_object, route) {
    const path = this.app.localePath(route);
    this.$router.push(path);
  }
};
