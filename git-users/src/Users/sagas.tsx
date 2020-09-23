
import { put, takeLatest, all, call } from 'redux-saga/effects'
import {actions, GET_USERS, GET_USER} from './actions';



const baseUrl = 'https://api.github.com';

function getUsersRequest() {
  return fetch(`${baseUrl}/users`)
  .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function getUserRequest(login: string) {
  return fetch(`${baseUrl}/users/${login}`)
  .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function* onGetUsers() {
  yield put(actions.getUsersPending());
  const { response, error } = yield call(getUsersRequest)
  if (response)
    yield put(actions.getUsersSuccess(response))
  else
    yield put(actions.getUsersError(error))
}

function* onGetUser(action: any) {
  yield put(actions.getUsersPending());
  const { response, error } = yield call(getUserRequest, action.login)
  if (response)
    yield put(actions.getUserSuccess(response))
  else
    yield put(actions.getUserError(error))
}


export function* getUsers() {
    yield takeLatest(GET_USERS, onGetUsers)
}
export function* getUser() {
  yield takeLatest(GET_USER, onGetUser)
}

export default function* rootSaga() {
  yield all([
    getUsers(),
    getUser(),
  ])
}