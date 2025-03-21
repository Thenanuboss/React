import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const Increment = () => {
      setCount(count+1)
    }

    const Decrement = () => {
      if (count != 0) {
      setCount(count-1)
    }
  }

  return (
    <>
<h1>{count}</h1>
<button onClick={Increment}>Increment</button>
<button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
