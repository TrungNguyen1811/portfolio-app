import { all } from 'redux-saga/effects'
import userSaga from '../sagas/users/userSaga'
import portfoliosSaga from '../sagas/portfolios/portfoliosSaga'
import portfolioManageSaga from '@/sagas/portfolioManage/portfolioManageSaga'
import portfolioItemManageSaga from '@/sagas/portfolioItemManage/portfolioItemManageSaga'

// Root saga
function* rootSaga() {
  yield all([
    userSaga(),
    portfolioManageSaga(),
    portfoliosSaga(),
    portfolioItemManageSaga(),
  ])
}

export default rootSaga
