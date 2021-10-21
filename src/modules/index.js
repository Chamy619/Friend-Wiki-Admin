import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import users, { usersSaga } from './users';
import genealogy, { genealogySaga } from './genealogy';
import header from './header';

const rootReducer = combineReducers({ loading, auth, user, header, users, genealogy });

export function* rootSaga() {
  yield all([authSaga(), userSaga(), usersSaga(), genealogySaga()]);
}

export default rootReducer;
