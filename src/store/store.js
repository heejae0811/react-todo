import { configureStore, createSlice } from '@reduxjs/toolkit'

// createSlice는 알아서 reducer를 준다.
// state.push를 해서 mutate를 했지만 toolkit 알아서 새로운 state로 만들어준다.
const reducer = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.unshift({ id: Date.now(), text: action.payload })
    },
    deleteToDo: (state, action) => {
      state.filter(toDo => toDo.id !== action.payload)
    }
  }
})

const store = configureStore({ reducer: reducer.reducer })

export const { addToDo, deleteToDo } = reducer.actions

export default store