import React, { Component } from "react";
import "./TodoLi.css"

class TodoLi extends Component{
    constructor(props) {
        super(props)
        this.state = {
            itemss: this.props, isEditing: false,isCompleted:false
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
        this.handleRemove =this.handleRemove.bind(this)
    }

    handleUpdate(evt) {
        evt.preventDefault()
        this.props.handleEdits(this.state, this.props.id)  
        this.setState({
            isEditing:!this.state.isEditing
        })
        
    }

    toggleEdit() {
        this.setState({
            isEditing:!this.state.isEditing
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]:evt.target.value
       })
    }
    handleComplete() {
        // alert("Yes")
        this.setState({
            isCompleted:!this.state.isCompleted
        })
        
    }
    handleRemove(evt) {
        this.props.remove(this.props.id)
    }
    
    render() {
        let display;
        let complet = this.state.isCompleted? "strike" : ""

        if (this.state.isEditing) {
            display = 
                <div className="todoli-edit">
                    <form action="" onSubmit={this.handleUpdate}>
                    <input type="text"
                        id="itemss"
                        name="itemss"
                        onChange={this.handleChange}
                        value={this.state.itemss.item} />
                   
                    <button>submit Change</button>
                </form>
            </div>
            
        } else {
           display =  <div className="todoli-display">
           <span className="todoli-display-content">
              <ul>
               <li className={complet} onClick={this.handleComplete}>{ this.props.item}</li>
              </ul>
               </span>
               <button className="todoli-display-delete" onClick={this.handleRemove}>delete</button>
            <button className="todoli-display-edit" onClick={this.toggleEdit}>edit</button>
       </div>
        }
        return (
            <div className="todoli">
          {display}
            </div>
        )
    }
        
        
}

export default TodoLi;