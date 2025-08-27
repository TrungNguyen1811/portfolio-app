import { all } from 'redux-saga/effects'
import userSaga from '../sagas/users/userSaga'
import portfoliosSaga from '../sagas/portfolios/portfoliosSaga'
import portfolioManageSaga from '@/sagas/portfolioManage/portfolioManageSaga'

// Root saga
function* rootSaga() {
  yield all([userSaga(), portfolioManageSaga(), portfoliosSaga()])
}

export default rootSaga

