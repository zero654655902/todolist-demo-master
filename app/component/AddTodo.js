import React, {Component} from 'react'

class AddTodo extends React.Component {
    addText() {
        const text = this.text.value;
      //  console.log(text);
        this.props.addTodoList(text)
        this.text.value=''
    }

    render() {
        //console.log('www')
       // console.log(this.props.text)
        return (
            <div>
                <input type="text" ref={(text) => this.text = text}/>
                <input type="button" value='add' onClick={this.addText.bind(this)}/>
            </div>
        )
    }

}

export default AddTodo