import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../store/store'
import ToDo from '../components/ToDo'

function Home() {
  // ** Hooks
  const dispatch = useDispatch()

  // ** States
  const [text, setText] = useState('')

  // ** Redux States
  const toDos = useSelector(state => state)

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
      <h1>To Do</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>

      <ul>
        {
          toDos.map(toDo => {
            return (
              <ToDo id={toDo.id} text={toDo.text} key={toDo.id}/>
            )
          })
        }
      </ul>
    </>
  )
}

export default Home