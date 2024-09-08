import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Hooks isliye dhundha cause 1 click me multiple UI changes karne ke liye
// UI Updation ko React ko control kr rha

// React Hooks are functions that let you use 
// React state and lifecycle features from function components without writing a class component\\


function App() {
  let [count, setCount] = useState(15) 
  // this is a hook, 2 chiz milti hai in form of ARRAY
  // count => value, setCount => funct  
  
  let counter = 15
  let increase = () => {
    if(count<20){
      count = count + 1
      setCount(count)
    }
    // console.log("Clicked" + count);
  }

  let decrease = () => {
    if(count>0){
      count = count - 1
      setCount(count)
    }
  }

  // Through React FIBRE Hydration process ez hogya
  // Mtlb Jab page reload hota to HTML me JS add krna

  // React “attaches” to existing HTML that was already rendered by React in a server environment. 
  // During hydration, React will attempt to attach event listeners to the existing markup 
  // and take over rendering the app on the client.

  // Reconcilation => REACT consider krti kisko update krna hai kisko nhi karna
  // to Differentiate one tree from another (browser vala and React ka tree)

  // Virtual DOM me Selective part ko RERENDER

  // Why use Keys? To diff list as it is stable, predictable and unique

  // https://github.com/acdlite/react-fiber-architecture

  // Fibre Uses:
  // pause work and come back to it later.
  // assign priority to different types of work.
  // reuse previously completed work.
  // abort work if it's no longer needed.

  // props/properties =>key value vala
  return (
    <>
      <h1>Counter : {count}</h1>

      <button onClick={increase}>Increase </button>
      <br />
      <button onClick = {decrease}>Decrease</button>
    </>
  )
}

export default App
