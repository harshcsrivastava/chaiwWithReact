import {createSlice, nanoid} from '@reduxjs/toolkit';

// method ek hi chahiye, lekin nanoId liya jo unique id generate karega

// store khali hai ya kuch data hai usko define karna hai
const initialState = {
    todos: [{id: nanoid(), text: "HelloW world"}]
}

// define reducers
// what is reducer? Reducer is a function that accepts state and action, and returns the next state.
// Reducers specify how the application's state changes in response to actions sent to the store.
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// name pahle se ek keyword reduxtoolkit me hai, isliye name: 'todos' likha hai
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // hamesha state, action parameter lena padega
            // state me initial state aayegas
            const todo = {
                id: nanoid(), 
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // action me id aayega
            // state me todos array hai, usme se id wala todo remove karna hai
            state.todos = state.todos.filter((todo) => todo.id!== action.payload)
 
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

// kuch bhi slice ya reducer banaoge to export kroge
export default todoSlice.reducer
// to give awareness to store, ki inhi ko uodate kroge