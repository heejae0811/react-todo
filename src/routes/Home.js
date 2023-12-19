import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ToDo from '../components/ToDo'
import './home.scss'

function Home() {
	// ** States
	const [todo, setTodo] = useState('')
	const [todoList, setTodoList] = useState([])

	// ** todo 등록하기 POST
	function onSubmit(e) {
		e.preventDefault()

		if (todo === '') {
			alert('To Do를 입력해 주세요.')
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

		if (window.confirm('리스트를 전체 삭제하시겠습니까?')) {
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
			<div className="layout home">
				<h1>To Do List</h1>

				<form onSubmit={onSubmit}>
					<input
						type="text"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
						placeholder="What is your to do?"
					/>
					<button>ADD</button>
				</form>

				<ul>
					{todoList.map((list, index) => {
						return <ToDo id={list.id} todo={list.todo} key={index} />
					})}
				</ul>

				{todoList.length > 0 && (
					<button className="btn-clear" onClick={onClear}>
						Clear all
					</button>
				)}
			</div>
		</>
	)
}

export default Home
