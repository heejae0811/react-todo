import { useState, useEffect } from 'react'
import axios from 'axios'
import ToDo from '../components/ToDo'

function Home() {
	// ** States
	const [todo, setTodo] = useState('')
	const [todoList, setTodoList] = useState([])

	// ** todo 등록하기 POST
	function onSubmit(e) {
		e.preventDefault()

		if (todo === '') {
			alert('Please enter ToDo.')
		} else {
			axios
				.post('http://localhost:3001/todo', {
					todo: todo
				})
				.then(function (response) {
					setTodo('')
					console.log(response)
				})
				.catch(function (error) {
					console.log(error)
				})
		}
	}

	// ** todo 전체 삭제하기 DELETE

	function onClear(e) {
		e.preventDefault()

		if (window.confirm('Do you want to delete the entire list?')) {
			axios
				.delete('http://localhost:3001/todo')
				.then(function (response) {
					console.log(response)
				})
				.catch(function (error) {
					console.log(error)
				})
		}
	}

	// ** todoList 변경될 때 마다 GET
	useEffect(() => {
		axios
			.get('http://localhost:3001/todo')
			.then((response) => {
				setTodoList(response.data)
				console.log(response)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [todoList])

	return (
		<>
			<section>
				<h1 className="mt-6 mb-12 md:mt-10 text-5xl font-bold text-center">To Do List</h1>

				<form className="mb-6" onSubmit={onSubmit}>
					<label htmlFor="toDo" className="block mb-3 text-xl font-bold">
						New To Do
					</label>

					<div className="flex gap-3 md:gap-5">
						<input
							type="text"
							id="toDo"
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
							className="w-3/4 px-3 py-4 rounded outline-none"
							placeholder="What is your to do?"
						/>
						<button className="w-1/4 bg-orange-400 hover:bg-orange-600 transition rounded">ADD</button>
					</div>
				</form>

				<ul>
					{todoList.map((list, index) => {
						return <ToDo id={list.id} todo={list.todo} key={index} />
					})}
				</ul>

				{todoList.length > 0 && (
					<button
						onClick={onClear}
						class="block w-full md:w-1/3 m-auto mt-12 px-3 py-4 bg-orange-800 hover:bg-orange-600 transition rounded"
					>
						Clear all
					</button>
				)}
			</section>
		</>
	)
}

export default Home
