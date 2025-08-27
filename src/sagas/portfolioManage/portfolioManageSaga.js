import { takeEvery, call, put } from 'redux-saga/effects'
import { message } from 'antd'

import {
  getPortfolioRequest,
  getPortfolioSuccess,
  getPortfolioFailure,
  updatePortfolioRequest,
  updatePortfolioSuccess,
  updatePortfolioFailure,
} from './portfolioManageSlice'

import PORTFOLIO_API from '@/services/portfolio'

function* handleGetPortfolioInfo() {
  try {
    const { portfolio } = yield call(PORTFOLIO_API.get)
    yield put(getPortfolioSuccess(portfolio))
  } catch (error) {
    yield put(getPortfolioFailure(error.message))
  }
}

function* handleUpdatePortfolio(action) {
  try {
    const { portfolio, message: messageResponse } = yield call(
      PORTFOLIO_API.put,
      {
        ...action.payload,
      }
    )
    yield put(updatePortfolioSuccess(portfolio))
    message.success(messageResponse)
  } catch (error) {
    yield put(updatePortfolioFailure(error.message))
    message.success(error?.message)
  }
}

export default function* portfolioManageSaga() {
  yield takeEvery(getPortfolioRequest.type, handleGetPortfolioInfo)
  yield takeEvery(updatePortfolioRequest.type, handleUpdatePortfolio)
}
