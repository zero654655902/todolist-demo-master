import {connect} from 'react-redux'
import TodoList from "../component/TodoList";
import {checkAction} from "../action/todoList";
import {deleteAction} from "../action/todoList";

const mapStateToProps = (state) => {
    return {
        text: state
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onCheck:(index)=>{
            dispatch(checkAction(index))
        },
        onDelete:(index)=>{
            dispatch(deleteAction(index))
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)