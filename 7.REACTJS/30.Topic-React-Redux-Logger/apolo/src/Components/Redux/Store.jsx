import {createStore , applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger'
import { CakeReducer } from './Cake/CakeReducer'

const store = createStore(CakeReducer , composeWithDevTools(applyMiddleware(logger)))

export default store