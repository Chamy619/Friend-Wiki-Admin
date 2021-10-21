import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as genealogyAPI from '../lib/api/genealogy';

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes('genealogy/LIST');
const INITIAL_FORM = 'genealogy/INITIAL_FORM';
const CHANGE_FIELD = 'genealogy/CHANGE_FIELD';
const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createRequestActionTypes('genealogy/WRITE');
const [SET_FORM, SET_FORM_SUCCESS, SET_FORM_FAILURE] = createRequestActionTypes('genealogy/SET_FORM');
const [UPDATE, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes('genealogy/UPDATE');
const [REMOVE_KING, REMOVE_KING_SUCCESS, REMOVE_KING_FAILURE] = createRequestActionTypes('genealogy/REMOVE_KING');

export const list = () => ({ type: LIST });
export const initialForm = () => ({ type: INITIAL_FORM });
export const changeField = ({ name, value }) => ({ type: CHANGE_FIELD, payload: { name, value } });
export const write = ({ name, date, description }) => ({ type: WRITE, payload: { name, date, description } });
export const setForm = (id) => ({ type: SET_FORM, payload: id });
export const update = ({ id, name, date, description }) => ({ type: UPDATE, payload: { id, name, date, description } });
export const removeKing = (id) => ({ type: REMOVE_KING, payload: id });

const listSaga = createRequestSaga(LIST, genealogyAPI.list);
const writeSaga = createRequestSaga(WRITE, genealogyAPI.write);
const setFormSaga = createRequestSaga(SET_FORM, genealogyAPI.read);
const updateSaga = createRequestSaga(UPDATE, genealogyAPI.update);
const removeKingSaga = createRequestSaga(REMOVE_KING, genealogyAPI.remove);

export function* genealogySaga() {
  yield takeLatest(LIST, listSaga);
  yield takeLatest(WRITE, writeSaga);
  yield takeLatest(SET_FORM, setFormSaga);
  yield takeLatest(UPDATE, updateSaga);
  yield takeLatest(REMOVE_KING, removeKingSaga);
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
    case SET_FORM_SUCCESS:
      return { ...state, form: { ...action.payload } };
    case SET_FORM_FAILURE:
      return { ...state, error: action.payload };
    case UPDATE_SUCCESS:
      return state;
    case UPDATE_FAILURE:
      return { ...state, error: action.payload };
    case REMOVE_KING_SUCCESS:
      return state;
    case REMOVE_KING_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
