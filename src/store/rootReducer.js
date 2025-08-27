import { combineReducers } from 'redux'
import userReducer from '@/sagas/users/userSlice'
import portfolioReducer from '@/sagas/portfolioManage/portfolioManageSlice'
const rootReducer = combineReducers({
  user: userReducer,
  portfolioManage: portfolioReducer,
})

export default rootReducer
