
import Footer from "../component/Footer";
import {connect} from 'react-redux'
import {filterAction} from '../action/footer'

const mapDispatchToProps=(dispatch)=>{
    return{
        todoFilter:(filterMethod)=>{
            dispatch(filterAction(filterMethod))
        }
    }

}

export default connect(() => {
    return {}
}, mapDispatchToProps)(Footer)