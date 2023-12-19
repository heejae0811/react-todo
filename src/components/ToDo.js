import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './todo.scss'

function ToDo(props) {
	// ** todo 삭제하기 DELETE
	function onDelete(e) {
		e.preventDefault()

		axios
			.delete(`http://localhost:3001/todo/${props.id}`)
			.then(function (response) {
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<li>
			<Link to={`/${props.id}`}>
				<p>{props.todo}</p>
			</Link>
			<button onClick={onDelete}>DEL</button>
		</li>
	)
}

export default ToDo
