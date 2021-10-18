import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const INITIAL_FORM = 'auth/INITIAL_FORM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const initialForm = () => ({ type: INITIAL_FORM });
export const login = ({ username, password }) => ({ type: LOGIN, payload: { username, password } });

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  login: {
    username: null,
    password: null,
  },
  auth: null,
  loginError: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case INITIAL_FORM:
      return { ...initialState };
    case LOGIN_SUCCESS:
      return { ...initialState, auth: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}
