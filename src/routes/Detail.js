import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './detail.scss'

function Detail() {
	// ** States
	const [detailTodo, setDetailTodo] = useState([])

	// ** Hooks
	const params = useParams().id

	useEffect(() => {
		axios
			.get(`http://localhost:3001/todo/${params}`)
			.then(function (response) {
				setDetailTodo(response.data)
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [])

	return (
		<>
			<div className="layout detail">
				<h1>Detail</h1>

				<p className="date">No.{detailTodo.id}</p>
				<p>{detailTodo.todo}</p>
			</div>
		</>
	)
}

export default Detail
