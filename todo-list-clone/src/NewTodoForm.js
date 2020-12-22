import React, { Component } from 'react'
import "./NewTodoForm.css"

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoItem:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
         
    }
    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addItem(this.state);
        this.setState({
            todoItem:""
        })
        
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]:evt.target.value
       })
    }
     render() {
        
        return (
            <div >
                <form action="" onSubmit={this.handleSubmit} className ="newtodoform">
                    <label htmlFor="todoItem">New Todo</label>
                    <input
                        id="todoItem"
                        name="todoItem"
                        value={this.state.todoItem}
                        onChange={this.handleChange}
                        type="text" />
                    <button>add Item</button>
             </form>
            </div>
        )
    }
}

export default NewTodoForm;