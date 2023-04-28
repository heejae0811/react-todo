import React from 'react'
import {useSelector} from 'react-redux'

function Detail() {
  // ** Redux States
  const toDos = useSelector(state => state)

  console.log(toDos)

  return <h1>Detail</h1>
}

export default Detail