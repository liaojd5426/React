import {combineReducers} from 'redux-immutable'
/*引入login和header的store*/
import {reducer as loginReaducer} from '../pages/login/store'
import {reducer as headerReducer} from '../components/header/store'
/*然后通过combineReducers合并在一起，并分别加上唯一的对象key值*/
const reducer = combineReducers({
    login: loginReaducer,
    header: headerReducer
})
/*
    好处： 1.避免各组件的store数据互相污染
           2.组件独立维护自己的store，减少维护成本
*/
export default reducer