import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // devui.io
  // props => COmponents ko reusable banata hai
  // and value ko receive karna hai to PROPS parameter dete hai component me for reusable

  let obj = {
    name: "Harsh", 
    age: 19,
  }
  
  return (
    <>
      <h1 className='bg-green-500 text-black p-5 rounded-lg mb-4'>Tailwind Test</h1>
      <Card username = "Aeophics" btnText = "Click Me"/>
      <Card />
    </>
  )
}

export default App
