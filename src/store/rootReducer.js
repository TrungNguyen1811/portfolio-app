import { combineReducers } from 'redux'
import userReducer from '@/sagas/users/userSlice'

const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer
