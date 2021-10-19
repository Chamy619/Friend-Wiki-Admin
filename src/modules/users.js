import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as usersAPI from '../lib/api/users';

const [FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE] = createRequestActionTypes('users/FETCH_LIST');
const [DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE] = createRequestActionTypes('user/DELETE_USER');

export const fetchList = () => ({ type: FETCH_LIST });
export const deleteUser = (username) => ({ type: DELETE_USER, payload: { username } });

const fetchListSaga = createRequestSaga(FETCH_LIST, usersAPI.fetchList);
const deleteUserSaga = createRequestSaga(DELETE_USER, usersAPI.deleteUser);

export function* usersSaga() {
  yield takeLatest(FETCH_LIST, fetchListSaga);
  yield takeLatest(DELETE_USER, deleteUserSaga);
}

const initialState = {
  list: null,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return { ...initialState, list: action.payload };
    case FETCH_LIST_FAILURE:
      return { ...initialState, error: action.payload };
    case DELETE_USER_FAILURE:
      return { ...state, error: action.payload };
    case DELETE_USER_SUCCESS:
    default:
      return state;
  }
}
