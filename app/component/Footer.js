import React,{Component} from 'react'

export default class Footer extends React.Component{
    todoShow(filterMethod){
        this.props.todoFilter(filterMethod)
    }
    render(){
        const footers=["ALL","ACTIVE",'COMPLETED']
        let footerList=footers.map((filterMethod,index)=>
        {
            return(<input type="button" value={filterMethod} key={index} onClick={this.todoShow.bind(this,filterMethod)}/>)
        })
        return(
            <div>
                {footerList}
            </div>
        )
    }
}