import React, { Component } from 'react';
import TodoLi from "./TodoLi";
import NewTodoForm from "./NewTodoForm";
import uniqueId from './helpers';


class TodoHome extends Component{
    constructor(props) {
        super(props)
        this.state = {
            todos:[
                { todoItem: "Exercise",id:uniqueId()},
                {todoItem: "Learn Javascript",id:uniqueId()}
              ]
        }
        this.addItem = this.addItem.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.removeItems =this.removeItems.bind(this)
    }
    handleEdit(newObj,id) {
        const newitem = this.state.todos.map((obj) =>(
            id === obj.id ? { todoItem: newObj.itemss ,id:id} : obj
        )
        )
            
      
        this.setState({ todos: newitem })
    }
    removeItems(idx) {
        this.setState(st => ({
          todos:st.todos.filter(n =>n.id!==idx)
       }))
    }
    
    renderItems() {
        
 
        return (
       
            this.state.todos.map((item,idx) => (
                <TodoLi
                    item={item.todoItem}
                    id={item.id}
                    handleEdits={this.handleEdit}
                    remove={ this.removeItems} />
            ))
       
        );
    }
    addItem(items) {
        
        let newItem = { ...items, id: uniqueId() }
        this.setState(state => ({
            todos:[...state.todos,newItem]
        }))
        
    }
 
 
    render() {
       
        return (
            <div className="todohome">
                <h1 className="todohome-heading">Todo List!</h1>
              <h2 className="todohome-subheading1">A simple React Todo list App</h2>
                <div className="todohome-todo-listing">
                   {this.renderItems()}
                </div>
                <div className="todohome-new-todo">
                    <NewTodoForm addItem={ this.addItem}/>
                </div>

            </div>
        )
    }
}

export default TodoHome