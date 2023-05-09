import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './detail.scss'

function Detail() {
  // ** Hooks
  const param = useParams()

  // ** Redux States
  const toDos = useSelector(state => state.toDos.toDoList)

  const toDo = toDos.find(list => list.id === Number(param.id))

  return (
    <>
      <div className="layout detail">
        <h1>Detail</h1>

        <p className="date">No.{toDo.id}</p>
        <p>{toDo.text}</p>
      </div>
    </>
  )
}

export default Detail