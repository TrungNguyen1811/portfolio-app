import { takeEvery, call, put } from 'redux-saga/effects'
import { message } from 'antd'

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

import { PORTFOLIO_API_ITEM } from '@/services/portfolio'

function* getPortfolioItem(action) {
  try {
    const { item } = yield call(PORTFOLIO_API_ITEM.getByType, action.payload)
    yield put(getPortfolioItemSuccess(item))
  } catch (error) {
    yield put(getPortfolioItemFailure(error?.message))
    message.error(error?.message)
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
    if (callback) yield call(callback)
    message.success(messageResponse)
  } catch (error) {
    yield put(addPortfolioItemFailure(error?.message))
    message.error(error?.message)
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
    if (callback) yield call(callback)
    message.success(messageResponse)
  } catch (error) {
    yield put(updatePortfolioItemFailure(error.message))
    message.error(error?.message)
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
    if (callback) yield call(callback)
    message.success(messageResponse)
  } catch (error) {
    yield put(deletePortfolioItemFailure(error?.message))
    message.error(error?.message)
  }
}

export default function* portfolioItemManageSaga() {
  yield takeEvery(getPortfolioItemRequest.type, getPortfolioItem)
  yield takeEvery(addPortfolioItemRequest.type, addPortfolioItem)
  yield takeEvery(updatePortfolioItemRequest.type, updatePortfolioItem)
  yield takeEvery(deletePortfolioItemRequest.type, deletePortfolioItem)
}
