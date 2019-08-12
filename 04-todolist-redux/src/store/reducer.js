

import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM,LOCAL_ITEM} from "./creatType.js"

//保存初始化的数据
const defaultState = {
    list:["吃饭","睡觉","敲代码"],
    task:''
}

export default (state=defaultState,action)=>{
    
    if(action.type == CHANGE_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.task = action.payload
        return newState
    }
    if(action.type == ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.task)
        newState.task = ''
        return newState
    }
    if(action.type == DEL_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.payload,1)
        return newState        
    }
    if(action.type == LOCAL_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.payload
        return newState        
    }
    return state
}