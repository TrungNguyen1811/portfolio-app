import { combineReducers } from 'redux'
import appMessageReducer from '@/sagas/appMessage/appMessageSlice'
import userReducer from '@/sagas/users/userSlice'
import portfoliosReducer from '@/sagas/portfolios/portfolioSlice'
import portfolioReducer from '@/sagas/portfolioManage/portfolioManageSlice'
import portfolioItemManageReducer from '@/sagas/portfolioItemManage/portfolioItemManageSlice'

const rootReducer = combineReducers({
  appMessage: appMessageReducer,
  user: userReducer,
  portfolioManage: portfolioReducer,
  portfolioItemManage: portfolioItemManageReducer,
  portfolios: portfoliosReducer,
})

export default rootReducer
