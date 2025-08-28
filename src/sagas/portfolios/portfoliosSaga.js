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
    const response = yield call(PORTFOLIO_API.getPublic, slug)
    yield put(fetchPortfoliosSuccess(response.portfolio))
  } catch (error) {
    yield put(fetchPortfoliosFailure(error.message))
  }
}

function* handleGetPortfolioItems(action) {
  try {
    const { slug, type } = action.payload
    const data = yield call(PORTFOLIO_API_ITEM.getPublic, slug, type)
    yield put(getPortfolioItemsSuccess(data.items))
  } catch (error) {
    yield put(getPortfolioItemsFailure(error.message))
  }
}

export default function* portfoliosSaga() {
  yield takeEvery(fetchPortfoliosRequest.type, handleFetchPortfolios)
  yield takeEvery(getPortfolioItemsRequest.type, handleGetPortfolioItems)
}
