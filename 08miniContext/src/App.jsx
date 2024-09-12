import "./App.css";
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {

  return (
    // .provider and value yaha bhi dete hai log

    <UserContextProvider>
      <h1>React Vai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
