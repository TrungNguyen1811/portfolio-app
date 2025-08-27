import { call, put, takeEvery } from 'redux-saga/effects'
import {
  fetchPortfoliosRequest,
  fetchPortfoliosSuccess,
  fetchPortfoliosFailure,
  getPortfolioItemsRequest,
  getPortfolioItemsSuccess,
  getPortfolioItemsFailure,
} from './portfolioSlice'

import { PORTFOLIO_API, PORTFOLIO_API_ITEM } from '@/services/portfolio'

function* handleFetchPortfolios(action) {
  try {
    const slug = action.payload

    const portfolios = yield call(PORTFOLIO_API.getPublic, slug)
    console.log('Fetched portfolios:', portfolios)
    yield put(fetchPortfoliosSuccess(portfolios))
  } catch (error) {
    yield put(fetchPortfoliosFailure(error.message))
  }
}

function* handleGetPortfolioItems(action) {
  try {
    const { item } = yield call(PORTFOLIO_API_ITEM.getPublic, action.payload)
    yield put(getPortfolioItemsSuccess(item))
  } catch (error) {
    yield put(getPortfolioItemsFailure(error.message))
  }
}

export default function* portfoliosSaga() {
  yield takeEvery(fetchPortfoliosRequest.type, handleFetchPortfolios)
  yield takeEvery(getPortfolioItemsRequest.type, handleGetPortfolioItems)
}
