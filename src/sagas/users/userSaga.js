import { takeEvery, call, put } from 'redux-saga/effects'

import {
  registerRequest,
  registerSuccess,
  registerFailure,
  signInSuccess,
  signInFailure,
  signInRequest,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  updatePublicPortfolioRequest,
  updatePublicPortfolioSuccess,
  updatePublicPortfolioFailure,
} from './userSlice'

import USERS_API from '@/services/users'
import AUTH_API from '@/services/auth'

function* handleRegister(action) {
  try {
    const { values, callback } = action.payload
    const newUser = yield call(AUTH_API.postRegister, values)

    yield put(registerSuccess(newUser))

    if (callback) {
      yield call(callback)
    }
  } catch (error) {
    yield put(registerFailure(error.message))
  }
}

function* handleSignIn(action) {
  try {
    const { values, callback } = action.payload

    const data = yield call(AUTH_API.postLogin, values)

    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    yield put(signInSuccess(data.user))
    if (callback) {
      yield call(callback)
    }
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

function* handleUpdateUser(action) {
  try {
    const { values, callback } = action.payload

    const user = yield call(USER_API.put, values)
    yield put(updateUserSuccess(user))
  } catch (error) {
    yield put(updateUserFailure(error.message))
  }
}

function* handlePublicPortfolio(action) {
  try {
    const { values, callback } = action.payload
    const data = yield call(USERS_API.putPublicPortfolio, values)
    yield put(updatePublicPortfolioSuccess(data))
  } catch (error) {
    yield put(updatePublicPortfolioFailure(data))
  }
}

export default function* userSaga() {
  yield takeEvery(registerRequest.type, handleRegister)
  yield takeEvery(signInRequest.type, handleSignIn)
  yield takeEvery(updateUserRequest.type, handleUpdateUser)
  yield takeEvery(updatePublicPortfolioRequest.type, handlePublicPortfolio)
}
