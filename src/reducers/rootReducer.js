import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import simpleReducer from './simpleReducer'

export default combineReducers({
  home: simpleReducer,
  form: formReducer,
})
