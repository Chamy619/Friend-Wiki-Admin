import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as genealogyAPI from '../lib/api/genealogy';

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes('genealogy/LIST');
const INITIAL_FORM = 'genealogy/INITIAL_FORM';
const CHANGE_FIELD = 'genealogy/CHANGE_FIELD';
const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes('genealogy/WRITE');

export const list = () => ({ type: LIST });
export const initialForm = () => ({ type: INITIAL_FORM });
export const changeField = ({ name, value }) => ({ type: CHANGE_FIELD, payload: { name, value } });
export const write = ({ name, date, description }) => ({ type: WRITE, payload: { name, date, description } });

const listSaga = createRequestSaga(LIST, genealogyAPI.list);
const writeSaga = createRequestSaga(WRITE, genealogyAPI.write);

export function* genealogySaga() {
  yield takeLatest(LIST, listSaga);
  yield takeLatest(WRITE, writeSaga);
}

const initialState = {
  list: null,
  error: null,
  form: {
    name: '',
    date: '',
    description: '',
  },
};

export default function genealogy(state = initialState, action) {
  switch (action.type) {
    case LIST_SUCCESS:
      return { ...state, list: action.payload, error: null };
    case LIST_FAILURE:
      return { ...state, error: action.payload };
    case INITIAL_FORM:
      return { ...state, form: { ...initialState.form } };
    case CHANGE_FIELD:
      return { ...state, form: { ...state.form, [action.payload.name]: action.payload.value } };
    case WRITE_SUCCESS:
      return state;
    case WRITE_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
