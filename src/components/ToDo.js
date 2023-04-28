import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToDo } from '../store/store'
import { Link } from 'react-router-dom'

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
        { props.text } <button onClick={onDelete}>DEL</button>
      </Link>
    </li>
  )
}

export default ToDo