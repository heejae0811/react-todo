import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteToDo } from '../store/store'
import './todo.scss'

function ToDo(props) {
  // ** Hooks
  const dispatch = useDispatch()

  function onDelete(e) {
    e.preventDefault()
    dispatch(deleteToDo(props.id))
  }

  return (
    <li>
      <Link to={`/${props.id}`}>
        <p>{ props.text }</p>
      </Link>
      <button onClick={onDelete}>DEL</button>
    </li>
  )
}

export default ToDo