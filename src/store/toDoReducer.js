import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'reducerToDo',

  initialState: {
    toDoList: []
  },

  reducers: {
    addToDo: (state, action) => {
      state.toDoList.unshift({ id: Date.now(), text: action.payload })
    },
    deleteToDo: (state, action) => {
      state.toDoList = state.toDoList.filter(list => list.id !== action.payload)
    }
  }
})

export const { addToDo, deleteToDo } = todoSlice.actions
export default todoSlice.reducer