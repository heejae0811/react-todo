// store는 나의 state(바뀌는 데이터)를 저장하는 곳이다.
import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

number.innerText = 0

// string을 직접 사용하기 보다는 변수로 만들어서 사용하는 것이 오타 등의 에러를 발견할 수 있어 효율적이다.
const ADD = 'ADD'
const MINUS = 'MINUS'

// 2. reducer(countModifier)를 만든다. reducer는 function(함수)이다. reducer의 return값이 state가 된다.
// 3. action을 만든다. (if문보다 switch문이랑 더 자주 사용된다. 공식문서.)
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count -1
    default:
      return count
  }
}

// 1. store를 만든다.
const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange)

// 4. dispatch(object, 객체)를 만든다. dispatch를 통해서 action을 보낸다.
const handleAdd = () => {
  countStore.dispatch({type: ADD})
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS})
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)