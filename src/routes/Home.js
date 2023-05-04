import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../store/toDoReducer'
import ToDo from '../components/ToDo'
import './home.scss'

function Home() {
  // ** Hooks
  const dispatch = useDispatch()

  // ** States
  const [text, setText] = useState('')

  // ** Redux States
  const toDos = useSelector(state => state.toDos.toDoList)

  function onChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addToDo(text))
    setText('')
  }

  return (
    <>
      <div className="layout home">
        <h1>To Do List</h1>

        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} placeholder="What is your to do?"/>
          <button>Add</button>
        </form>

        <ul>
          {
            toDos.map((toDo, index) => {
              return (
                <ToDo id={toDo.id} text={toDo.text} key={index}/>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Home