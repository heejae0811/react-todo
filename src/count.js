import { createStore } from 'redux'

// html 태그 선택
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const number = document.getElementById('number')

// 초기값
number.innerText = 0

// string을 직접 사용하기 보다는 변수로 만들어서 사용하는 것이 오타 등의 에러를 발견할 수 있어 효율적이다.
const ADD = 'ADD'
const MINUS = 'MINUS'

// 2. reducer(변수 이름은 자유)를 만든다.
const reduceCountModifier = (count = 0, action) => {
  // 3. action을 만든다.
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
const countStore = createStore(reduceCountModifier)

// store 안에 있는 state를 가지고 온다.
const onChange = () => {
  number.innerText = countStore.getState()
}

// store 안에 있는 state의 변화를 감지한다.
countStore.subscribe(onChange)

// 4. dispatch를 만든다.
const handlePlus = () => {
  countStore.dispatch({type: ADD})
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS})
}

// 클릭 이벤트
plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)