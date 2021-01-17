import { ActionTree, MutationTree } from 'vuex';
import { State as RootState } from './index';
import axios from 'axios';

import { ReturnType } from './return-type';

type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: string;
};

type StateReturn = {
  users: User[] | undefined;
};

export const state = (): StateReturn => {
  return {
    users: undefined
  };
};

export type State = ReturnType<typeof state>;

export const mutations: MutationTree<State> = {
  SET_USERS: (state, users: []) => state.users = users
};

export const actions: ActionTree<State, RootState> = {
  async fetchUsers({ commit }) {
    try {
      const users = (await axios.get(`${process.env.apiUrl}/users`)).data;
      commit('SET_USERS', users);

      return users;
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
  async fetchToDoByUser({ commit }, data) {
    try {
      const toDoList = (await axios.get(`${process.env.apiUrl}/todos?userId=${data.userId}`)).data;
      return toDoList;
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  }
};
