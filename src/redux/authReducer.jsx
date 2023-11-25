// authReducer.js

import { SET_USER, SET_TOKEN, CLEAR_USER, CLEAR_TOKEN } from './authActions';

const initialState = {
  user: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    case CLEAR_TOKEN:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default authReducer;
