import { createStore, combineReducers, applyMiddleware } from 'redux'
import { countriesReducer } from '../reducers/countriesReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    countriesData: countriesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))