import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

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
			<section>
				<h1 className="mt-6 mb-12 md:mt-10 text-5xl font-bold text-center">To Do Detail</h1>

				<div className="p-4 md:p-6 md:pb-8 border border-slate-600 rounded">
					<div className="flex justify-between mb-8">
						<p className="text-xl font-bold text-right">No.{detailTodo.id}</p>
						<p className="text-xl font-bold text-right">{dayjs(detailTodo.created_at).format('YYYY.MM.DD')}</p>
					</div>

					<p className="text-base md:text-lg">{detailTodo.todo}</p>
				</div>

				<Link
					to={`/`}
					className="block w-full md:w-1/3 m-auto mt-12 px-3 py-4 bg-orange-800 hover:bg-orange-600 transition rounded text-center"
				>
					Go to To Do List
				</Link>
			</section>
		</>
	)
}

export default Detail
