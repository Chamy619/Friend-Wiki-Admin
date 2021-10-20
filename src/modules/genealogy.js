import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as genealogyAPI from '../lib/api/genealogy';

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes('genealogy/LIST');

export const list = () => ({ type: LIST });

const listSaga = createRequestSaga(LIST, genealogyAPI.list);

export function* genealogySaga() {
  yield takeLatest(LIST, listSaga);
}

const initialState = {
  list: null,
  error: null,
};

export default function genealogy(state = initialState, action) {
  switch (action.type) {
    case LIST_SUCCESS:
      return { ...state, list: action.payload, error: null };
    case LIST_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
