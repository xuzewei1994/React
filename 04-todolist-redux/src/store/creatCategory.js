 
import axios from 'axios'
import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM,LOCAL_ITEM,LOAD_DATA} from "./creatType.js"

export const getAddItem = () =>({
	 type:ADD_ITEM
})

export const getChangeItem = (task) =>({
	  type: CHANGE_ITEM,
      payload: task
})

export const getDelItem = (index)=>({
	  type: DEL_ITEM,
      payload: index  
})

export const getLocalItem = (payload)=>{
	type:LOCAL_ITEM,
	payload
}

export const getLoadInitDataAction = (payload)=>({
    type:LOAD_DATA,
    payload
})

export const getRequestInitDataAction = ()=>{
    return (dispatch,getState)=>{
        axios.get('http://127.0.0.1:3000')
        .then(result=>{
            dispatch(getLoadInitDataAction(result.data))
        })
        .catch(err=>{
            console.log(err)
        })        
    }
}