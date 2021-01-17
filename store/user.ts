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
  /*async fetchDepartmentsByCountry({ commit }, data) {
    try {
      const departmentList = (await axios.get(`${process.env.apiUrl}state/show_by_country/${data.countryId}`)).data;
      commit('SET_DEPARTMENTS', departmentList);

    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
  async fetchMunicipalitiesByDepartment({ commit }, data) {
    try {
      const municipalityList = (await axios.get(`${process.env.apiUrl}city/show_by_state/${data.stateId}`)).data;
      commit('SET_MUNICIPALITIES', municipalityList);
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
  async signup({ commit }, data) {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Access-Control-Allow-Credentials": "true"
      }
    };
    try {
      const signupResponse = await axios.post(
        `${process.env.apiUrl}client/signup`,
        {
          name: data.name,
	        last_name: data.lastName,
	        email: data.email,
	        birth_date: data.birthDate,
	        password: data.password,
	        password_confirmation: data.confirmationPassword,
	        phone: data.phoneNumber,
	        subscribe: data.suscribe,
	        gender_id: data.gender,
	        type_user_id: 1,
	        address: data.address,
	        city_id: data.cityId
        },
        config
      );

      return signupResponse.data;
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
  async singIn({ commit }, data){
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Access-Control-Allow-Credentials": "true"
      }
    };
    try {
      const loginResponse = await axios.post(
        `${process.env.apiUrl}/client/login`,
        {
          email: data.email,
          password: data.password
        },
        config
      );
      return loginResponse.data;
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  } */
};
