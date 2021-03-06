import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//让项目支持浏览器拆件Redux DevTools
 const composeEnhancers=typeof window==='object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer=composeEnhancers(
    applyMiddleware(thunk)
)
const store=createStore(
    reducer,
    enhancer
)
export default store