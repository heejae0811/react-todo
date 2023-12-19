import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
		<li className="flex justify-between items-center gap-3 mb-6 px-4 py-3 md:px-5 border border-slate-600 rounded">
			<Link to={`/${props.id}`} className="hover:underline underline-offset-8">
				<p className="flex gap-2 text-base md:text-lg">{props.todo}</p>
			</Link>
			<button
				class="min-w-fit px-5 py-2 bg-orange-400 hover:bg-orange-600 transition rounded"
				onClick={onDelete}
			>
				DEL
			</button>
		</li>
	)
}

export default ToDo
