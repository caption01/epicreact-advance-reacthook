// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import { useState, useReducer } from 'react'

function countReducer(state, action){

  if (action.type === 'increment') {
    return { ...state, count: state.count + action.value }
  }
  
  return  state
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = useReducer(countReducer, { count: initialCount })
  const { count } = state

  const increment = () => {
    dispatch({ type: 'increment', value: step })
  }

  console.log(count)

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
