import { useState } from "react";
import { TodoProvider } from "./context";
import "./App.css";
import { useEffect } from "react";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    // if setTodo kiya to purani sari value override hogi
    setTodo( (prev) => [{id: Date.now(), ...todo, }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo  )))
  } 

  const deleteTodo = (id) =>{
    // setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? : prevTodo))) map acha nhi hai syntax yaha

    setTodo((prev) => prev.filter((todo) => (todo.id !== id )))
    // sari values ane do, ek value nhi ane do bas
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  } 

  //local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodo(todos)
    }
  }, [])
  useEffect((key) => {
    localStorage.setItem("todos",JSON.stringify(todos))
    // convert array into string 
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              // dont use index as IDs 
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
