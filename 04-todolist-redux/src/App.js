

import React,{ Component } from 'react'

import {
    getAddItem,
    getChangeItem,
    getDelItem,
    getLocalItem,
    getRequestInitDataAction
} from "./store/creatCategory.js"

import AppUI from './AppUI.js'

//引入redux
import store from './store'

//引入axios
import axios from 'axios'

//容器组件
class App extends Component{
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDel = this.handleDel.bind(this)

        this.state = store.getState()
        store.subscribe(() => { this.setState(store.getState()) })
    }
    componentDidMount(){
        //发送ajax请求
        store.dispatch(getRequestInitDataAction())
        /*
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            store.dispatch(getLocalItem(result))
        })
        .catch(err=>{
            console.log(err)
        })
        */
    }

    handleAdd() {
        /*
        const action = {
            type:ADD_ITEM
        }
        store.dispatch(action)
        */
       store.dispatch(getAddItem())
    }

    handleChange(ev) {
        const task = ev.target.value
        /*
        const action = {
            type: CHANGE_ITEM,
            payload: task
        }
        store.dispatch(action)
        */
       store.dispatch(getChangeItem(task))
    }

    handleDel(index) {
        /*
       const action = {
            type: DEL_ITEM,
            payload: index        
       }
       store.dispatch(action)
       */
      store.dispatch(getDelItem(index))
    } 

    render(){
        return( 
            <AppUI 
                task={this.state.task}
                list={this.state.list} 
                handleChange={this.handleChange}
                handleDel={this.handleDel}
                handleAdd={this.handleAdd}
            />
        )             
    }
}

export default App