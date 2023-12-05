import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, clearToDo } from '../store/toDoReducer'
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
    if(text === '') {
      window.confirm('ToDo를 입력해 주세요.')
    } else {
      dispatch(addToDo(text))
      setText('')
    }
  }

  function onClear(e) {
    e.preventDefault()
    dispatch(clearToDo())
  }

  return (
    <>
      <div className="layout home">
        <h1>To Do List</h1>

        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} placeholder="What is your to do?"/>
          <button>ADD</button>
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

        {
          toDos.length > 0 &&
          <button
              className="btn-clear"
              onClick={onClear}>
            Clear all
          </button>
        }
      </div>
    </>
  )
}

export default Home