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
import getErrorMessage from '@/utils/getMessage'

function* handleRegister(action) {
  const { values, callback } = action.payload
  try {
    const data = yield call(AUTH_API.postRegister, values)
    yield put(registerSuccess(data.user))
    callback?.({ success: true, messageResponse: data.message })
  } catch (error) {
    const errorMessage = getErrorMessage(error, 'Register failed')
    yield put(registerFailure(errorMessage))
    callback?.({ success: false, messageResponse: errorMessage })
  }
}

function* handleSignIn(action) {
  const { values, callback } = action.payload
  try {
    const data = yield call(AUTH_API.postLogin, values)
    localStorage.setItem('user', JSON.stringify(data.user))
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    yield put(signInSuccess(data.user))
    callback?.({ success: true, messageResponse: data.message })
  } catch (error) {
    const errorMessage = getErrorMessage(error, 'Login failed')
    yield put(signInFailure(errorMessage))
    callback?.({ success: false, messageResponse: errorMessage })
  }
}

function* handleUpdateUser(action) {
  const { values, callback } = action.payload
  try {
    const data = yield call(USERS_API.put, values)
    yield put(updateUserSuccess(data.user))
    callback?.({ success: true, messageResponse: data.message })
  } catch (error) {
    const errorMessage = getErrorMessage(error, 'Update user failed')
    yield put(updateUserFailure(errorMessage))
    callback?.({ success: false, messageResponse: errorMessage })
  }
}

function* handlePublicPortfolio(action) {
  const { value, callback } = action.payload
  try {
    const res = yield call(USERS_API.putPublicPortfolio, value)
    yield put(updatePublicPortfolioSuccess(value))
    callback?.({ success: true, messageResponse: res.message })
  } catch (error) {
    const errorMessage = getErrorMessage(error, 'Set update status failed')
    yield put(updatePublicPortfolioFailure(errorMessage))
    callback?.({ success: false, messageResponse: errorMessage })
  }
}

export default function* userSaga() {
  yield takeEvery(registerRequest.type, handleRegister)
  yield takeEvery(signInRequest.type, handleSignIn)
  yield takeEvery(updateUserRequest.type, handleUpdateUser)
  yield takeEvery(updatePublicPortfolioRequest.type, handlePublicPortfolio)
}
