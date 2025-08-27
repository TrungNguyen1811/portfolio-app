import { combineReducers } from 'redux'
import userReducer from '@/sagas/users/userSlice'
import portfoliosReducer from '@/sagas/portfolios/portfolioSlice'
import portfolioReducer from '@/sagas/portfolioManage/portfolioManageSlice'

const rootReducer = combineReducers({
  user: userReducer,
  portfolioManage: portfolioReducer,
  portfolios: portfoliosReducer,
})

export default rootReducer

