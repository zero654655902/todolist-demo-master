import {addTodoAction} from "../action/addtodo";
import AddTodo from "../component/AddTodo";
import {connect} from 'react-redux'
import TodoList from "../component/TodoList";



const mapDispatchToProps = (dispatch) => {
    return {
        addTodoList: (text) => {
            dispatch(addTodoAction(text))
        }
    }

};

// const mapStateToProps=(state)=>{
//     return{text:state.text}
// }

export default connect(() => {
    return {}
}, mapDispatchToProps)(AddTodo)
// export default connect(mapStateToProps, mapDispatchToProps)(AddTodo,TodoList)