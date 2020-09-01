import React,{Component} from 'react'
import Header from '../../components/header'
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import './login.scss'
class Login extends Component{
    render(){
        return (
            <div className="P-login">
                <Header/>
                <h1>Login page</h1>
                <p>login:myData={this.props.myData}</p>
                <button onClick={()=>{this.props.setData('123456')}}>更改login的myData</button>
                <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
            </div>
        )
    }
    gotoHome(){
        this.props.history.push('/home')
    }
    
}
    //把store中的数据映射到组件的props，通过props进行访问，store中数据的变化会直接改变props从而触发组件的视图更新
    const mapStateToProps=(state)=>({
        myData:state.getIn(['login','myData'])    
    })
    //把store的Dispatch映射到组件的props
    const mapDispatchToProps=(dispatch)=>({
        setData(data){
            const action=actionCreators.setData(data)
            dispatch(action)
        }
    })
export default connect(mapStateToProps,mapDispatchToProps)(Login)