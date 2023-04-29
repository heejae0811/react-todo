import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Detail() {
  // ** Hooks
  const param = useParams()

  // ** Redux States
  const toDos = useSelector(state => state)

  const toDo = toDos.find(list => list.id === Number(param.id))

  return (
    <>
      <h1>Detail</h1>

      <p>Created: {toDo.id}</p>
      <p>{toDo.text}</p>
    </>
  )
}

export default Detail