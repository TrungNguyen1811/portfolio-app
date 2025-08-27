import { all } from 'redux-saga/effects'
import userSaga from '../sagas/users/userSaga'
import portfolioManageSaga from '@/sagas/portfolioManage/portfolioManageSaga'

// Root saga
function* rootSaga() {
  yield all([userSaga(), portfolioManageSaga()])
}

export default rootSaga
