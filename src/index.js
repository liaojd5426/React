import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
    HashRouter,
    BrowserRouter
} from 'react-router-dom'
//引入react-redux提供的Provider
import {Provider} from 'react-redux'
import store from './store'
import './common/style/frame.scss'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter:HashRouter

ReactDOM.render(
  //把整个store传给整个App,在需要使用store的组件中，要使用react-redux提供的connect方法对组件进行包装
  <Provider store={store}>
       <Router>
        < App/>
       </Router>
  </Provider>,
    document.querySelector('#app')
)