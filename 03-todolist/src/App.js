

import React,{ Component } from 'react'
import Item from './Item.js'

import { DatePicker } from 'antd'

import { Button } from 'antd'

import "./App.css"

class App extends Component{
    constructor(props){
        console.log('App constructor...')
        super(props)
        this.state = {
            list:["吃饭"],
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }



    handleAdd(){
        this.setState((preState)=>({
            list:[...preState.list,preState.task],
            task:''
        }),()=>{
            console.log('2::',this.ul.childNodes) 
        })
        console.log('1::',this.ul.childNodes)       
    }

    handleChange(ev){
      const task = this.input.value
      this.setState(()=>({
         task:task
      }))
    }

    handleDel(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState(()=>({
            list
        }))
    }

    getItems(){
        return this.state.list.map((item,index)=>{
          return <Item 
                      key={index} 
                      task={item} 
                      handleDel={this.handleDel.bind(this,index)} 
                  />
        })        
    }
    
    render(){
        return( 
        <div className="App">
            <input 
                onChange={ this.handleChange } 
                value={ this.state.task }
                ref={(input)=>{ this.input = input }} 
            />
            <Button type="primary" onClick={ this.handleAdd }>提交</Button>
            <ul ref={(ul)=>{ this.ul = ul }}>
                {
                    this.getItems()
                }
            </ul>
            <DatePicker />
        </div> 
        )             
    }
}

export default App