import { combineReducers } from 'redux'
import userReducer from '@/sagas/users/userSlice'
import portfoliosReducer from '@/sagas/portfolios/portfolioSlice'
import portfolioReducer from '@/sagas/portfolioManage/portfolioManageSlice'
import portfolioItemManageReducer from '@/sagas/portfolioItemManage/portfolioItemManageSlice'

const rootReducer = combineReducers({
  user: userReducer,
  portfolioManage: portfolioReducer,
  portfolioItemManage: portfolioItemManageReducer,
  portfolios: portfoliosReducer,
})

export default rootReducer
