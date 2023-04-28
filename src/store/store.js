import { createStore } from 'redux'

const ADD = 'ADD'
const DELETE = 'DELETE'

export const addToDo = text => {
  return {
    type: ADD,
    text
  }
}

export const deleteToDo = id => {
  return {
    type: DELETE,
    id: id
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ id: Date.now(), text: action.text}, ...state]
    case DELETE:
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store