import React,{Component} from 'react'
//import AddTodo from '../container/AddTodo'

class TodoList extends React.Component{

    changeCheck(index){
        this.props.onCheck(index)
    }

    delete(index){
        this.props.onDelete(index)
    }

    render(){
        const text=this.props.text.addTodoReducer
       // console.log('hh')
        console.log(text)
        //const totoList=[];
        const todoList = text.map((todo, index) => {
            return <div key={index}>
                <input type="checkbox" checked={todo.completed ?'checked':'' } onChange={this.changeCheck.bind(this,index)}/>
                <span>{todo.value}</span>
                <input type="button" value="delete" onClick={this.delete.bind(this,index)}/>
            </div>
        });
        return(
            <div>
                {todoList}
            </div>
        )


    }
}

export default TodoList