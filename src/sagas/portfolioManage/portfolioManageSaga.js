import { takeEvery, call, put } from 'redux-saga/effects'

import {
  getPortfolioRequest,
  getPortfolioSuccess,
  getPortfolioFailure,
  updatePortfolioRequest,
  updatePortfolioSuccess,
  updatePortfolioFailure,
} from './portfolioManageSlice'
import { showMessage } from '../appMessage/appMessageSlice'

import { PORTFOLIO_API } from '@/services/portfolio'

function* handleGetPortfolioInfo() {
  try {
    const { portfolio } = yield call(PORTFOLIO_API.get)
    yield put(getPortfolioSuccess(portfolio))
  } catch (error) {
    yield put(getPortfolioFailure(error.message))
    yield put(showMessage.error(error?.message))
  }
}

function* handleUpdatePortfolio(action) {
  try {
    const { portfolio, message: messageResponse } = yield call(
      PORTFOLIO_API.put,
      action.payload
    )
    yield put(updatePortfolioSuccess(portfolio))
    yield put(showMessage.success(messageResponse))
  } catch (error) {
    yield put(updatePortfolioFailure(error?.message))
    yield put(showMessage.error(error?.message))
  }
}

export default function* portfolioManageSaga() {
  yield takeEvery(getPortfolioRequest.type, handleGetPortfolioInfo)
  yield takeEvery(updatePortfolioRequest.type, handleUpdatePortfolio)
}
