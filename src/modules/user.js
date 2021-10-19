import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

export const tempSetUser = (user) => ({ type: TEMP_SET_USER, payload: user });
export const check = () => ({ type: CHECK });

const checkSaga = createRequestSaga(CHECK, authAPI.check);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case TEMP_SET_USER:
      return { ...initialState, user: action.payload };
    case CHECK_SUCCESS:
      return { ...initialState, user: action.payload };
    case CHECK_FAILURE:
      return { ...initialState, checkError: action.payload };
    default:
      return state;
  }
}
