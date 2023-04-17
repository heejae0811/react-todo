// store는 나의 state(바뀌는 데이터)를 넣는 곳이다.
import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

// reducer는 function(함수)이다.
const countModifier = (count = 0) => {
  count++
  count--
  return count
}

const countStore = createStore(countModifier)

console.log(countStore.getState())