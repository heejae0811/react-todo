// store는 나의 state(바뀌는 데이터)를 저장하는 곳이다.
import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

number.innerText = 0

// 2. reducer를 만든다. reducer는 function(함수)이다.
// 3. action을 만든다.
const countModifier = (count = 0, action) => {
  if(action.type === 'ADD') {
    return count + 1
  } else if(action.type === 'MINUS') {
    return count - 1
  } else {
    return count
  }
}

// 1. store를 만든다.
const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

// 4. dispatch(객체)를 만든다.
const handleAdd = () => {
  countStore.dispatch({type: 'ADD'})
}
const handleMinus = () => {
  countStore.dispatch({type: 'MINUS'})
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)