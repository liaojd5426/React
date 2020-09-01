import React,{Fragment} from 'react'
import Home from './pages/home'
import Login from './pages/login'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
//引入样式
import './App.scss'

function App(){
    return (
        <Fragment>
            <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route exact path='/' component={Home}/>
                    <Redirect to={'/home'}/>
                </Switch>
            </HashRouter>
        </Fragment>
    )
}

// class App extends React.Component{
//     render() {
//         return (
//            <Fragment>
//                 <div className="container">
//                     <h1>从零搭建基于Webpack的React环境</h1>
//                 </div>
//                 <div className="box">
//                     <h2>react要求每个组件HTML的最外层必须是由一个标签包裹，且不能存在并列的标签，需要使用一个父级标签来包裹</h2>
//                     <p>如果不想添加父级标签，使用Fragment去掉组件外层标签</p>
//                 </div>
//            </Fragment>
//          )
//      }
// }
export default App