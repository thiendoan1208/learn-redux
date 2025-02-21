import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_SUCCESS,
} from './types';
import axios from 'axios';

// Fetch data
export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      const res = await axios.get('http://localhost:8080/users/all');
      const data = res && res.data ? res.data : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserError());
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
    payload: 'Error',
  };
};

// Create user
export const createUser = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUserRequest());
    try {
      let res = await axios.post('http://localhost:8080/users/create', { email, password, username });
      console.log(res, res.data);
      if (res && res.data.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      dispatch(createUserError());
    }
  };
};

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserError = () => {
  return {
    type: CREATE_USER_ERROR,
  };
};

// Delete user
export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await axios.post(`http://localhost:8080/users/delete/${id}`);
      if (res && res.data.errCode === 0) {
        if (res && res.data.errCode === 0) {
          dispatch(deleteUserSuccess());
          dispatch(fetchAllUser());
        }
      }
    } catch (error) {

    }
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};
