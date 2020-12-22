function uniqueId () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  
export default uniqueId;

// const newitem = this.state.todos.map((obj) => (
//   console.log(obj.id)
//   id === id ? { todoItem: obj.todoItem } : obj
// )
// )
  