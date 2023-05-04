import { configureStore, createSlice } from '@reduxjs/toolkit'

const toDoReducer = createSlice({
  name: 'toDosReducer',

  initialState: {
    todoList: []
  },

  reducers: {
    addToDo: (state, action) => {
      state.todoList.unshift({ id: Date.now(), text: action.payload })
    },
    deleteToDo: (state, action) => {
      state.todoList = state.todoList.filter(list => list.id !== action.payload)
    }
  }
})

const store = configureStore({ reducer: toDoReducer.reducer })

export const { addToDo, deleteToDo } = toDoReducer.actions
export default store