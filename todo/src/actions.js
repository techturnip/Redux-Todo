// Define Action Types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

// Define Action Creators
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: { todo }
  }
}

export const toggleCompleted = (bool, id) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: { bool, id }
  }
}
