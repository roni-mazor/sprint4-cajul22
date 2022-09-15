// const { createStore, applyMiddleware, combineReducers, compose } = Redux
// const thunk = ReduxThunk.default
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'


import { boardReducer } from './board.reducer';

const rootReducer = combineReducers({
    boardModule: boardReducer,

})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.gStore = store

// export const store = createStore(rootReducer, applyMiddleware(thunk))

// store.subscribe(() => {
//    console.log('store.getState():', store.getState())
// })
