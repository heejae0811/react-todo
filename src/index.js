// store는 나의 state(바뀌는 데이터)를 저장하는 곳이다.
import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

// 2. reducer를 만든다. reducer는 function(함수)이다.
// 3. action을 만든다.
const countModifier = (count = 0, action) => {
  console.log(count, action)

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

// 4. dispatch(객체)를 만든다.
countStore.dispatch({type: 'ADD'})
countStore.dispatch({type: 'MINUS'})

console.log(countStore.getState())