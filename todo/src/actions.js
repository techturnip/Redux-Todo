// Define Action Types
export const ADD_TODO = 'ADD_TODO'

// Define Action Creators
export const addTodo = todo => {
  console.log(todo)
  return {
    type: ADD_TODO,
    payload: { todo }
  }
}
