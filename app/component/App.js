import React, {Component} from 'react'
import AddTodo from "../container/AddTodo";
//import TodoList from "./TodoList";
import TodoList from "../container/TodoList"
import Footer from '../container/footer'
class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}

export default App