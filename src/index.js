import {createStore} from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

// state를 mutate를 해서는 안된다. 기존의 배열을 수정하는 것이 아니라 새로운 배열을 만들어서 return 하는 것 이다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{id: Date.now(), text: action.text}, ...state]
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}

const paintToDos = () => {
  const toDos = store.getState()

  ul.innerHTML = '' // ul을 빈 값으로 만든 다음에 li를 추가시킨다. (중복 등록이 안됨)

  toDos.forEach(toDo => {
    const li = document.createElement('li')
    const btn = document.createElement('button')

    btn.innerText = 'DEL'
    btn.addEventListener('click', dispatchDeleteToDo)

    li.id = toDo.id
    li.innerText = toDo.text
    li.append(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)

const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ''
  dispatchAddToDo(toDo)
}

form.addEventListener('submit', onSubmit)