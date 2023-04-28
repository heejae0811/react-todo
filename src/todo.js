import {createStore} from 'redux'

// html 태그 선택
const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

// 2. 리듀서 만들기
const reducer = (state = [], action) => {
  // 3. 액션 만들기
  switch(action.type) {
    case ADD_TODO:
      return [{ id: Date.now(), text: action.text }, ...state] // state.push(action.text) X
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.id)) // filter(): 조건에 만족하는 리스트들을 새로운 배열로 return
    default:
      return state
  }
}

// 1. 스토어 만들기
const store = createStore(reducer)

// 투두 리스트 추가하기
const addToDo = text => {
  return {
    type: ADD_TODO,
    text
  }
}

// 투두 리스트 삭제하기
const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

// 4. 디스페치 만들기
const dispatchAddToDo = text => {
  store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDo(id))
}

// 5. 이벤트 함수 만들기
const paintToDos = () => {
  const toDos = store.getState()

  // ul을 빈 값으로 만든 다음에 li를 추가시킨다. (새로운 return 값을 등록해야 하기 때문에 기존에 등록된 내용을 비운다.)
  ul.innerHTML = ''

  toDos.forEach(toDo => {
    const li = document.createElement('li')
    const btn = document.createElement('button')

    btn.innerText = 'DEL'
    btn.addEventListener('click', dispatchDeleteToDo) // 디스패치 실행

    li.id = toDo.id
    li.innerText = toDo.text

    li.appendChild(btn)
    ul.appendChild(li)
  })
}

// paintToDos의 변화를 감지한다.
store.subscribe(paintToDos)

// 5. 이벤트 함수 만들기
const onSubmit = e => {
  e.preventDefault()
  const toDo = input.value
  input.value = ''
  dispatchAddToDo(toDo) // 디스패치 실행
}

form.addEventListener('submit', onSubmit)