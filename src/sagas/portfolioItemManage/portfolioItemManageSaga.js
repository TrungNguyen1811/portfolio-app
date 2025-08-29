import { takeEvery, call, put } from 'redux-saga/effects'

import {
  getPortfolioItemRequest,
  getPortfolioItemSuccess,
  getPortfolioItemFailure,
  addPortfolioItemSuccess,
  addPortfolioItemFailure,
  addPortfolioItemRequest,
  updatePortfolioItemSuccess,
  updatePortfolioItemFailure,
  updatePortfolioItemRequest,
  deletePortfolioItemSuccess,
  deletePortfolioItemFailure,
  deletePortfolioItemRequest,
} from './portfolioItemManageSlice'
import { showMessage } from '../appMessage/appMessageSlice'

import { PORTFOLIO_API_ITEM } from '@/services/portfolio'

function* getPortfolioItem(action) {
  try {
    const { item } = yield call(PORTFOLIO_API_ITEM.getByType, action.payload)
    yield put(getPortfolioItemSuccess(item))
  } catch (error) {
    yield put(getPortfolioItemFailure(error?.message))
    yield put(showMessage.error(error?.message))
  }
}

function* addPortfolioItem(action) {
  try {
    const { values, callback } = action.payload
    const { item, message: messageResponse } = yield call(
      PORTFOLIO_API_ITEM.post,
      values
    )
    yield put(addPortfolioItemSuccess(item))
    yield put(showMessage.success(messageResponse))
    if (callback) {
      yield call(callback)
    }
  } catch (error) {
    yield put(addPortfolioItemFailure(error?.message))
    yield put(showMessage.error(error?.message))
  }
}

function* updatePortfolioItem(action) {
  try {
    const { values, callback } = action.payload
    const { portfolio, message: messageResponse } = yield call(
      PORTFOLIO_API_ITEM.put,
      values
    )
    yield put(updatePortfolioItemSuccess(portfolio))
    yield put(showMessage.success(messageResponse))
    if (callback) {
      yield call(callback)
    }
  } catch (error) {
    yield put(updatePortfolioItemFailure(error.message))
    yield put(showMessage.error(error?.message))
  }
}

function* deletePortfolioItem(action) {
  try {
    const { id, callback } = action.payload
    const { message: messageResponse } = yield call(
      PORTFOLIO_API_ITEM.delete,
      id
    )
    yield put(deletePortfolioItemSuccess(id))
    yield put(showMessage.success(messageResponse))
    if (callback) {
      yield call(callback)
    }
  } catch (error) {
    yield put(deletePortfolioItemFailure(error?.message))
    yield put(showMessage.error(error?.message))
  }
}

export default function* portfolioItemManageSaga() {
  yield takeEvery(getPortfolioItemRequest.type, getPortfolioItem)
  yield takeEvery(addPortfolioItemRequest.type, addPortfolioItem)
  yield takeEvery(updatePortfolioItemRequest.type, updatePortfolioItem)
  yield takeEvery(deletePortfolioItemRequest.type, deletePortfolioItem)
}
