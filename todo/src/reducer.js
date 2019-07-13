import { ADD_TODO } from './actions'

// all state values need an initial value
const initialState = {
  todos: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const { todo } = action.payload
      const newTodoList = state.todos.concat([todo])

      return {
        ...state,
        todos: newTodoList
      }

    default:
      return state
  }
}
