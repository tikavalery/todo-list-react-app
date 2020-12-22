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
                    <form onSubmit={this.handleUpdate} className="todoli-edit-form">
                    <input type="text"
                        id="itemss"
                        name="itemss"
                        onChange={this.handleChange}
                        value={this.state.itemss.item} />
                   
                    <button>SAVE</button>
                </form>
            </div>
            
        } else {
            display = <div className="todoli-display">
                <div className="todoli-display-content">
                     <p className={complet} onClick={this.handleComplete}>{ this.props.item}</p>
                    
                     
               </div>
                <div className="todoli-display-buttons">
                 <button className="todoli-display-buttons-edit" onClick={this.toggleEdit}><i class="fas fa-pen" /></button>
                <button className="todoli-display-buttons-delete" onClick={this.handleRemove}><i class="fas fa-trash"/></button>
                
               </div>
               
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