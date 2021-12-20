// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext()

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1)

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  )
}

function useCount(){
  const context = React.useContext(CountContext)
  
  if (!context) {
    throw new Error ('useCount must using with Provider')
  }

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [_, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
