// The Context API in React is a feature that allows you to share data 
// between components without having to pass props manually at every 
// level of the component tree. 


// this issue/Concept is known as Prop Drilling which is solved by 
// Context API and Redux(to pass data in organized manner
// (STATE MANAGEMENT)) [easier version of redux => Redux Toolkit(RTK)]

// Context file '.js' hoti hai and hm global me props krke krenge

import React from 'react'

const UserContext = React.createContext()

export default UserContext;

// Context ek major chiz dega jjo hai "provider"
// Switch

// Step 1: Create Context (Not a function, no Brackets)
// Step 2: Create ka Var Context.Provider({children})=> {}, Value pass kro
// Step 3: Login me Import UserContext var import kro using useContext Hook
// const {setUser} = useContext(UserContext)
// Step 4: Same with Profile
// Step 5: Ye use kr lo in UserContextProvider Tag me

