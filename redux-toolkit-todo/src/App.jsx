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

// REDUX - seperate lib
// a predictable state container for JS apps

// changes show be made using functions(reducers), Redux ke pahle FLUX tha(andrew), 
// - store 
// - reducers 
// - useSelectors 
// - useDispatch

// Redux and React Redux alag hai
// Redux => core Lib
// React-Redux => uska implementation hai wiring karne ke liyr taki react aur redux me baatcheet ho

// Step 1: Store banane se (Hamesha ek store banta) called Single Source of Truth 
// // ek configureStore  chahiye jise hojayega 

// Step 2: Reducer krna hai to, Store me jab value update hogi to har traf se nhi leta, data flow nhi hota
// use batana padta reducer kaha hai

// Step 3: Documentation me ise Slice bolte
// Step 4: Need 3 chize => name, initialState(like use state), reducers ki list(obj)
// usme jitne chahe key(functions) value pair daal skte {seperate file me bhi likh skte

// Step 5: state, action milta, action.payload se value mili
// Step 6: niche 10 reducer hai to 10 export kro, taki konsa component me konsa use hojaye
// // and main-source bhi export

// Step 7: AddTodo me value bhejni hai using const dispatch = useDispatch()
// Step 8: Var me Lene ke liye `useSelector(state => state.todos )`  in callback

// why in package.json private=true
// because we don't want to publish our project on npm
// means we don't want to share our project with others
// so we make it private
// what is the meaning of npm
// npm is a package manager for the JavaScript programming language.
// It is the default package manager for the JavaScript runtime environment Node.js.

