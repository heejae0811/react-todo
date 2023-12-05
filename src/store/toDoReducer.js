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
    },
    clearToDo: (state, action) => {
      if(window.confirm('진짜로 삭제하시겠습니까?')) {
        state.toDoList = []
      }
    }
  }
})

export const { addToDo, deleteToDo, clearToDo } = todoSlice.actions
export default todoSlice.reducer