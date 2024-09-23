import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <h1>Redux Toolkit Module</h1>
      <p>- store <br />- reducers <br />- useSelectors
      <br />- useDispatch</p>
      <AddTodo />
      <Todos />
    </>
  )
}


export default App

// STEP 1 : Configure Store
// STEP 2 : Reducers (Slices in ReduxToolkit)
            // todoSlice.js naming convention